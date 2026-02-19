import React, { createContext, useContext, useState, useEffect, useRef, useCallback, ReactNode } from 'react';
import * as Tone from 'tone';
import { HACKS_DATA, PODERES_SHEREZADE_DATA } from '../utils/constants';
import { Hack, ModalState, Archetype, PoderDeSherezade } from '../utils/types';
import { generateStrategicDirective } from '../services/geminiService';

interface AppContextType {
    completedHacks: Set<number>;
    modalState: ModalState;
    celebrate: boolean;
    dominantArchetype: Archetype | null;
    aiDirective: string;
    isDirectiveLoading: boolean;
    allTemplateInputs: { [hackId: number]: { [aspecto: string]: string } };
    isAudioContextStarted: boolean;

    // Actions
    startAudioContext: () => Promise<void>;
    playUIClick: () => void;
    playModalOpen: () => void;
    playModalClose: () => void;
    playQuizSelect: () => void;
    playComboReveal: () => void;
    handleCelebration: () => void;
    toggleHackCompletion: (id: number) => void;
    handleGenerateDirective: () => Promise<void>;
    handleTemplateInputChange: (hackId: number, aspecto: string, value: string) => void;
    showServiceModal: (serviceType: 'discovery' | 'magistral' | 'total') => void;
    showHackModal: (id: number) => void;
    showActivationModal: (id: number) => void;
    showSrapModal: () => void;
    hideModal: () => void;
    handleQuizComplete: (archetype: Archetype) => void;
    handleRetakeQuiz: () => void;
    setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
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
        modalOpenSynth.current.triggerAttackRelease("0.1");
    }, [isAudioContextStarted]);

    const playModalClose = useCallback(() => {
        if (!isAudioContextStarted || !modalCloseSynth.current) return;
        modalCloseSynth.current.triggerAttackRelease("0.1");
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

    const handleGenerateDirective = useCallback(async () => {
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
    }, [isDirectiveLoading, completedHacks, dominantArchetype, playUIClick, playDirectiveSound]);

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

    const showServiceModal = useCallback((serviceType: 'discovery' | 'magistral' | 'total') => {
        playModalOpen();
        setModalState({ isOpen: true, type: serviceType, data: null });
    }, [playModalOpen]);

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

    const showSrapModal = useCallback(() => {
        playModalOpen();
        setModalState({ isOpen: true, type: 'srap', data: null });
    }, [playModalOpen]);

    const hideModal = useCallback(() => {
        playModalClose();
        setModalState({ isOpen: false, type: null, data: null });
    }, [playModalClose]);

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

    const handleRetakeQuiz = useCallback(() => {
        playUIClick();
        setDominantArchetype(null);
        localStorage.removeItem('dominantArchetype');
        localStorage.removeItem('completedHacks'); // Also reset hacks if desired
        setCompletedHacks(new Set());
    }, [playUIClick]);

    return (
        <AppContext.Provider value={{
            completedHacks, modalState, setModalState, celebrate, dominantArchetype, aiDirective, isDirectiveLoading, allTemplateInputs, isAudioContextStarted,
            startAudioContext, playUIClick, playModalOpen, playModalClose, playQuizSelect, playComboReveal,
            handleCelebration, toggleHackCompletion, handleGenerateDirective, handleTemplateInputChange,
            showServiceModal, showHackModal, showActivationModal, showSrapModal, hideModal,
            handleQuizComplete, handleRetakeQuiz
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
