import { useRef, useCallback, useState } from 'react';
import * as Tone from 'tone';

export const useAudio = () => {
    const [isAudioContextStarted, setIsAudioContextStarted] = useState(false);
    
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

    const initAudio = useCallback(() => {
        if (synths.current.completion) return;

        synths.current.completion = new Tone.Synth({ 
            oscillator: { type: 'triangle' }, 
            envelope: { attack: 0.02, decay: 0.1, sustain: 0.3, release: 0.4 } 
        }).toDestination();
        
        synths.current.directive = new Tone.Synth().toDestination();
        synths.current.celebration = new Tone.Synth().toDestination();
        
        synths.current.uiClick = new Tone.Synth({ 
            volume: -15, 
            oscillator: { type: 'sine' }, 
            envelope: { attack: 0.001, decay: 0.1, sustain: 0.01, release: 0.1 } 
        }).toDestination();
        
        synths.current.modalOpen = new Tone.NoiseSynth({ 
            volume: -20, 
            noise: { type: 'white' }, 
            envelope: { attack: 0.005, decay: 0.2, sustain: 0 } 
        }).toDestination();
        
        synths.current.modalClose = new Tone.NoiseSynth({ 
            volume: -25, 
            noise: { type: 'pink' }, 
            envelope: { attack: 0.005, decay: 0.15, sustain: 0 } 
        }).toDestination();
        
        synths.current.quizSelect = new Tone.MembraneSynth({ volume: -10 }).toDestination();
        synths.current.comboReveal = new Tone.FMSynth({ volume: -10, harmonicity: 2, modulationIndex: 3 }).toDestination();
    }, []);

    const startAudioContext = useCallback(async () => {
        if (isAudioContextStarted) return;
        await Tone.start();
        initAudio();
        setIsAudioContextStarted(true);
    }, [isAudioContextStarted, initAudio]);

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

    return { startAudioContext, playSound, isAudioContextStarted };
};
