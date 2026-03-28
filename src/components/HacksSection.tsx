import React from 'react';
import { Hack } from '@/utils/types';
import { COMBOS } from '@/utils/constants';

interface HacksSectionProps {
    hacks: Hack[];
    completedHacks: Set<number>;
    onActivateClick: (id: number) => void;
    onAmplifyClick: (id: number) => void;
    playUIClick: () => void;
}

// ⚡ Bolt: Added React.memo to HackCard to prevent unnecessary re-renders of individual cards when other parts of the HacksSection (like completedHacks) update.
const HackCard = React.memo<{ hack: Hack; isCompleted: boolean; onActivate: (id: number) => void; onAmplify: (id: number) => void; }>(({ hack, isCompleted, onActivate, onAmplify }) => {
    return (
        <div className={`bg-gray-900/50 backdrop-blur-sm p-6 rounded-3xl border-2 transition-all duration-500 ${isCompleted ? 'border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.15)]' : 'border-white/5 hover:border-yellow-400/50 hover:shadow-2xl hover:-translate-y-2'}`}>
            <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${isCompleted ? 'bg-green-500/10 text-green-400' : 'bg-white/5 text-yellow-400'}`}>
                    <i className={hack.icon}></i>
                </div>
                {isCompleted && (
                    <div className="bg-green-500 text-black text-[10px] font-black px-3 py-1 rounded-full tracking-widest">DOMINADO</div>
                )}
            </div>
            
            <h3 className="text-xl font-black text-white mb-1 uppercase tracking-tighter">{hack.title}</h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">{hack.subtitle}</p>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 line-clamp-3">{hack.description}</p>
            
            <div className="grid grid-cols-2 gap-3">
                <button 
                    onClick={() => onAmplify(hack.id)}
                    className="text-[10px] font-black uppercase tracking-widest py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all border border-white/10"
                >
                    Amplificar
                </button>
                <button 
                    onClick={() => onActivate(hack.id)}
                    className={`text-[10px] font-black uppercase tracking-widest py-3 rounded-xl transition-all ${isCompleted ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg shadow-yellow-500/20'}`}
                >
                    {isCompleted ? 'Re-Activar' : 'Activar'}
                </button>
            </div>
        </div>
    );
});

// ⚡ Bolt: Wrapped HacksSection in React.memo to prevent expensive re-renders from parent updates. Uses stable callbacks.
const HacksSection = React.memo<HacksSectionProps>(({ hacks, completedHacks, onActivateClick, onAmplifyClick, playUIClick }) => {
    const archetypes = Array.from(new Set(hacks.map(h => h.archetype)));

    // Find active combos
    const activeCombos = Object.entries(COMBOS).filter(([key]) => {
        const ids = key.split('-').map(Number);
        return ids.every(id => completedHacks.has(id));
    });

    const handleActivate = React.useCallback((id: number) => {
        playUIClick();
        onActivateClick(id);
    }, [playUIClick, onActivateClick]);

    const handleAmplify = React.useCallback((id: number) => {
        playUIClick();
        onAmplifyClick(id);
    }, [playUIClick, onAmplifyClick]);

    return (
        <section className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24 space-y-4">
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
                        Arsenal de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Hacks</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        Protocolos de reingeniería cognitiva estructurados por arquetipo para un dominio total de la realidad.
                    </p>
                </div>

                {/* Combos/Synergies Section */}
                {activeCombos.length > 0 && (
                    <div className="mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <h3 className="text-xs font-black text-purple-400 uppercase tracking-[0.4em] mb-8 text-center">Sinergias Desbloqueadas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activeCombos.map(([key, combo]) => (
                                <div key={key} className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-3xl flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white text-sm uppercase mb-1">{combo.name}</h4>
                                        <p className="text-[10px] text-gray-400 leading-relaxed">{combo.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="space-y-24">
                    {archetypes.map(archetype => (
                        <div key={archetype} className="space-y-10">
                            <div className="flex items-center gap-6">
                                <h3 className="text-2xl font-black text-white uppercase tracking-widest whitespace-nowrap">{archetype}</h3>
                                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {hacks.filter(h => h.archetype === archetype).map(hack => (
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
                    ))}
                </div>
            </div>
        </section>
    );
});

export default HacksSection;
