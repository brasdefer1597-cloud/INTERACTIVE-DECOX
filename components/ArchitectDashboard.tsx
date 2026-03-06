import React, { useState, useEffect } from 'react';
import { Archetype } from '../utils/types';
import { CERTIFICATIONS_DATA, HACKS_DATA } from '../utils/constants';

interface ArchitectDashboardProps {
    completedHacks: Set<number>;
    dominantArchetype: Archetype | null;
    onGenerateDirective: () => void;
    aiDirective: string;
    isDirectiveLoading: boolean;
}

const ArchitectDashboard: React.FC<ArchitectDashboardProps> = ({
    completedHacks,
    dominantArchetype,
    onGenerateDirective,
    aiDirective,
    isDirectiveLoading,
}) => {
    const [displayedDirective, setDisplayedDirective] = useState("Solicita una directiva para tu próximo movimiento estratégico...");

    const completedCount = completedHacks.size;
    const masteryLevel = completedCount <= 2 ? 'Novato' : completedCount <= 5 ? 'Adepto' : 'Maestro';
    const certsUnlocked = CERTIFICATIONS_DATA.filter((c: any) => c.requiredHacks.every((hId: number) => completedHacks.has(hId))).length;

    const securityStatusMap = [
        { level: 'Sistema Vulnerable', icon: 'fa-shield-virus', color: 'text-red-500' },
        { level: 'Defensas Activas', icon: 'fa-shield-halved', color: 'text-yellow-500' },
        { level: 'Fortaleza Cognitiva', icon: 'fa-shield', color: 'text-green-500' },
        { level: 'Soberanía Absoluta', icon: 'fa-shield-check', color: 'text-cyan-400' }
    ];
    const securityIndex = completedCount === 0 ? 0 : completedCount <= 3 ? 1 : completedCount <= 6 ? 2 : 3;
    const security = securityStatusMap[securityIndex];

    useEffect(() => {
        if (aiDirective && !isDirectiveLoading) {
            setDisplayedDirective(''); 
            let i = 0;
            const interval = setInterval(() => {
                if (i < aiDirective.length) {
                    setDisplayedDirective(prev => prev + aiDirective.charAt(i));
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 30);
            return () => clearInterval(interval);
        } else if (!aiDirective && !isDirectiveLoading) {
             setDisplayedDirective("Solicita una directiva para tu próximo movimiento estratégico...");
        }
    }, [aiDirective, isDirectiveLoading]);

    return (
        <section id="dashboard" className="py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-6 text-white">
                <i className="fa-solid fa-table-cells-large mr-3"></i>ARCHITECT'S DASHBOARD
            </h2>
            <p className="text-xl text-center text-gray-400 mb-12 italic">
                Tu centro de comando para la reingeniería cognitiva.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Progress Overview Widget */}
                <div className="dashboard-widget">
                    <h3 className="text-lg font-bold text-gray-400 mb-4 flex items-center"><i className="fa-solid fa-chart-line mr-2"></i>ESTADO DE PROGRESO</h3>
                    <div className="space-y-4">
                        <div className="text-center">
                            <p className="text-5xl font-black text-white">{completedCount}<span className="text-xl text-gray-400">/{HACKS_DATA.length}</span></p>
                            <p className="text-sm font-semibold text-gray-400">Hacks Dominados</p>
                        </div>
                         <div className="text-center">
                            <p className="text-5xl font-black text-white">{certsUnlocked}<span className="text-xl text-gray-400">/{CERTIFICATIONS_DATA.length}</span></p>
                            <p className="text-sm font-semibold text-gray-400">Certificaciones</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-black text-yellow-400">{masteryLevel.toUpperCase()}</p>
                            <p className="text-sm font-semibold text-gray-400">Nivel de Maestría</p>
                        </div>
                    </div>
                </div>

                {/* Cognitive Security & Archetype Widget */}
                 <div className="dashboard-widget lg:col-span-2">
                     <h3 className="text-lg font-bold text-gray-400 mb-4 flex items-center"><i className="fa-solid fa-brain mr-2"></i>PERFIL COGNITIVO</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="text-center bg-gray-800 p-4 rounded-xl">
                             <p className="text-sm font-semibold text-gray-400 mb-2">ARQUETIPO DOMINANTE</p>
                            {dominantArchetype ? (
                                <p className="text-3xl font-black text-white">{dominantArchetype.toUpperCase()}</p>
                            ) : (
                                <p className="text-lg font-bold text-gray-500">NO DEFINIDO</p>
                            )}
                        </div>
                        <div className="text-center bg-gray-800 p-4 rounded-xl">
                             <p className="text-sm font-semibold text-gray-400 mb-2">SEGURIDAD COGNITIVA</p>
                             <p className={`text-3xl font-black ${security.color}`}><i className={`fa-solid ${security.icon} mr-2`}></i>{security.level}</p>
                        </div>
                     </div>
                     <div className="mt-6 bg-black/30 p-4 rounded-lg">
                         <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-400 flex items-center"><i className="fa-solid fa-eye mr-2"></i>ORÁCULO ESTRATÉGICO</h3>
                            <span className="text-xs font-semibold text-purple-400 bg-purple-900/50 px-2 py-1 rounded-md">POTENCIADO POR IA</span>
                         </div>
                         <div className="p-4 bg-gray-900 rounded-lg min-h-[100px] flex items-center justify-center">
                            {isDirectiveLoading ? (
                                <i className="fa-solid fa-spinner fa-spin text-3xl text-yellow-400"></i>
                            ) : (
                                <p className={`text-lg text-gray-200 italic ${aiDirective ? 'typewriter-text' : ''}`}>
                                    {displayedDirective}
                                </p>
                            )}
                         </div>
                         <button 
                            onClick={onGenerateDirective}
                            disabled={isDirectiveLoading}
                            className="w-full mt-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black py-3 px-4 rounded-xl transition-all text-lg btn-dynamic disabled:opacity-50 disabled:cursor-not-allowed">
                                {isDirectiveLoading ? 'DECODIFICANDO...' : 'GENERAR DIRECTIVA'}
                         </button>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectDashboard;
