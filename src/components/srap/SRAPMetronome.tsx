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
        setIsAudioContextStarted(true);
    }, [isAudioContextStarted]);
    
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

    useEffect(() => {
        return () => {
            stopMetronome();
        };
    }, [stopMetronome]);

    return (
        <section className="py-32 px-6 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-16">
                    <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-500 text-[0.7rem] font-black rounded-full mb-6 uppercase tracking-[0.3em] border border-cyan-500/20">
                        Protocolo de Sincronización
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
                        Metrónomo SRAP
                    </h2>
                    <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                        Calibra tu frecuencia operativa. Encuentra el ritmo óptimo entre la acción y la pausa, la ejecución y la reflexión estratégica.
                    </p>
                </div>

                <div className="bg-gray-900/40 backdrop-blur-md max-w-lg mx-auto p-12 rounded-[3.5rem] border border-gray-800 shadow-2xl relative overflow-hidden">
                    {/* Pulsing indicator */}
                    <div className="relative mb-12">
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-cyan-500/20 transition-all duration-300 ${isPulsingVisual ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`}></div>
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-cyan-500/10 transition-all duration-500 ${isPulsingVisual ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`}></div>

                        <div className={`w-28 h-28 mx-auto rounded-full border-4 flex flex-col items-center justify-center transition-all duration-100 relative z-10 ${isPulsingVisual ? 'bg-cyan-500 border-cyan-400 scale-105 shadow-[0_0_40px_rgba(6,182,212,0.5)]' : 'bg-transparent border-gray-800 scale-100'}`}>
                            <p className={`text-4xl font-black transition-colors ${isPulsingVisual ? 'text-black' : 'text-white'}`}>{bpm}</p>
                            <span className={`text-[0.6rem] font-black uppercase tracking-widest ${isPulsingVisual ? 'text-black/60' : 'text-gray-500'}`}>BPM</span>
                        </div>
                    </div>

                    <div className="mb-12">
                        <input
                            type="range"
                            min="40"
                            max="200"
                            value={bpm}
                            onChange={handleBpmChange}
                            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                            aria-label={`Tempo de ${bpm} BPM`}
                        />
                        <div className="flex justify-between mt-4 text-[0.65rem] font-black text-gray-600 uppercase tracking-widest">
                            <span>Largo</span>
                            <span>Moderato</span>
                            <span>Presto</span>
                        </div>
                    </div>
                    
                    <button 
                        onClick={handleTogglePlay}
                        className="group relative w-full overflow-hidden bg-white text-black font-black py-5 rounded-2xl transition-all hover:text-white"
                    >
                        <div className="absolute inset-0 bg-cyan-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                        <span className="relative z-10 flex items-center justify-center text-lg uppercase tracking-widest">
                            <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} mr-3 text-sm`}></i>
                            {isPlaying ? 'Detener Frecuencia' : 'Iniciar Ritual SRAP'}
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SRAPMetronome;
