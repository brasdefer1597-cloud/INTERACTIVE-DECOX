import React, { useState, useEffect } from 'react';
import { HACKS_DATA, MANDAMIENTOS, COMBOS } from '../../utils/constants';
import { Hack } from '../../utils/types';

const PowerUpCard: React.FC<{ hack: Hack; onSelect: (id: number) => void; isSelected: boolean }> = ({ hack, onSelect, isSelected }) => (
    <div
        className={`relative p-6 rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden border-2 ${isSelected ? 'bg-gray-800 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.2)]' : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'}`}
        onClick={() => onSelect(hack.id)}
    >
        <div className={`absolute top-0 right-0 p-4 opacity-10 text-4xl ${hack.colorClass}`}>
            <i className={hack.icon}></i>
        </div>
        <div className="relative z-10">
            <h4 className={`text-lg font-black mb-2 ${hack.colorClass} tracking-tight`}>{hack.title}</h4>
            <p className="text-gray-400 text-xs italic font-medium leading-relaxed">"{MANDAMIENTOS[hack.id]}"</p>
        </div>
        {isSelected && (
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
        )}
    </div>
);

interface OraculoChalamandraProps {
    onComboReveal: () => void;
}

const OraculoChalamandra: React.FC<OraculoChalamandraProps> = ({ onComboReveal }) => {
    const [selected, setSelected] = useState<number[]>([]);
    const [combo, setCombo] = useState<{ name: string; description: string } | null>(null);
    const [isRevealing, setIsRevealing] = useState(false);

    const handleSelect = (id: number) => {
        setSelected(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            }
            if (prev.length < 2) {
                return [...prev, id];
            }
            return [prev[1], id];
        });
    };

    useEffect(() => {
        if (selected.length === 2) {
            setIsRevealing(true);
            const sortedIds = [...selected].sort((a, b) => a - b);
            const key = `${sortedIds[0]}-${sortedIds[1]}`;
            const newCombo = COMBOS[key] || {
                name: "Fusión Desconocida",
                description: "La combinación de estos poderes crea una sinergia aún no documentada. El territorio inexplorado es donde reside la verdadera ventaja estratégica."
            };

            setTimeout(() => {
                setCombo(newCombo);
                onComboReveal();
                setIsRevealing(false);
            }, 800);
        } else {
            setCombo(null);
        }
    }, [selected, onComboReveal]);

    return (
        <section className="py-32 px-6 bg-black relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 bg-purple-500/10 text-purple-500 text-[0.7rem] font-black rounded-full mb-6 uppercase tracking-[0.3em] border border-purple-500/20">
                        Protocolo de Fusión
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
                        Oráculo del 1%
                    </h2>
                    <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                        La maestría no es dominar un poder, es fusionarlos. Selecciona dos ingredientes para revelar una estrategia combinada.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {HACKS_DATA.map(hack => (
                        <PowerUpCard
                            key={hack.id}
                            hack={hack}
                            isSelected={selected.includes(hack.id)}
                            onSelect={handleSelect}
                        />
                    ))}
                </div>

                <div className="min-h-[200px] flex items-center justify-center">
                    {isRevealing ? (
                        <div className="text-center animate-pulse">
                            <i className="fa-solid fa-atom fa-spin text-5xl text-purple-500 mb-4"></i>
                            <p className="text-purple-500 font-black uppercase tracking-widest text-sm">Forjando Combo Alquímico...</p>
                        </div>
                    ) : combo ? (
                        <div className="w-full max-w-3xl bg-gray-900/60 backdrop-blur-md p-10 md:p-12 rounded-[3rem] border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.1)] animate-[fade-in-up_0.6s_ease-out]">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                                    <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                                </div>
                                <h3 className="text-2xl md:text-4xl font-black text-white italic tracking-tighter uppercase">
                                    {combo.name}
                                </h3>
                            </div>
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                                {combo.description}
                            </p>
                        </div>
                    ) : (
                        <div className="text-center py-12 border-2 border-dashed border-gray-800 rounded-[3rem] w-full max-w-2xl opacity-40">
                            <p className="text-gray-600 font-black uppercase tracking-widest text-sm">Selecciona dos poderes para ver el resultado</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OraculoChalamandra;
