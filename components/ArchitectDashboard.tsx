import React, { useState, useEffect } from 'react';
import { Archetype, PurchasedService } from '../utils/types';
import { CERTIFICATIONS_DATA, HACKS_DATA } from '../utils/constants';

interface ArchitectDashboardProps {
    completedHacks: Set<number>;
    earnedCerts: Set<number>;
    dominantArchetype: Archetype | null;
    onGenerateDirective: () => void;
    aiDirective: string;
    isDirectiveLoading: boolean;
    purchasedServices: PurchasedService[];
}

const ArchitectDashboard: React.FC<ArchitectDashboardProps> = ({
    completedHacks,
    earnedCerts,
    dominantArchetype,
    onGenerateDirective,
    aiDirective,
    isDirectiveLoading,
    purchasedServices,
}) => {
    const [displayedDirective, setDisplayedDirective] = useState("Solicita una directiva para tu próximo movimiento estratégico...");

    const completedCount = completedHacks.size;
    const certsUnlocked = earnedCerts.size;

    const levels = [
        { name: 'Iniciado', min: 0, max: 2, color: 'text-gray-400', bg: 'bg-gray-400' },
        { name: 'Decodificador', min: 3, max: 5, color: 'text-emerald-400', bg: 'bg-emerald-400' },
        { name: 'Arquitecto de Realidad', min: 6, max: 8, color: 'text-blue-400', bg: 'bg-blue-400' },
        { name: 'Alquimista Maestro', min: 9, max: 11, color: 'text-purple-400', bg: 'bg-purple-400' },
        { name: 'Chalamandra Magistral', min: 12, max: 99, color: 'text-yellow-400', bg: 'bg-yellow-400' }
    ];

    const currentLevel = levels.find(l => completedCount >= l.min && completedCount <= l.max) || levels[0];
    const nextLevel = levels[levels.indexOf(currentLevel) + 1];
    const progressToNext = nextLevel ? ((completedCount - currentLevel.min) / (nextLevel.min - currentLevel.min)) * 100 : 100;

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

    const getServiceIcon = (type: string) => {
        switch (type) {
            case 'discovery': return 'fa-calendar-check text-yellow-400';
            case 'magistral': return 'fa-box-open text-purple-400';
            case 'total': return 'fa-infinity text-pink-400';
            default: return 'fa-gear';
        }
    };

    const getServiceAction = (type: string) => {
        switch (type) {
            case 'discovery': return { label: 'AGENDAR', link: 'https://calendly.com/chalamandra/discovery' };
            case 'magistral': return { label: 'ACCEDER', link: '#' };
            case 'total': return { label: 'CONTACTAR', link: 'https://wa.me/yournumber' };
            default: return { label: 'VER', link: '#' };
        }
    };

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
                            <p className={`text-2xl font-black ${currentLevel.color} glitch-text`} data-text={currentLevel.name.toUpperCase()}>
                                {currentLevel.name.toUpperCase()}
                            </p>
                            <p className="text-sm font-semibold text-gray-400 mb-2">Rango de Maestría</p>
                            
                            {nextLevel && (
                                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden mt-2">
                                    <div 
                                        className={`h-full ${currentLevel.bg} transition-all duration-1000`} 
                                        style={{ width: `${progressToNext}%` }}
                                    ></div>
                                </div>
                            )}
                            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">
                                {nextLevel ? `Próximo Rango: ${nextLevel.name}` : 'Nivel Máximo Alcanzado'}
                            </p>
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

                {/* Purchased Services Section */}
                {purchasedServices.length > 0 && (
                    <div className="dashboard-widget lg:col-span-3">
                        <h3 className="text-lg font-bold text-gray-400 mb-6 flex items-center">
                            <i className="fa-solid fa-box-open mr-2"></i>MIS PROTOCOLOS ACTIVOS
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {purchasedServices.map((service, idx) => {
                                const action = getServiceAction(service.type);
                                return (
                                    <div key={idx} className="bg-black/40 border border-white/10 p-6 rounded-2xl flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl mr-4">
                                                <i className={`fa-solid ${getServiceIcon(service.type)}`}></i>
                                            </div>
                                            <div>
                                                <h4 className="font-black text-white uppercase">{service.type}</h4>
                                                <p className="text-[10px] text-gray-500">Adquirido: {new Date(service.date).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <a 
                                            href={action.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-[10px] font-black rounded-lg transition-all"
                                        >
                                            {action.label}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Digital Certifications Section */}
                <div className="dashboard-widget lg:col-span-3">
                    <h3 className="text-lg font-bold text-gray-400 mb-6 flex items-center">
                        <i className="fa-solid fa-award mr-2"></i>CERTIFICACIONES DIGITALES
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {CERTIFICATIONS_DATA.map((cert) => {
                            const isEarned = earnedCerts.has(cert.id);
                            return (
                                <div 
                                    key={cert.id}
                                    className={`relative p-6 rounded-2xl border transition-all duration-500 flex flex-col items-center text-center group ${
                                        isEarned 
                                        ? 'bg-white/5 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]' 
                                        : 'bg-black/40 border-white/5 opacity-40 grayscale'
                                    }`}
                                >
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl ${isEarned ? cert.color : 'text-gray-600'}`}>
                                        <i className={cert.icon}></i>
                                    </div>
                                    <h4 className={`font-black text-sm mb-2 ${isEarned ? 'text-white' : 'text-gray-500'}`}>{cert.title.toUpperCase()}</h4>
                                    <p className="text-[10px] text-gray-500 font-medium leading-tight">{cert.description}</p>
                                    
                                    {isEarned && (
                                        <div className="mt-4 pt-4 border-t border-white/10 w-full">
                                            <span className="text-[9px] font-black text-cyan-400 tracking-widest uppercase">SRAP: {cert.srap}</span>
                                        </div>
                                    )}

                                    {!isEarned && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[10px] font-black text-white tracking-widest uppercase">BLOQUEADO</span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectDashboard;
