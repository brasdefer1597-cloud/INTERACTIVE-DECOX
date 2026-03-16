import React, { useState, useEffect } from 'react';
import { HACKS_DATA, MANDAMIENTOS, COMBOS } from '../utils/constants';
import { Hack } from '../utils/types';
import { motion, AnimatePresence } from 'motion/react';

const PowerUpCard: React.FC<{ hack: Hack; onSelect: (id: number) => void; isSelected: boolean; isDisabled: boolean }> = ({ hack, onSelect, isSelected, isDisabled }) => (
    <motion.div 
        whileHover={!isDisabled || isSelected ? { scale: 1.05, y: -5 } : {}}
        whileTap={!isDisabled || isSelected ? { scale: 0.95 } : {}}
        className={`relative cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 ${
            isSelected 
                ? 'bg-yellow-500/20 border-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.3)]' 
                : isDisabled 
                    ? 'bg-gray-900/20 border-white/5 opacity-40 grayscale cursor-not-allowed'
                    : 'bg-gray-900/40 border-white/10 hover:border-white/20'
        }`}
        onClick={() => (!isDisabled || isSelected) && onSelect(hack.id)}
    >
        <div className="flex items-center justify-between mb-2">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${isSelected ? 'bg-yellow-500 text-black' : 'bg-white/5 text-yellow-400'}`}>
                <i className={hack.icon}></i>
            </div>
            <span className="text-xs font-black text-white/20">#{hack.id}</span>
        </div>
        <h4 className="text-sm font-black text-white uppercase tracking-tighter mb-1">{hack.title}</h4>
        <p className="text-[10px] text-gray-500 italic line-clamp-2">"{MANDAMIENTOS[hack.id]}"</p>
        
        {isSelected && (
            <motion.div 
                layoutId="selection-glow"
                className="absolute inset-0 rounded-2xl bg-yellow-400/10 blur-xl pointer-events-none"
            />
        )}
    </motion.div>
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
            return [prev[0], id];
        });
    };

    useEffect(() => {
        if (selected.length === 2) {
            setIsRevealing(true);
            const timer = setTimeout(() => {
                const sortedIds = [...selected].sort((a, b) => a - b);
                const key = `${sortedIds[0]}-${sortedIds[1]}`;
                const newCombo = COMBOS[key] || { 
                    name: "Sinergia Inexplorada", 
                    description: "La combinación de estos poderes crea una frecuencia aún no documentada. Eres un pionero en este territorio cognitivo." 
                };
                setCombo(newCombo);
                setIsRevealing(false);
                onComboReveal();
            }, 800);
            return () => clearTimeout(timer);
        } else {
            setCombo(null);
        }
    }, [selected, onComboReveal]);

    return (
        <section className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <header className="text-center mb-20 space-y-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase"
                    >
                        Oráculo <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">del 1%</span>
                    </motion.h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        La maestría no es dominar un poder, es fusionarlos. Selecciona dos para revelar una estrategia combinada.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Power Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {HACKS_DATA.map(hack => (
                            <PowerUpCard
                                key={hack.id}
                                hack={hack}
                                isSelected={selected.includes(hack.id)}
                                isDisabled={selected.length >= 2 && !selected.includes(hack.id)}
                                onSelect={handleSelect}
                            />
                        ))}
                    </div>

                    {/* Forge Area */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32">
                            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-[3rem] border-2 border-white/5 shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
                                
                                <div className="relative z-10 space-y-10">
                                    <div className="flex items-center justify-center gap-6">
                                        {/* Slot 1 */}
                                        <div className={`w-24 h-24 rounded-3xl border-2 border-dashed flex items-center justify-center transition-all duration-500 ${
                                            selected[0] ? 'bg-yellow-500/10 border-yellow-500/50 scale-110' : 'bg-black/40 border-white/10 text-gray-700'
                                        }`}>
                                            {selected[0] ? (
                                                <span className="text-4xl">{HACKS_DATA.find(h => h.id === selected[0])?.icon}</span>
                                            ) : (
                                                <i className="fa-solid fa-plus text-xl"></i>
                                            )}
                                        </div>

                                        <div className="text-white/20 text-3xl font-black">
                                            {isRevealing ? <i className="fa-solid fa-spinner fa-spin text-yellow-500"></i> : '+'}
                                        </div>

                                        {/* Slot 2 */}
                                        <div className={`w-24 h-24 rounded-3xl border-2 border-dashed flex items-center justify-center transition-all duration-500 ${
                                            selected[1] ? 'bg-yellow-500/10 border-yellow-500/50 scale-110' : 'bg-black/40 border-white/10 text-gray-700'
                                        }`}>
                                            {selected[1] ? (
                                                <span className="text-4xl">{HACKS_DATA.find(h => h.id === selected[1])?.icon}</span>
                                            ) : (
                                                <i className="fa-solid fa-plus text-xl"></i>
                                            )}
                                        </div>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        {combo ? (
                                            <motion.div 
                                                key="result"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                className="space-y-6"
                                            >
                                                <div className="text-center">
                                                    <span className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.3em] mb-2 block">Sinergia Detectada</span>
                                                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">
                                                        {combo.name}
                                                    </h3>
                                                </div>
                                                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                                    <p className="text-gray-300 leading-relaxed italic text-center">
                                                        "{combo.description}"
                                                    </p>
                                                </div>
                                                <button 
                                                    onClick={() => setSelected([])}
                                                    className="w-full py-4 bg-white/5 hover:bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all border border-white/10"
                                                >
                                                    Reiniciar Oráculo
                                                </button>
                                            </motion.div>
                                        ) : (
                                            <motion.div 
                                                key="placeholder"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-center space-y-4 py-10"
                                            >
                                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto text-gray-600">
                                                    <i className="fa-solid fa-bolt-lightning text-2xl"></i>
                                                </div>
                                                <p className="text-sm text-gray-500 font-medium">
                                                    {selected.length === 0 ? 'Selecciona el primer ingrediente...' : 'Selecciona el segundo ingrediente para la fusión...'}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OraculoChalamandra;
