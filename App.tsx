import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as Tone from 'tone';
import { HACKS_DATA, PODERES_SHEREZADE_DATA, CERTIFICATIONS_DATA } from './utils/constants';
import { Hack, ModalState, Archetype, PoderDeSherezade, Certification, PurchasedService, ServiceType } from './utils/types';
import { generateStrategicDirective } from './services/geminiService';
import Confetti from './components/Confetti';
import { toast } from 'sonner';

// Landing Page Sections
import { Toaster } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import SEO from './components/SEO';
import Introduction from './components/Introduction';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

// Core App Sections
import ArchetypeQuiz from './components/ArchetypeQuiz';
import HacksSection from './components/HacksSection';
import ContactForm from './components/ContactForm';
import ArchitectDashboard from './components/ArchitectDashboard';
import GrimorioTacticoSection from './components/GrimorioTacticoSection';
import SRAPMetronome from './components/SRAPMetronome';
import OraculoChalamandra from './components/OraculoChalamandra';
import KitMagistralRPG from './components/KitMagistralRPG';
import PremiumServices from './components/PremiumServices';
import SrapRitual from './components/SrapRitual';
import Header from './components/Header';
import WhatsAppFloat from './components/WhatsAppFloat';
import TheCodex from './components/TheCodex';

// Modal Content
import PostPaymentPage from './components/PostPaymentPage';
import DiscoverySessionPage from './components/DiscoverySessionPage';
import KitMagistralSection from './components/KitMagistralSection';
import HackPracticeModule from './components/HackPracticeModule';
import HackEducationalModule from './components/HackEducationalModule';

const App = () => {
    const [completedHacks, setCompletedHacks] = useState<Set<number>>(new Set());
    const [earnedCerts, setEarnedCerts] = useState<Set<number>>(new Set());
    const [purchasedServices, setPurchasedServices] = useState<PurchasedService[]>([]);
    const [modalState, setModalState] = useState<ModalState>({ isOpen: false, type: null, data: null });
    const [celebrate, setCelebrate] = useState(false);
    const [dominantArchetype, setDominantArchetype] = useState<Archetype | null>(null);
    const [aiDirective, setAiDirective] = useState('');
    const [isDirectiveLoading, setIsDirectiveLoading] = useState(false);
    const [isAudioContextStarted, setIsAudioContextStarted] = useState(false);

    // --- Audio Synths Refs ---
    const synths = useRef<{
        completion: Tone.Synth | null;
        directive: Tone.Synth | null;
        celebration: Tone.Synth | null;
        uiClick: Tone.Synth | null;
        modalOpen: Tone.NoiseSynth | null;
        modalClose: Tone.NoiseSynth | null;
        quizSelect: Tone.MembraneSynth | null;
        comboReveal: Tone.FMSynth | null;
    }>({
        completion: null,
        directive: null,
        celebration: null,
        uiClick: null,
        modalOpen: null,
        modalClose: null,
        quizSelect: null,
        comboReveal: null,
    });

    const startAudioContext = useCallback(async () => {
        if (isAudioContextStarted) return;
        await Tone.start();
        setIsAudioContextStarted(true);
    }, [isAudioContextStarted]);

    const handleCelebration = useCallback(() => {
        setCelebrate(true);
        if (isAudioContextStarted) {
            const now = Tone.now();
            ['C4', 'E4', 'G4', 'C5'].forEach((note, i) => {
                playSound('celebration', note, "8n", now + i * 0.15);
            });
        }
        setTimeout(() => setCelebrate(false), 4000);
    }, [isAudioContextStarted]);

    const checkCertifications = useCallback((hacks: Set<number>, currentCerts: Set<number>) => {
        const newCerts = new Set(currentCerts);
        let earnedAny = false;

        CERTIFICATIONS_DATA.forEach(cert => {
            if (newCerts.has(cert.id)) return;

            let isEarned = false;
            if (cert.id === 1) {
                // Special case: any 3 hacks
                isEarned = hacks.size >= 3;
            } else {
                isEarned = cert.requiredHacks.every(id => hacks.has(id));
            }

            if (isEarned) {
                newCerts.add(cert.id);
                earnedAny = true;
                toast.success(`¡Certificación Obtenida: ${cert.title}!`, {
                    description: cert.description,
                    icon: <i className={`${cert.icon} ${cert.color}`}></i>,
                    duration: 5000,
                });
            }
        });

        if (earnedAny) {
            setEarnedCerts(newCerts);
            localStorage.setItem('earnedCertifications', JSON.stringify(Array.from(newCerts)));
            handleCelebration();
        }
    }, [handleCelebration]);

    // --- Sound Playing Functions ---
    const playSound = useCallback((type: keyof typeof synths.current, note?: string, duration?: string, time?: number) => {
        if (!isAudioContextStarted) return;
        const synth = synths.current[type];
        if (!synth) return;

        if (synth instanceof Tone.NoiseSynth) {
            synth.triggerAttackRelease(duration || "8n", time || Tone.now());
        } else if (note) {
            synth.triggerAttackRelease(note, duration || "16n", time || Tone.now());
        }
    }, [isAudioContextStarted]);

    useEffect(() => {
        // --- Initialize all synths ---
        synths.current.completion = new Tone.Synth({ oscillator: { type: 'triangle' }, envelope: { attack: 0.02, decay: 0.1, sustain: 0.3, release: 0.4 } }).toDestination();
        synths.current.directive = new Tone.Synth().toDestination();
        synths.current.celebration = new Tone.Synth().toDestination();
        synths.current.uiClick = new Tone.Synth({ volume: -15, oscillator: { type: 'sine' }, envelope: { attack: 0.001, decay: 0.1, sustain: 0.01, release: 0.1 } }).toDestination();
        synths.current.modalOpen = new Tone.NoiseSynth({ volume: -20, noise: { type: 'white' }, envelope: { attack: 0.005, decay: 0.2, sustain: 0 } }).toDestination();
        synths.current.modalClose = new Tone.NoiseSynth({ volume: -25, noise: { type: 'pink' }, envelope: { attack: 0.005, decay: 0.15, sustain: 0 } }).toDestination();
        synths.current.quizSelect = new Tone.MembraneSynth({ volume: -10 }).toDestination();
        synths.current.comboReveal = new Tone.FMSynth({ volume: -10, harmonicity: 2, modulationIndex: 3 }).toDestination();
        
        // Load data from localStorage
        const savedHacks = localStorage.getItem('completedHacks');
        const hacksSet = new Set<number>();
        if (savedHacks) {
            const parsed = JSON.parse(savedHacks);
            parsed.forEach((id: number) => hacksSet.add(id));
            setCompletedHacks(hacksSet);
        }

        const savedCerts = localStorage.getItem('earnedCertifications');
        const certsSet = new Set<number>();
        if (savedCerts) {
            const parsed = JSON.parse(savedCerts);
            parsed.forEach((id: number) => certsSet.add(id));
            setEarnedCerts(certsSet);
        }

        const savedServices = localStorage.getItem('purchasedServices');
        if (savedServices) {
            setPurchasedServices(JSON.parse(savedServices));
        }

        const savedArchetype = localStorage.getItem('dominantArchetype');
        if (savedArchetype) {
            setDominantArchetype(savedArchetype as Archetype);
        }
        
        // Check for post-payment redirect
        const params = new URLSearchParams(window.location.search);
        if (params.get('payment_success') === 'true') {
            const service = params.get('service') as ServiceType;
            const archetype = (localStorage.getItem('dominantArchetype') as Archetype) || null;
            if (service) {
                 // Add to purchased services if not already there
                 const currentServices = JSON.parse(localStorage.getItem('purchasedServices') || '[]');
                 if (!currentServices.find((s: PurchasedService) => s.type === service)) {
                     const newService: PurchasedService = {
                         type: service,
                         date: new Date().toISOString(),
                         status: 'pending'
                     };
                     const updatedServices = [...currentServices, newService];
                     setPurchasedServices(updatedServices);
                     localStorage.setItem('purchasedServices', JSON.stringify(updatedServices));
                 }
                 setModalState({ isOpen: true, type: 'postPayment', data: { serviceName: service, archetype: archetype } });
                 window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
    }, []);
    
    const toggleHackCompletion = useCallback((id: number) => {
        const newCompleted = new Set(completedHacks);
        const isCompleting = !newCompleted.has(id);
        
        if (isCompleting) {
            newCompleted.add(id);
            playSound('completion', 'C5', '16n');
            playSound('completion', 'G5', '16n', Tone.now() + 0.1);
            checkCertifications(newCompleted, earnedCerts);
        } else {
            newCompleted.delete(id);
        }
        
        setCompletedHacks(newCompleted);
        localStorage.setItem('completedHacks', JSON.stringify(Array.from(newCompleted)));
    }, [completedHacks, earnedCerts, checkCertifications, playSound]);

    const handleGenerateDirective = async () => {
        if (isDirectiveLoading) return;
        playSound('uiClick', 'G5', '32n');
        setIsDirectiveLoading(true);
        setAiDirective('');

        try {
            const completedHackTitles = Array.from(completedHacks).map(id => HACKS_DATA.find(h => h.id === id)?.title).join(', ') || 'ninguno';
            const remainingHacks = HACKS_DATA.filter(h => !completedHacks.has(h.id)).map(h => h.title).join(', ') || 'ninguno';
            const archetypeInfo = dominantArchetype ? `Su arquetipo dominante es '${dominantArchetype}'.` : 'Aún no ha descubierto su arquetipo.';

            const directive = await generateStrategicDirective(completedHackTitles, remainingHacks, archetypeInfo);
            setAiDirective(directive);
            playSound('directive', 'G5', '32n');
            playSound('directive', 'D6', '32n', Tone.now() + 0.075);

        } catch (error: any) {
            console.error("Error generating directive:", error);
            setAiDirective("El Oráculo está nublado. Intenta de nuevo.");
        } finally {
            setIsDirectiveLoading(false);
        }
    };

    const showModal = useCallback((type: ModalState['type'], data: any = null) => {
        playSound('modalOpen');
        setModalState({ isOpen: true, type, data });
    }, [playSound]);

    const hideModal = useCallback(() => {
        playSound('modalClose');
        setModalState({ isOpen: false, type: null, data: null });
    }, [playSound]);

    const handleActivateHack = useCallback((id: number) => {
        showModal('activation', HACKS_DATA.find(h => h.id === id));
    }, [showModal]);

    const handleAmplifyHack = useCallback((id: number) => {
        showModal('hack', HACKS_DATA.find(h => h.id === id));
    }, [showModal]);

    const handlePlayUIClick = useCallback(() => {
        playSound('uiClick', 'G5', '32n');
    }, [playSound]);

    const handleQuizComplete = useCallback((archetype: Archetype) => {
        setDominantArchetype(archetype);
        localStorage.setItem('dominantArchetype', archetype);
        handleCelebration();
        setTimeout(() => {
            document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    }, [handleCelebration]);

    const handleRetakeQuiz = () => {
        playSound('uiClick', 'G5', '32n');
        setDominantArchetype(null);
        localStorage.removeItem('dominantArchetype');
        localStorage.removeItem('completedHacks');
        setCompletedHacks(new Set());
    };

    const renderModalContent = () => {
        if (!modalState.isOpen) return null;
        
        const hack = modalState.data as Hack;
        let title: React.ReactNode = '', subtitle: React.ReactNode = '';
        let modalBody: React.ReactNode;

        switch (modalState.type) {
             case 'discovery':
                title = 'Sesión Descubrimiento';
                subtitle = 'Tu primer paso hacia la decodificación.';
                modalBody = <DiscoverySessionPage />;
                break;
            case 'magistral':
                title = 'Kit Magistral';
                subtitle = 'La arquitectura para dominar tus hacks.';
                modalBody = <KitMagistralSection onShowDiscovery={() => showModal('discovery')} />;
                break;
            case 'hack':
                title = hack.title;
                subtitle = hack.subtitle;
                modalBody = (
                    <HackEducationalModule 
                        hack={hack} 
                        onStartPractice={() => showModal('activation', hack)} 
                    />
                );
                break;
            case 'activation':
                title = `Activar: ${hack.title}`;
                subtitle = 'Ejecuta el protocolo para dominar este hack.';
                modalBody = (
                    <HackPracticeModule 
                        hack={hack} 
                        onComplete={() => { toggleHackCompletion(hack.id); hideModal(); }} 
                    />
                );
                break;
            case 'srap':
                title = 'Ritual SRAP™';
                subtitle = 'Sincroniza Ritmos en Acción Presente';
                 modalBody = (
                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-4">
                            {['Sincronizar', 'Reconocer', 'Activar', 'Pausa'].map((word, i) => (
                                <div key={word} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                                    <span className="text-3xl font-black text-cyan-400 block mb-2">{word[0]}</span>
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{word}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed text-center italic">
                            "Detente. Respira. Reconoce el patrón. Actúa con precisión. Sincroniza tu realidad."
                        </p>
                    </div>
                );
                break;
            case 'postPayment':
                title = 'Transmisión Exitosa';
                subtitle = 'El protocolo ha sido actualizado.';
                modalBody = <PostPaymentPage serviceName={modalState.data.serviceName} archetype={modalState.data.archetype} />;
                break;
        }

        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm" onClick={hideModal}>
                <div className="w-full max-w-3xl bg-[#0a0a0a] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                    <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-start">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">{title}</h3>
                            <p className="text-gray-500 font-medium mt-2">{subtitle}</p>
                        </div>
                        <button onClick={hideModal} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl text-gray-500 hover:text-white transition-colors">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="p-8 md:p-12 max-h-[70vh] overflow-y-auto custom-scrollbar">
                        {modalBody}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-black min-h-screen font-sans selection:bg-yellow-400 selection:text-black" onClick={startAudioContext}>
            <SEO />
            <Toaster position="top-center" expand={false} richColors theme="dark" />
            {celebrate && <Confetti />}
            <Header completedCount={completedHacks.size} totalCount={HACKS_DATA.length} />
            
            <motion.main
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Introduction />
                <HowItWorks />

                {!dominantArchetype ? (
                    <ArchetypeQuiz onQuizComplete={handleQuizComplete} playSelectSound={() => playSound('quizSelect', 'C3')} />
                ) : (
                    <ArchitectDashboard 
                        completedHacks={completedHacks}
                        earnedCerts={earnedCerts}
                        dominantArchetype={dominantArchetype}
                        onGenerateDirective={handleGenerateDirective}
                        aiDirective={aiDirective}
                        isDirectiveLoading={isDirectiveLoading}
                        purchasedServices={purchasedServices}
                    />
                )}
                
                <HacksSection 
                    hacks={HACKS_DATA} 
                    completedHacks={completedHacks} 
                    onActivateClick={handleActivateHack}
                    onAmplifyClick={handleAmplifyHack}
                    playUIClick={handlePlayUIClick}
                />
                
                {dominantArchetype && (
                    <div className="py-12 text-center">
                         <button onClick={handleRetakeQuiz} className="px-8 py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 rounded-2xl transition-all text-xs font-black tracking-widest uppercase">
                            Reiniciar Diagnóstico
                        </button>
                    </div>
                )}
                
                <GrimorioTacticoSection />
                <OraculoChalamandra onComboReveal={() => {
                    playSound('comboReveal', 'C4', '16n');
                    playSound('comboReveal', 'E4', '16n', Tone.now() + 0.07);
                    playSound('comboReveal', 'A4', '16n', Tone.now() + 0.14);
                }} />
                <KitMagistralRPG onOpenModule={(id) => showModal('hack', HACKS_DATA.find(h => h.id === id))} />
                <SrapRitual onActivate={() => showModal('srap')} playUIClick={() => playSound('uiClick', 'G5', '32n')} />
                <SRAPMetronome />
                <TheCodex />
                <Testimonials />
                <PremiumServices onServiceClick={(type) => showModal(type)} playUIClick={() => playSound('uiClick', 'G5', '32n')} />
                <ContactForm />
                <Faq />
            </motion.main>

            <Footer />
            <AnimatePresence>
                {renderModalContent()}
            </AnimatePresence>
            <WhatsAppFloat />
        </div>
    );
};

export default App;
