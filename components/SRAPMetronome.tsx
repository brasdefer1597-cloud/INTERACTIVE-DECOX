import React, { useState, useRef, useCallback, useEffect } from 'react';
import * as Tone from 'tone';

const SRAPMetronome: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [bpm, setBpm] = useState(60);
    const [isPulsingVisual, setIsPulsingVisual] = useState(false);
    const [isAudioContextStarted, setIsAudioContextStarted] = useState(false);

    const loopRef = useRef<Tone.Loop | null>(null);
    const synthRef = useRef<Tone.MembraneSynth | null>(null);

    const startAudioContext = useCallback(async () => {
        if (isAudioContextStarted) return;
        await Tone.start();
        console.log("AudioContext started for Metronome!");
        setIsAudioContextStarted(true);
    }, [isAudioContextStarted]);
    
    // Initialize synth once audio context is started
    useEffect(() => {
        if (!synthRef.current) {
            synthRef.current = new Tone.MembraneSynth({
                pitchDecay: 0.01,
                octaves: 6,
                envelope: {
                    attack: 0.001,
                    decay: 0.2,
                    sustain: 0,
                    release: 0.4
                },
            }).toDestination();
        }
    }, []);

    const stopMetronome = useCallback(() => {
        if (loopRef.current) {
            loopRef.current.stop(0);
            loopRef.current.dispose();
            loopRef.current = null;
        }
        if (Tone.Transport.state !== 'stopped') {
            Tone.Transport.stop();
            Tone.Transport.cancel();
        }
        setIsPlaying(false);
    }, []);

    const startMetronome = useCallback(() => {
        if (!isAudioContextStarted || !synthRef.current) return;
        
        stopMetronome();

        Tone.Transport.bpm.value = bpm;
        
        loopRef.current = new Tone.Loop((time) => {
            if (synthRef.current) {
                synthRef.current.triggerAttackRelease('C2', '8n', time);
            }
            
            Tone.Draw.schedule(() => {
                setIsPulsingVisual(true);
                setTimeout(() => setIsPulsingVisual(false), 100);
            }, time);
        }, '4n').start(0);

        Tone.Transport.start();
        setIsPlaying(true);
    }, [bpm, stopMetronome, isAudioContextStarted]);

    const handleTogglePlay = async () => {
        if (!isAudioContextStarted) {
            await startAudioContext();
        }

        if (isPlaying) {
            stopMetronome();
        } else {
            // Short delay allows the audio context to fully initialize on first click
            setTimeout(() => {
                startMetronome();
            }, 100);
        }
    };
    
    const handleBpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newBpm = Number(e.target.value);
        setBpm(newBpm);
        if (isPlaying) {
            Tone.Transport.bpm.value = newBpm;
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopMetronome();
        };
    }, [stopMetronome]);

    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-black text-white mb-6">
                    <i className="fa-solid fa-wave-square mr-3 text-cyan-300"></i> METRÓNOMO SRAP
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Calibra tu frecuencia operativa. El Metrónomo te ayuda a encontrar el ritmo óptimo entre la acción y la pausa, la ejecución y la reflexión. Sincroniza tu tempo interno con las demandas del entorno.
                </p>

                <div className="dashboard-widget max-w-lg mx-auto p-8">
                    <div 
                        className={`w-24 h-24 mx-auto mb-8 rounded-full border-4 border-cyan-400 flex items-center justify-center transition-all duration-100 relative ${isPulsingVisual ? 'bg-cyan-400/30 scale-110' : 'bg-transparent scale-100'}`}
                    >
                        <p className="text-4xl font-black text-white">{bpm}</p>
                        <span className="text-sm text-gray-400 absolute -bottom-6">BPM</span>
                    </div>

                    <div className="mb-8 pt-4">
                        <label htmlFor="bpm-slider" className="sr-only">BPM</label>
                        <input
                            type="range"
                            id="bpm-slider"
                            min="40"
                            max="200"
                            value={bpm}
                            onChange={handleBpmChange}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer metronome-slider"
                            aria-label={`Tempo de ${bpm} BPM`}
                        />
                    </div>
                    
                    <button 
                        onClick={handleTogglePlay}
                        className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-black rounded-2xl shadow-2xl hover:from-cyan-600 hover:to-blue-600 transition-all text-lg btn-dynamic"
                    >
                        <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} mr-2`}></i>
                        {isPlaying ? 'DETENER' : 'INICIAR'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SRAPMetronome;