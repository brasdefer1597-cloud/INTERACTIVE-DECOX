import React, { useCallback, memo } from 'react';
import { Hack } from '../../utils/types';

interface HacksSectionProps {
    hacks: Hack[];
    completedHacks: Set<number>;
    onActivateClick: (id: number) => void;
    onAmplifyClick: (id: number) => void;
    playUIClick: () => void;
}

const HackCard: React.FC<{ hack: Hack; isCompleted: boolean; onActivate: (id: number) => void; onAmplify: (id: number) => void; }> = memo(({ hack, isCompleted, onActivate, onAmplify }) => {
    return (
        <div className={`group relative bg-gray-900 p-8 rounded-[2.5rem] border-2 transition-all duration-500 ${isCompleted ? 'border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.1)]' : 'border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.1)] hover:-translate-y-2'}`}>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <i className={`${hack.icon} text-9xl`}></i>
            </div>

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isCompleted ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black'}`}>
                        <i className={`${hack.icon} text-3xl`}></i>
                    </div>
                    {isCompleted ? (
                        <div className="flex items-center space-x-2 bg-green-500/10 text-green-400 text-[0.65rem] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-green-500/20">
                            <i className="fa-solid fa-check text-[0.6rem]"></i>
                            <span>Dominado</span>
                        </div>
                    ) : (
                        <div className="text-gray-600 text-[0.65rem] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-gray-800">
                            Hack {hack.id}
                        </div>
                    )}
                </div>

                <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-yellow-400 transition-colors">
                    {hack.title}
                </h3>
                <p className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">
                    {hack.subtitle}
                </p>
                <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium">
                    {hack.description}
                </p>

                <div className="flex space-x-3">
                    <button
                        onClick={() => onAmplify(hack.id)}
                        className="flex-1 flex items-center justify-center space-x-2 bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white font-bold py-4 rounded-2xl transition-all border border-transparent hover:border-gray-700"
                    >
                        <i className="fa-solid fa-satellite-dish text-xs"></i>
                        <span>AMPLIFICAR</span>
                    </button>
                    <button
                        onClick={() => onActivate(hack.id)}
                        className={`flex-1 flex items-center justify-center space-x-2 font-black py-4 rounded-2xl transition-all ${isCompleted ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-600/20' : 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg shadow-yellow-500/20'}`}
                    >
                        <i className="fa-solid fa-bolt text-xs"></i>
                        <span>{isCompleted ? 'REPETIR' : 'ACTIVAR'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
});

const HacksSection: React.FC<HacksSectionProps> = memo(({ hacks, completedHacks, onActivateClick, onAmplifyClick, playUIClick }) => {

    const handleActivate = useCallback((id: number) => {
        playUIClick();
        onActivateClick(id);
    }, [playUIClick, onActivateClick]);

    const handleAmplify = useCallback((id: number) => {
        playUIClick();
        onAmplifyClick(id);
    }, [playUIClick, onAmplifyClick]);

    return (
        <section className="py-32 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 bg-yellow-500/10 text-yellow-500 text-[0.7rem] font-black rounded-full mb-6 uppercase tracking-[0.3em] border border-yellow-500/20">
                        Fase 2: Dominar
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                        ARSENAL DE HACKS
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Protocolos de reingeniería cognitiva diseñados para instalar nuevas capacidades en tu stack mental.
                    </p>
                </div>

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
