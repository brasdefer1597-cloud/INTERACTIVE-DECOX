import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as Tone from 'tone';
import { HACKS_DATA, PODERES_SHEREZADE_DATA } from './utils/constants';
import { Hack, ModalState, Archetype, PoderDeSherezade } from './utils/types';
import { generateStrategicDirective } from './services/geminiService';
import Confetti from './components/Confetti';

// Landing Page Sections
import Introduction from './components/Introduction';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

// Core App Sections
import ArchetypeQuiz from './components/ArchetypeQuiz';
import HacksSection from './components/HacksSection';
import CertificationsSection from './components/CertificationsSection';
import ContactForm from './components/ContactForm';
import ArchitectDashboard from './components/ArchitectDashboard';
import GrimorioTacticoSection from './components/GrimorioTacticoSection';
import SRAPMetronome from './components/SRAPMetronome';
import OraculoChalamandra from './components/OraculoChalamandra';
import KitMagistralRPG from './components/KitMagistralRPG';
import PremiumServices from './components/PremiumServices';
import CertifiedTech from './components/CertifiedTech';
import SrapRitual from './components/SrapRitual';
import Header from './components/Header';
import WhatsAppFloat from './components/WhatsAppFloat';
import TheCodex from './components/TheCodex';

// Modal Content
import PostPaymentPage from './components/PostPaymentPage';
import DiscoverySessionPage from './components/DiscoverySessionPage';
import KitMagistralSection from './components/KitMagistralSection';
import TotalTransformationSection from './components/TotalTransformationSection';

const App = () => {
    const [completedHacks, setCompletedHacks] = useState<Set<number>>(new Set());
    const [modalState, setModalState] = useState<ModalState>({ isOpen: false, type: null, data: null });
    const [celebrate, setCelebrate] = useState(false);
    const [dominantArchetype, setDominantArchetype] = useState<Archetype | null>(null);
    const [aiDirective, setAiDirective] = useState('');
    const [isDirectiveLoading, setIsDirectiveLoading] = useState(false);
    const [allTemplateInputs, setAllTemplateInputs] = useState<{ [hackId: number]: { [aspecto: string]: string } }>({});
    const [isAudioContextStarted, setIsAudioContextStarted] = useState(false);

    // --- Audio Synths Refs ---
    const completionSynth = useRef<Tone.Synth | null>(null);
    const directiveSynth = useRef<Tone.Synth | null>(null);
    const celebrationSynth = useRef<Tone.Synth | null>(null);
    const uiClickSynth = useRef<Tone.Synth | null>(null);
    const modalOpenSynth = useRef<Tone.NoiseSynth | null>(null);
    const modalCloseSynth = useRef<Tone.NoiseSynth | null>(null);
    const quizSelectSynth = useRef<Tone.MembraneSynth | null>(null);
    const comboRevealSynth = useRef<Tone.FMSynth | null>(null);


    const startAudioContext = useCallback(async () => {
        if (isAudioContextStarted) return;
        await Tone.start();
        console.log("AudioContext started!");
        setIsAudioContextStarted(true);
    }, [isAudioContextStarted]);

    useEffect(() => {
        // --- Initialize all synths ---
        completionSynth.current = new Tone.Synth({ oscillator: { type: 'triangle' }, envelope: { attack: 0.02, decay: 0.1, sustain: 0.3, release: 0.4 } }).toDestination();
        directiveSynth.current = new Tone.Synth().toDestination();
        celebrationSynth.current = new Tone.Synth().toDestination();
        uiClickSynth.current = new Tone.Synth({ volume: -15, oscillator: { type: 'sine' }, envelope: { attack: 0.001, decay: 0.1, sustain: 0.01, release: 0.1 } }).toDestination();
        modalOpenSynth.current = new Tone.NoiseSynth({ volume: -20, noise: { type: 'white' }, envelope: { attack: 0.005, decay: 0.2, sustain: 0 } }).toDestination();
        modalCloseSynth.current = new Tone.NoiseSynth({ volume: -25, noise: { type: 'pink' }, envelope: { attack: 0.005, decay: 0.15, sustain: 0 } }).toDestination();
        quizSelectSynth.current = new Tone.MembraneSynth({ volume: -10 }).toDestination();
        comboRevealSynth.current = new Tone.FMSynth({ volume: -10, harmonicity: 2, modulationIndex: 3 }).toDestination();
        
        // Load data from localStorage
        const savedHacks = localStorage.getItem('completedHacks');
        if (savedHacks) {
            setCompletedHacks(new Set(JSON.parse(savedHacks)));
        }
        const savedArchetype = localStorage.getItem('dominantArchetype');
        if (savedArchetype) {
            setDominantArchetype(savedArchetype as Archetype);
        }
        const savedInputs = localStorage.getItem('allTemplateInputs');
        if (savedInputs) {
            setAllTemplateInputs(JSON.parse(savedInputs));
        }
        
        // Check for post-payment redirect
        const params = new URLSearchParams(window.location.search);
        if (params.get('payment_success') === 'true') {
            const service = params.get('service');
            const archetype = (localStorage.getItem('dominantArchetype') as Archetype) || null;
            if (service) {
                 setModalState({ isOpen: true, type: 'postPayment', data: { serviceName: service, archetype: archetype } });
                 // Clean URL
                 window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
    }, []);
    
    // --- Sound Playing Functions ---
    const playCompletionSound = useCallback(() => {
        if (!isAudioContextStarted || !completionSynth.current) return;
        const now = Tone.now();
        completionSynth.current.triggerAttackRelease("C5", "16n", now);
        completionSynth.current.triggerAttackRelease("G5", "16n", now + 0.1);
    }, [isAudioContextStarted]);

    const playDirectiveSound = useCallback(() => {
        if (!isAudioContextStarted || !directiveSynth.current) return;
        const now = Tone.now();
        directiveSynth.current.triggerAttackRelease("G5", "32n", now);
        directiveSynth.current.triggerAttackRelease("D6", "32n", now + 0.075);
    }, [isAudioContextStarted]);
    
    const playUIClick = useCallback(() => {
        if (!isAudioContextStarted || !uiClickSynth.current) return;
        uiClickSynth.current.triggerAttackRelease("G5", "32n");
    }, [isAudioContextStarted]);
    
    const playModalOpen = useCallback(() => {
        if (!isAudioContextStarted || !modalOpenSynth.current) return;
        modalOpenSynth.current.triggerAttackRelease();
    }, [isAudioContextStarted]);
    
    const playModalClose = useCallback(() => {
        if (!isAudioContextStarted || !modalCloseSynth.current) return;
        modalCloseSynth.current.triggerAttackRelease();
    }, [isAudioContextStarted]);
    
    const playQuizSelect = useCallback(() => {
        if (!isAudioContextStarted || !quizSelectSynth.current) return;
        quizSelectSynth.current.triggerAttackRelease("C3", "16n");
    }, [isAudioContextStarted]);
    
    const playComboReveal = useCallback(() => {
        if (!isAudioContextStarted || !comboRevealSynth.current) return;
        const now = Tone.now();
        ['C4', 'E4', 'A4'].forEach((note, i) => {
            comboRevealSynth.current.triggerAttackRelease(note, "16n", now + i * 0.07);
        });
    }, [isAudioContextStarted]);

    const handleCelebration = useCallback(() => {
        setCelebrate(true);
        if (isAudioContextStarted && celebrationSynth.current) {
            const now = Tone.now();
            ['C4', 'E4', 'G4', 'C5'].forEach((note, i) => {
                celebrationSynth.current.triggerAttackRelease(note, "8n", now + i * 0.15);
            });
        }
        setTimeout(() => setCelebrate(false), 4000);
    }, [isAudioContextStarted]);
    
    const toggleHackCompletion = useCallback((id: number) => {
        const newCompleted = new Set(completedHacks);
        const isCompleting = !newCompleted.has(id);
        
        if (isCompleting) {
            newCompleted.add(id);
            playCompletionSound();
        } else {
            newCompleted.delete(id);
        }
        
        setCompletedHacks(newCompleted);
        localStorage.setItem('completedHacks', JSON.stringify(Array.from(newCompleted)));
    }, [completedHacks, playCompletionSound]);

    const handleGenerateDirective = async () => {
        if (isDirectiveLoading) return;
        playUIClick();
        setIsDirectiveLoading(true);
        setAiDirective('');

        try {
            const completedHackTitles = Array.from(completedHacks).map(id => HACKS_DATA.find(h => h.id === id)?.title).join(', ') || 'ninguno';
            const remainingHacks = HACKS_DATA.filter(h => !completedHacks.has(h.id)).map(h => h.title).join(', ') || 'ninguno';
            const archetypeInfo = dominantArchetype ? `Su arquetipo dominante es '${dominantArchetype}'.` : 'Aún no ha descubierto su arquetipo.';

            const directive = await generateStrategicDirective(completedHackTitles, remainingHacks, archetypeInfo);
            setAiDirective(directive);
            playDirectiveSound();

        } catch (error: any) {
            console.error("Error generating directive:", error);
            setAiDirective(error.message);
        } finally {
            setIsDirectiveLoading(false);
        }
    };

    const handleTemplateInputChange = useCallback((hackId: number, aspecto: string, value: string) => {
        setAllTemplateInputs(prev => {
            const newInputs = {
                ...prev,
                [hackId]: {
                    ...(prev[hackId] || {}),
                    [aspecto]: value,
                }
            };
            localStorage.setItem('allTemplateInputs', JSON.stringify(newInputs));
            return newInputs;
        });
    }, []);

    const showServiceModal = (serviceType: 'discovery' | 'magistral' | 'total') => {
        playModalOpen();
        setModalState({ isOpen: true, type: serviceType, data: null });
    };

    const showHackModal = useCallback((id: number) => {
        const hack = HACKS_DATA.find(h => h.id === id);
        if (hack) {
            playModalOpen();
            setModalState({ isOpen: true, type: 'hack', data: hack });
        }
    }, [playModalOpen]);

    const showActivationModal = useCallback((id: number) => {
        const hack = HACKS_DATA.find(h => h.id === id);
        if (hack) {
            playModalOpen();
            setModalState({ isOpen: true, type: 'activation', data: hack });
        }
    }, [playModalOpen]);
    
    const showSrapModal = () => {
        playModalOpen();
        setModalState({ isOpen: true, type: 'srap', data: null });
    }
    
    const hideModal = () => {
        playModalClose();
        setModalState({ isOpen: false, type: null, data: null });
    }

    const handleQuizComplete = useCallback((archetype: Archetype) => {
        setDominantArchetype(archetype);
        localStorage.setItem('dominantArchetype', archetype);
        handleCelebration();
        setTimeout(() => {
            const dashboard = document.getElementById('dashboard');
            if (dashboard) {
                dashboard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 500);
    }, [handleCelebration]);

    const handleRetakeQuiz = () => {
        playUIClick();
        setDominantArchetype(null);
        localStorage.removeItem('dominantArchetype');
        localStorage.removeItem('completedHacks'); // Also reset hacks if desired
        setCompletedHacks(new Set());
    };

    const renderModalContent = () => {
        if (!modalState.isOpen) return null;
        
        const hack = modalState.data as Hack;
        let title: React.ReactNode = '', subtitle: React.ReactNode = '';
        let modalBody: React.ReactNode;

        switch (modalState.type) {
             case 'discovery':
                title = <><i className="fa-solid fa-key mr-3"></i>Sesión Descubrimiento</>;
                subtitle = 'Tu primer paso hacia la decodificación.';
                modalBody = <DiscoverySessionPage />;
                break;
            case 'magistral':
                title = <><i className="fa-solid fa-wand-magic-sparkles mr-3"></i>Kit Magistral</>;
                subtitle = 'La arquitectura para dominar tus hacks.';
                modalBody = <KitMagistralSection onShowDiscovery={() => showServiceModal('discovery')} />;
                break;
            case 'total':
                title = <><i className="fa-solid fa-crown mr-3"></i>Transformación Total</>;
                subtitle = 'Asciende al Nivel Maestro.';
                modalBody = <TotalTransformationSection />;
                break;
            case 'hack':
                const poder: PoderDeSherezade | undefined = PODERES_SHEREZADE_DATA.find(p => p.id === hack.poderDeSherezadeId);
                const currentHackInputs = allTemplateInputs[hack.id] || {};

                title = <><i className={`${hack.icon} mr-3`}></i>{hack.title}</>;
                subtitle = <>Protocolo de Amplificación: {poder ? (
                    <span className="tooltip-container">
                        <span className="underline decoration-dotted cursor-help">{poder.title}</span>
                        <span className="tooltip">
                            <strong className="block text-yellow-300">Clave:</strong> {poder.clave}
                            <strong className="block text-yellow-300 mt-2">Propósito:</strong> {poder.proposito}
                        </span>
                    </span>
                ) : hack.subtitle}</>;
                modalBody = (
                     <div className="space-y-8">
                        {poder && (
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h4 className="text-lg font-bold text-gray-300 mb-2">
                                    <span className="text-2xl mr-3">{poder.icon}</span>El Poder: {poder.clave}
                                </h4>
                                <p className="text-gray-300 text-lg leading-relaxed">{poder.poder}</p>
                            </div>
                        )}

                        {hack.amplificacionProfunda && (
                            <div className="border-t-2 border-gray-700/50 pt-6">
                                <h4 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                                    <i className="fa-solid fa-satellite-dish mr-3"></i>AMPLIFICACIÓN PROFUNDA
                                </h4>
                                <div className="space-y-4">
                                    <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-yellow-500">
                                        <h5 className="font-bold text-yellow-400">DATO OCULTO:</h5>
                                        <p className="text-gray-300 italic">{hack.amplificacionProfunda.datoOculto}</p>
                                    </div>
                                    <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-yellow-500">
                                        <h5 className="font-bold text-yellow-400">MI AMPLIFICACIÓN:</h5>
                                        <p className="text-gray-300 italic">{hack.amplificacionProfunda.miAmplificacion}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {hack.amplificacionProfunda?.ejercicios && (
                            <div className="pt-6">
                                <h4 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                                    <i className="fa-solid fa-microchip mr-3"></i> EJERCICIOS DE ACTIVACIÓN
                                </h4>
                                <div className="space-y-6">
                                    {hack.amplificacionProfunda.ejercicios.map((ejercicio, index) => {
                                        if (hack.id === 2 && ejercicio.titulo.includes("Mapa Fractal")) {
                                            return (
                                                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                                                    <h5 className="text-xl font-bold text-white mb-2">{ejercicio.titulo}</h5>
                                                    <p className="text-gray-400 mb-6">{ejercicio.descripcion}</p>
                                                    <div className="p-4 space-y-8 bg-black/30 rounded-lg">
                                                        {/* Central Node */}
                                                        <div className="text-center">
                                                            <h6 className="text-sm font-bold text-gray-400">PUNTO DE ORIGEN</h6>
                                                            <div className="fractal-node central-node p-4 mt-2">
                                                                <label className="text-lg font-bold text-green-300 mb-2 block">Problema Central / Patrón Raíz</label>
                                                                <textarea
                                                                    rows={3}
                                                                    value={currentHackInputs['fractal_central'] || ''}
                                                                    onChange={(e) => handleTemplateInputChange(hack.id, 'fractal_central', e.target.value)}
                                                                    placeholder="Ej: Falta de feedback loops claros que permitan la corrección de rumbo a tiempo..."
                                                                    className="w-full"
                                                                />
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="flex justify-center">
                                                            <div className="w-px h-12 bg-gray-600"></div>
                                                        </div>

                                                        {/* Context Nodes */}
                                                        <div className="text-center">
                                                            <h6 className="text-sm font-bold text-gray-400">REPLICACIONES FRACTALES</h6>
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                                                                <div className="fractal-node context-node p-4 flex flex-col">
                                                                    <i className="fa-solid fa-landmark text-3xl text-blue-400/50 mb-3"></i>
                                                                    <label className="text-lg font-bold text-blue-300 mb-2 block">Contexto Histórico</label>
                                                                    <textarea rows={4} placeholder="Ej: Caída de imperios por falta de comunicación..." className="flex-grow"
                                                                        value={currentHackInputs['fractal_historico'] || ''}
                                                                        onChange={(e) => handleTemplateInputChange(hack.id, 'fractal_historico', e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="fractal-node context-node p-4 flex flex-col">
                                                                    <i className="fa-solid fa-industry text-3xl text-blue-400/50 mb-3"></i>
                                                                    <label className="text-lg font-bold text-blue-300 mb-2 block">Contexto Industrial</label>
                                                                    <textarea rows={4} placeholder="Ej: Empresas que quiebran por ignorar al mercado..." className="flex-grow"
                                                                        value={currentHackInputs['fractal_industrial'] || ''}
                                                                        onChange={(e) => handleTemplateInputChange(hack.id, 'fractal_industrial', e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="fractal-node context-node p-4 flex flex-col">
                                                                    <i className="fa-solid fa-dna text-3xl text-blue-400/50 mb-3"></i>
                                                                    <label className="text-lg font-bold text-blue-300 mb-2 block">Contexto Biológico</label>
                                                                    <textarea rows={4} placeholder="Ej: Especies que se extinguen por no adaptarse..." className="flex-grow"
                                                                        value={currentHackInputs['fractal_biologico'] || ''}
                                                                        onChange={(e) => handleTemplateInputChange(hack.id, 'fractal_biologico', e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return (
                                            <div key={index} className="bg-gray-800 p-4 rounded-lg">
                                                <h5 className="text-xl font-bold text-white mb-2">{ejercicio.titulo}</h5>
                                                <p className="text-gray-300">{ejercicio.descripcion}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {poder?.miniReto && (
                            <div className="mt-6 bg-red-900/50 p-4 rounded-xl border-l-4 border-red-400 shadow-lg">
                                <h4 className="text-lg font-black text-red-400 mb-2"><i className="fa-solid fa-crosshairs mr-2"></i> MINI RETO DE ACTIVACIÓN</h4>
                                <p className="text-base text-gray-200 leading-relaxed font-bold">
                                    {poder.miniReto}
                                </p>
                            </div>
                        )}
                        
                        {poder && (
                             <div className="border-t-2 border-gray-700/50 pt-6">
                                <h4 className="text-2xl font-bold text-green-400 mb-3 flex items-center"><i className="fa-solid fa-feather-pointed mr-3"></i>PLANTILLA METODOLÓGICA</h4>
                                <div className="space-y-4 bg-gray-900 p-4 rounded-lg">
                                    {poder.plantilla.map(item => (
                                        <div key={item.aspecto}>
                                            <label className="block text-lg font-bold text-white mb-1">{item.aspecto}</label>
                                            <p className="text-sm text-gray-400 mb-2 italic">{item.guia}</p>
                                            <textarea 
                                                rows={3}
                                                value={currentHackInputs[item.aspecto] || ''}
                                                onChange={(e) => handleTemplateInputChange(hack.id, item.aspecto, e.target.value)}
                                                className="w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-3 text-lg text-gray-200 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                                                aria-label={item.aspecto}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
                break;
            case 'activation':
                title = <><i className="fa-solid fa-bolt mr-3"></i>Activar Protocolo: {hack.title}</>;
                subtitle = `Estás a punto de ejecutar el ejercicio para dominar este poder.`;
                modalBody = <>
                    <div className="bg-gray-800 p-6 rounded-2xl border-l-4 border-yellow-400 mb-8">
                        <h4 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center"><span className="mr-3"><i className="fa-solid fa-running"></i></span>EJERCICIO DE ACTIVACIÓN</h4>
                        <p className="text-gray-300 text-lg">{hack.ejercicio}</p>
                    </div>
                    <p className="text-center text-gray-400 mb-6 italic">Al completar este ejercicio, marcarás este hack como dominado y avanzarás en tu maestría.</p>
                    <button 
                        onClick={() => {
                            toggleHackCompletion(hack.id);
                            hideModal();
                        }}
                        className="w-full text-center bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-black py-4 px-6 rounded-xl transition-all text-lg pulse-glow btn-dynamic"
                    >
                        <i className="fa-solid fa-check-double mr-2"></i> COMPLETAR Y DOMINAR
                    </button>
                </>;
                break;
            case 'srap':
                title = <><i className="fa-solid fa-sync-alt fa-spin mr-3"></i>RITUAL SRAP ACTIVADO</>;
                subtitle = 'Sincroniza Ritmos en Acción Presente';
                 modalBody = <>
                    <div className="bg-gray-800 p-6 rounded-2xl border-l-4 border-yellow-400 mb-6">
                        <ul className="text-xl space-y-3">
                            <li><strong className="text-yellow-300">S</strong> = Sincronizar (Ritmos Internos)</li>
                            <li><strong className="text-yellow-300">R</strong> = Reconocer (Patrones de Inercia)</li>
                            <li><strong className="text-yellow-300">A</strong> = Activar (Acción Presente)</li>
                            <li><strong className="text-yellow-300">P</strong> = Pausa (Consciente)</li>
                        </ul>
                    </div>
                    <div className="border-t border-gray-600 pt-6">
                        <h4 className="text-2xl font-bold text-green-400 mb-4 flex items-center"><span className="mr-3"><i className="fa-solid fa-bolt"></i></span>PROTOCOLO DE EJECUCIÓN</h4>
                        <p className="text-gray-200 text-lg leading-relaxed">Detente completamente. Haz una <strong className="text-white">Pausa</strong> consciente de 5 segundos. <strong className="text-white">Reconoce</strong> el patrón que acabas de identificar (ej: Inercia, Miedo al Caos). Define una <strong className="text-white">Acción Presente</strong> inmediata, pequeña y concreta, inspirada en el Hack que necesites aplicar para <strong className="text-white">Sincronizar</strong> con tu objetivo.</p>
                    </div>
                </>;
                break;
            case 'postPayment':
                title = <><i className="fa-solid fa-check-circle mr-3"></i>Compra Exitosa</>;
                subtitle = 'Bienvenido al siguiente nivel.';
                modalBody = <PostPaymentPage serviceName={modalState.data.serviceName} archetype={modalState.data.archetype} />;
                break;
        }

        return (
            <div className={`modal-overlay ${modalState.isOpen ? 'active' : ''}`} onClick={hideModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h3 className="text-4xl font-black text-yellow-300">{title}</h3>
                            <p className="text-lg text-gray-400 mt-2">{subtitle}</p>
                        </div>
                        <button onClick={hideModal} className="text-5xl text-gray-500 hover:text-white transition-colors">&times;</button>
                    </div>
                    {modalBody}
                </div>
            </div>
        );
    };

    return (
        <div onClick={startAudioContext}>
            {celebrate && <Confetti />}
            <Header completedCount={completedHacks.size} totalCount={HACKS_DATA.length} />
            
            <Introduction />
            <HowItWorks />

            {!dominantArchetype ? (
                <div id="dashboard">
                    <ArchetypeQuiz onQuizComplete={handleQuizComplete} playSelectSound={playQuizSelect}/>
                </div>
            ) : (
                <ArchitectDashboard 
                    completedHacks={completedHacks}
                    dominantArchetype={dominantArchetype}
                    onGenerateDirective={handleGenerateDirective}
                    aiDirective={aiDirective}
                    isDirectiveLoading={isDirectiveLoading}
                />
            )}
            
            <HacksSection 
                hacks={HACKS_DATA} 
                completedHacks={completedHacks} 
                onActivateClick={showActivationModal} 
                onAmplifyClick={showHackModal} 
                playUIClick={playUIClick}
            />
            
            {dominantArchetype && (
                <section className="py-10 px-6 max-w-4xl mx-auto text-center">
                     <button onClick={handleRetakeQuiz} className="inline-block px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-yellow-300 border-2 border-yellow-300 font-black rounded-2xl shadow-2xl hover:bg-gray-700 transition-all text-lg btn-dynamic">
                        <i className="fa-solid fa-repeat mr-2"></i> REHACER DIAGNÓSTICO DE ARQUETIPO
                    </button>
                </section>
            )}
            
            <GrimorioTacticoSection />
            <OraculoChalamandra onComboReveal={playComboReveal} />
            <KitMagistralRPG onOpenModule={showHackModal} />
            <SrapRitual onActivate={showSrapModal} playUIClick={playUIClick} />
            <SRAPMetronome />
            <CertificationsSection completedHacks={completedHacks} onCelebration={handleCelebration} />
            <TheCodex />
            <Testimonials />
            <PremiumServices onServiceClick={showServiceModal} playUIClick={playUIClick} />
            <ContactForm />
            <CertifiedTech />
             <Faq />

            <Footer />
            {renderModalContent()}
            <WhatsAppFloat />
        </div>
    );
};

export default App;