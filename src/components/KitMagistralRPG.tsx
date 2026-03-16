import React, { useState } from 'react';
import { HACKS_DATA, RPG_MODULES_DATA, RPG_MODULE_ORDER } from '@/utils/constants';
import { Hack, Archetype } from '@/utils/types';
import { motion, AnimatePresence } from 'motion/react';

interface ModuleCardProps {
    hack: Hack;
    moduleData: typeof RPG_MODULES_DATA[number];
    onOpenModule: (hackId: number) => void;
}

const getArchetypeStyling = (archetype: Archetype): { border: string; bg: string; text: string; glow: string; accent: string } => {
    switch (archetype) {
        case 'El Arquitecto': return { border: 'border-yellow-500', bg: 'bg-yellow-900/20', text: 'text-yellow-400', glow: 'shadow-yellow-500/20', accent: 'bg-yellow-500' };
        case 'El Alquimista': return { border: 'border-emerald-500', bg: 'bg-emerald-900/20', text: 'text-emerald-400', glow: 'shadow-emerald-500/20', accent: 'bg-emerald-500' };
        case 'El Explorador': return { border: 'border-blue-500', bg: 'bg-blue-900/20', text: 'text-blue-400', glow: 'shadow-blue-500/20', accent: 'bg-blue-500' };
        default: return { border: 'border-gray-500', bg: 'bg-gray-900/20', text: 'text-gray-400', glow: 'shadow-gray-500/20', accent: 'bg-gray-500' };
    }
};

const TwistComponent: React.FC<{twist: typeof RPG_MODULES_DATA[number]['twist']}> = ({ twist }) => {
    const [isRevealed, setIsRevealed] = useState(false);

    const twistStyles: { [key: string]: string } = {
        boss: 'bg-red-500/10 border-red-500/30 text-red-400',
        mission: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
        'power-up': 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    };

    return (
        <div 
            className={`mt-6 p-6 rounded-2xl cursor-pointer transition-all border-2 ${twistStyles[twist.type]} ${isRevealed ? 'shadow-lg' : 'hover:bg-opacity-20'}`} 
            onClick={() => setIsRevealed(!isRevealed)}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <i className={`fa-solid ${twist.type === 'boss' ? 'fa-skull' : twist.type === 'mission' ? 'fa-scroll' : 'fa-gem'}`}></i>
                    <p className="font-black uppercase tracking-widest text-xs">{twist.title}</p>
                </div>
                <i className={`fa-solid fa-chevron-${isRevealed ? 'up' : 'down'} text-[10px]`}></i>
            </div>
            <AnimatePresence>
                {isRevealed && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 text-sm text-gray-300 leading-relaxed overflow-hidden"
                    >
                        {typeof twist.content === 'string' ? (
                             <p>{twist.content}</p>
                        ) : (
                            <ul className="space-y-2">
                                {twist.content.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-white/20 mt-1">•</span>
                                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}></span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ModuleCard: React.FC<ModuleCardProps> = ({ hack, moduleData, onOpenModule }) => {
    const style = getArchetypeStyling(hack.archetype);

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className={`relative bg-gray-900/40 backdrop-blur-xl p-10 rounded-[3rem] border-2 ${style.border} ${style.glow} shadow-2xl overflow-hidden group`}
        >
            {/* Archetype Badge */}
            <div className={`absolute top-0 right-0 px-6 py-2 rounded-bl-3xl font-black text-[10px] uppercase tracking-[0.2em] ${style.accent} text-black`}>
                {hack.archetype}
            </div>

            <div className="relative z-10 space-y-8">
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${style.text}`}>Objetivo: {moduleData.objective}</span>
                        <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                           {moduleData.title}
                        </h4>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <p className="text-gray-400 leading-relaxed">
                            <span className="text-white font-bold">{hack.metodo}</span>. {moduleData.story}
                        </p>
                        <button 
                            onClick={() => onOpenModule(hack.id)}
                            className={`px-8 py-4 ${style.accent} text-black font-black rounded-xl shadow-xl hover:scale-105 transition-all flex items-center gap-3 uppercase text-xs tracking-widest`}
                        >
                            <i className="fa-solid fa-terminal"></i>
                            Acceder al Protocolo
                        </button>
                    </div>
                    <TwistComponent twist={moduleData.twist} />
                </div>
            </div>

            {/* Background Icon */}
            <i className={`${hack.icon} absolute -bottom-10 -right-10 text-[12rem] text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-1000`}></i>
        </motion.div>
    );
};

interface KitMagistralRPGProps {
    onOpenModule: (hackId: number) => void;
}

const KitMagistralRPG: React.FC<KitMagistralRPGProps> = ({ onOpenModule }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % RPG_MODULE_ORDER.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + RPG_MODULE_ORDER.length) % RPG_MODULE_ORDER.length);
    };

    const currentHackId = RPG_MODULE_ORDER[currentIndex];
    const hack = HACKS_DATA.find(h => h.id === currentHackId);
    const moduleData = RPG_MODULES_DATA[currentHackId];

    if (!hack || !moduleData) return null;

    return (
        <section id="kit-magistral" className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <header className="text-center mb-20 space-y-4">
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
                        Kit <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Magistral</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        Esto no es un curso, es un RPG. Cada módulo es un nivel, cada protocolo una habilidad. Domínalos y re-codifica tu realidad.
                    </p>
                </header>

                <div className="min-h-[500px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <ModuleCard 
                            key={currentHackId}
                            hack={hack} 
                            moduleData={moduleData} 
                            onOpenModule={onOpenModule} 
                        />
                    </AnimatePresence>
                </div>

                <div className="flex items-center justify-center mt-12 gap-8">
                    <button 
                        onClick={handlePrev} 
                        className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center text-white hover:border-purple-500 hover:text-purple-400 transition-all group"
                    >
                        <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                    </button>
                    
                    <div className="flex gap-2">
                        {RPG_MODULE_ORDER.map((_, idx) => (
                            <div 
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-purple-500' : 'w-2 bg-white/10'}`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={handleNext} 
                        className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center text-white hover:border-purple-500 hover:text-purple-400 transition-all group"
                    >
                        <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default KitMagistralRPG;
