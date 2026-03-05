import React, { useCallback, memo, useRef, useLayoutEffect } from 'react';
import { Hack } from '../utils/types';

interface HacksSectionProps {
    hacks: Hack[];
    completedHacks: Set<number>;
    onActivateClick: (id: number) => void;
    onAmplifyClick: (id: number) => void;
    playUIClick: () => void;
}

interface HackCardProps {
    hack: Hack;
    isCompleted: boolean;
    onActivate: (id: number) => void;
    onAmplify: (id: number) => void;
}

// ⚡ Bolt: Wrapped HackCard with React.memo to prevent unnecessary re-renders
const HackCard: React.FC<HackCardProps> = memo(({ hack, isCompleted, onActivate, onAmplify }) => {
    const handleActivate = useCallback(() => onActivate(hack.id), [hack.id, onActivate]);
    const handleAmplify = useCallback(() => onAmplify(hack.id), [hack.id, onAmplify]);

    return (
        <div className={`bg-gray-900 p-6 rounded-2xl border-2 transition-all duration-300 ${isCompleted ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-gray-700 hover:border-yellow-400 hover:shadow-xl hover:-translate-y-2'}`}>
            <div className="flex items-start justify-between">
                <div>
                    <i className={`${hack.icon} text-4xl mb-4 ${isCompleted ? 'text-green-400' : 'text-yellow-400'}`}></i>
                    <h3 className="text-2xl font-bold text-white mb-2">{hack.title}</h3>
                    <p className="text-gray-400 font-semibold mb-4">{hack.subtitle}</p>
                </div>
                {isCompleted && (
                    <div className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full">DOMINADO</div>
                )}
            </div>
            <p className="text-gray-300 mb-6">{hack.description}</p>
            <div className="flex space-x-4">
                <button onClick={handleAmplify} className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                    <i className="fa-solid fa-satellite-dish mr-2"></i> Amplificar
                </button>
                <button onClick={handleActivate} className="flex-1 text-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-lg transition-colors">
                    <i className="fa-solid fa-bolt mr-2"></i> Activar
                </button>
            </div>
        </div>
    );
});

// ⚡ Bolt: Wrapped HacksSection with React.memo to prevent unnecessary re-renders when global context state changes.
const HacksSection: React.FC<HacksSectionProps> = memo(({ hacks, completedHacks, onActivateClick, onAmplifyClick, playUIClick }) => {

    // ⚡ Bolt: Using refs to store callbacks to prevent HackCard re-renders when parent passes inline functions
    const callbacksRef = useRef({ onActivateClick, onAmplifyClick, playUIClick });

    // Update refs on every render to ensure we call the latest functions without invalidating stable callbacks
    useLayoutEffect(() => {
        callbacksRef.current = { onActivateClick, onAmplifyClick, playUIClick };
    });

    // Stable references for HackCard avoiding inline arrow functions in the render method
    const handleActivate = useCallback((id: number) => {
        callbacksRef.current.playUIClick();
        callbacksRef.current.onActivateClick(id);
    }, []);

    const handleAmplify = useCallback((id: number) => {
        callbacksRef.current.playUIClick();
        callbacksRef.current.onAmplifyClick(id);
    }, []);

    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-6 text-white">
                    <i className="fa-solid fa-microchip mr-4"></i> ARSENAL DE HACKS MAGISTRALES
                </h2>
                <p className="text-xl text-center mb-12 text-gray-300">
                    Protocolos de reingeniería cognitiva para dominar cada faceta de tu realidad.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hacks.map(hack => (
                        <HackCard 
                            key={hack.id}
                            hack={hack}
                            isCompleted={completedHacks.has(hack.id)}
                            onActivate={handleActivate}
                            onAmplify={handleAmplify}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});

export default HacksSection;
