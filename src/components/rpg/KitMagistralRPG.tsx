import React, { useState } from 'react';
import { HACKS_DATA, RPG_MODULES_DATA, RPG_MODULE_ORDER } from '../../utils/constants';
import { Hack, Archetype } from '../../utils/types';

interface ModuleCardProps {
    hack: Hack;
    moduleData: typeof RPG_MODULES_DATA[number];
    onOpenModule: (hackId: number) => void;
}

const getArchetypeStyling = (archetype: Archetype): { border: string; bg: string; text: string; } => {
    switch (archetype) {
        case 'El Arquitecto': return { border: 'border-yellow-500', bg: 'bg-yellow-900/50', text: 'text-yellow-300' };
        case 'El Alquimista': return { border: 'border-green-500', bg: 'bg-green-900/50', text: 'text-green-300' };
        case 'El Explorador': return { border: 'border-blue-500', bg: 'bg-blue-900/50', text: 'text-blue-300' };
        default: return { border: 'border-gray-500', bg: 'bg-gray-900/50', text: 'text-gray-300' };
    }
};

const TwistComponent: React.FC<{twist: typeof RPG_MODULES_DATA[number]['twist']}> = ({ twist }) => {
    const [isRevealed, setIsRevealed] = useState(false);

    const baseClasses = "mt-4 p-4 rounded-lg cursor-pointer transition-all";
    const twistStyles = {
        boss: 'bg-red-900/30 border border-red-700 text-red-400',
        mission: 'bg-yellow-900/30 border border-yellow-700 text-yellow-400',
        'power-up': 'bg-blue-900/30 border border-blue-700 text-blue-400',
    };

    const handleClick = () => setIsRevealed(!isRevealed);
    
    return (
        <div className={`${baseClasses} ${twistStyles[twist.type]}`} onClick={handleClick}>
            <p className="font-bold">{twist.title}</p>
            {isRevealed && (
                <div className="mt-2 text-sm text-gray-300 text-left">
                    {typeof twist.content === 'string' ? (
                         <p>{twist.content}</p>
                    ) : (
                        <ul className="list-disc list-inside space-y-1">
                            {twist.content.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong></strong>') }}></li>)}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

const ModuleCard: React.FC<ModuleCardProps> = ({ hack, moduleData, onOpenModule }) => {
    const archetypeStyle = getArchetypeStyling(hack.archetype);

    return (
        <div className={`rpg-module-card p-6 border-l-8 ${archetypeStyle.border} rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all`}>
            <div className="flex justify-between items-start cursor-pointer group" onClick={() => onOpenModule(hack.id)}>
                <div>
                    <div className="tooltip-container">
                        <h4 className={`text-2xl font-black ${hack.colorClass} flex items-center`}>
                           {moduleData.title}
                        </h4>
                        <span className="tooltip">{moduleData.objective}</span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${archetypeStyle.bg} ${archetypeStyle.text}`}>{hack.archetype.toUpperCase()}</span>
                </div>
                <i className="fas fa-book-open text-3xl text-white/50 group-hover:text-yellow-300 transition-colors"></i>
            </div>
            <p className="text-base text-gray-400 mt-3">{hack.metodo}. <span className="text-sm italic">{moduleData.story}</span></p>
            
            <TwistComponent twist={moduleData.twist} />
        </div>
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
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-white">
                <i className="fa-solid fa-dungeon mr-3"></i>KIT MAGISTRAL: LA MATRIZ DE PODERES
            </h2>
            <p className="text-xl text-center mb-12 text-gray-400 italic">
                Esto no es un curso, es un RPG. Cada módulo es un nivel, cada protocolo una habilidad. Domínalos, fúndelos y re-codifica tu realidad.
            </p>

            <div className="min-h-[350px]">
                 <ModuleCard hack={hack} moduleData={moduleData} onOpenModule={onOpenModule} />
            </div>

            <div className="flex items-center justify-between mt-8 gap-4">
                <button 
                    onClick={handlePrev} 
                    className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-black rounded-xl shadow-lg hover:from-gray-700 hover:to-gray-600 border-2 border-purple-500 hover:border-purple-400 transition-all transform hover:scale-105 btn-dynamic flex-1 flex items-center justify-center">
                    <i className="fa-solid fa-arrow-left mr-2"></i> Anterior
                </button>
                <span className="font-bold text-lg text-gray-400 text-center flex-shrink-0">
                    Módulo {currentIndex + 1}/{RPG_MODULE_ORDER.length}
                </span>
                <button 
                    onClick={handleNext} 
                    className="px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 btn-dynamic flex-1 flex items-center justify-center">
                    Siguiente <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
            </div>
        </section>
    );
};

export default KitMagistralRPG;
