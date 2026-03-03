import React from 'react';
import { Archetype } from '../../utils/types';

interface ArchitectDashboardProps {
    completedHacks: Set<number>;
    dominantArchetype: Archetype;
    onGenerateDirective: () => void;
    aiDirective: string;
    isDirectiveLoading: boolean;
}

const ArchitectDashboard: React.FC<ArchitectDashboardProps> = ({
    completedHacks,
    dominantArchetype,
    onGenerateDirective,
    aiDirective,
    isDirectiveLoading
}) => {

    const getArchetypeColor = () => {
        switch (dominantArchetype) {
            case 'El Arquitecto': return 'text-yellow-500';
            case 'El Alquimista': return 'text-green-500';
            case 'El Explorador': return 'text-blue-500';
            default: return 'text-white';
        }
    };

    return (
        <section id="dashboard" className="py-32 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Identity Card */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-900/40 backdrop-blur-md p-10 rounded-[3rem] border border-gray-800 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl text-white group-hover:scale-110 transition-transform duration-700">
                                <i className="fa-solid fa-id-badge"></i>
                            </div>

                            <div className="relative z-10">
                                <span className="text-gray-500 font-black text-[0.6rem] uppercase tracking-[0.3em] mb-4 block">Identidad Decodificada</span>
                                <h2 className={`text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter ${getArchetypeColor()}`}>
                                    {dominantArchetype.split(' ')[1]}
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Hacks Activos</span>
                                        <span className="text-xl font-black text-white italic">{completedHacks.size}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sincronización</span>
                                        <span className="text-xl font-black text-white italic">{Math.round((completedHacks.size / 8) * 100)}%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Nivel Magistral</span>
                                        <span className="text-xl font-black text-yellow-500 italic">I</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: AI Oracle */}
                    <div className="lg:w-2/3">
                        <div className="h-full bg-gray-900/40 backdrop-blur-md p-10 md:p-12 rounded-[3.5rem] border border-gray-800 shadow-2xl flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                                        <i className="fa-solid fa-brain"></i>
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Directiva Estratégica</h3>
                                </div>
                                <span className="text-[0.6rem] font-black text-gray-600 uppercase tracking-widest animate-pulse">Sincronizado con Gemini</span>
                            </div>

                            <div className="flex-grow mb-10 min-h-[150px] bg-black/40 rounded-3xl p-8 border border-gray-800/50">
                                {isDirectiveLoading ? (
                                    <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4">
                                        <i className="fa-solid fa-atom fa-spin text-3xl"></i>
                                        <p className="text-[0.65rem] font-black uppercase tracking-[0.2em]">Calculando vectores de probabilidad...</p>
                                    </div>
                                ) : aiDirective ? (
                                    <p className="text-gray-300 text-lg leading-relaxed font-medium italic animate-[fade-in-up_0.5s_ease-out]">
                                        "{aiDirective}"
                                    </p>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-gray-700">
                                        <p className="text-sm font-bold italic">Esperando señal para procesar datos...</p>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={onGenerateDirective}
                                disabled={isDirectiveLoading}
                                className="group relative w-full overflow-hidden bg-white text-black font-black py-5 rounded-2xl transition-all hover:text-white disabled:opacity-20"
                            >
                                <div className="absolute inset-0 bg-purple-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                <span className="relative z-10 flex items-center justify-center uppercase tracking-[0.2em] text-sm">
                                    <i className="fa-solid fa-bolt mr-3 text-xs"></i>
                                    Invocar Directiva IA
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectDashboard;
