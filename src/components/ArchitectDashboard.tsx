import React, { useState, useEffect } from 'react';
import { Archetype, PurchasedService } from '@/utils/types';
import { CERTIFICATIONS_DATA, HACKS_DATA } from '@/utils/constants';
import { motion, AnimatePresence } from 'motion/react';

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
    const [displayedDirective, setDisplayedDirective] = useState("");
    const [activeTab, setActiveTab] = useState<'status' | 'certs' | 'protocols'>('status');

    const completedCount = completedHacks.size;
    const certsUnlocked = earnedCerts.size;

    const levels = [
        { name: 'Iniciado', min: 0, max: 2, color: 'text-gray-400', bg: 'bg-gray-400', shadow: 'shadow-gray-500/20' },
        { name: 'Decodificador', min: 3, max: 5, color: 'text-emerald-400', bg: 'bg-emerald-400', shadow: 'shadow-emerald-500/20' },
        { name: 'Arquitecto de Realidad', min: 6, max: 8, color: 'text-blue-400', bg: 'bg-blue-400', shadow: 'shadow-blue-500/20' },
        { name: 'Alquimista Maestro', min: 9, max: 11, color: 'text-purple-400', bg: 'bg-purple-400', shadow: 'shadow-purple-500/20' },
        { name: 'Chalamandra Magistral', min: 12, max: 99, color: 'text-yellow-400', bg: 'bg-yellow-400', shadow: 'shadow-yellow-500/20' }
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
            }, 20);
            return () => clearInterval(interval);
        } else if (!aiDirective && !isDirectiveLoading) {
             setDisplayedDirective("Esperando transmisión de comando estratégico...");
        }
    }, [aiDirective, isDirectiveLoading]);

    const getServiceIcon = (type: string) => {
        switch (type) {
            case 'discovery': return 'fa-calendar-check text-yellow-400';
            case 'magistral': return 'fa-box-open text-purple-400';
            default: return 'fa-gear';
        }
    };

    return (
        <section id="dashboard" className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)]"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">

                <img 
                    src="/images/el-laberinto.jpg" 
                    alt="El laberinto no es real. Tú lo diseñas." 
                    className="mx-auto mb-16 w-full max-w-4xl rounded-2xl shadow-2xl shadow-black/50 border-2 border-white/5"
                />

                <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">Sistema Operativo Magistral v2.5</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                            Command <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Center</span>
                        </h2>
                    </div>

                    <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
                        {(['status', 'certs', 'protocols'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                    activeTab === tab ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'
                                }`}
                            >
                                {tab === 'status' ? 'Estado' : tab === 'certs' ? 'Méritos' : 'Protocolos'}
                            </button>
                        ))}
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column: Core Stats */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Mastery Rank Card */}
                        <motion.div 
                            layout
                            className={`p-10 rounded-[3rem] bg-gradient-to-br from-gray-900 to-black border-2 border-white/5 shadow-2xl relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                <i className="fa-solid fa-crown text-6xl text-white"></i>
                            </div>
                            
                            <div className="relative z-10 space-y-8">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Rango de Maestría</span>
                                    <h3 className={`text-4xl font-black uppercase tracking-tighter leading-none ${currentLevel.color}`}>
                                        {currentLevel.name}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="text-5xl font-black text-white leading-none">{completedCount}</span>
                                        <span className="text-xs font-bold text-gray-500 mb-1">/ {HACKS_DATA.length} HACKS</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(completedCount / HACKS_DATA.length) * 100}%` }}
                                            className={`h-full ${currentLevel.bg} shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest text-center">
                                        {nextLevel ? `Faltan ${nextLevel.min - completedCount} para ${nextLevel.name}` : 'Nivel Máximo Alcanzado'}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Security Status */}
                        <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-between group hover:bg-white/[0.07] transition-all">
                            <div className="space-y-1">
                                <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em]">Seguridad Cognitiva</span>
                                <p className={`text-xl font-black uppercase tracking-tighter ${security.color}`}>{security.level}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl bg-black/40 border border-white/5 ${security.color}`}>
                                <i className={`fa-solid ${security.icon}`}></i>
                            </div>
                        </div>

                        {/* Archetype Profile */}
                        <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden group">
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Perfil de Arquetipo</span>
                                    <i className="fa-solid fa-dna text-white/20"></i>
                                </div>
                                <div className="text-center py-4">
                                    {dominantArchetype ? (
                                        <h4 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
                                            {dominantArchetype}
                                        </h4>
                                    ) : (
                                        <p className="text-gray-600 font-black uppercase tracking-widest text-xs">Diagnóstico Pendiente</p>
                                    )}
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={`h-1 rounded-full ${dominantArchetype ? 'bg-white/20' : 'bg-white/5'}`}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Content */}
                    <div className="lg:col-span-8 space-y-6">
                        <AnimatePresence mode="wait">
                            {activeTab === 'status' && (
                                <motion.div 
                                    key="status"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-6"
                                >
                                    {/* AI Strategic Directive */}
                                    <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 border-white/5 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-12 opacity-5">
                                            <i className="fa-solid fa-microchip text-9xl text-white"></i>
                                        </div>
                                        
                                        <div className="relative z-10 space-y-10">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30">
                                                        <i className="fa-solid fa-bolt"></i>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-black text-white uppercase tracking-tighter">Oráculo Estratégico</h3>
                                                        <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">IA Generativa Activa</p>
                                                    </div>
                                                </div>
                                                {isDirectiveLoading && (
                                                    <div className="flex gap-1">
                                                        {[1, 2, 3].map(i => (
                                                            <motion.div 
                                                                key={i}
                                                                animate={{ scale: [1, 1.5, 1] }}
                                                                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                                                                className="w-1.5 h-1.5 rounded-full bg-purple-500"
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="min-h-[160px] p-8 bg-black/40 rounded-[2rem] border border-white/5 backdrop-blur-xl">
                                                <p className="text-xl text-gray-300 leading-relaxed italic font-medium">
                                                    {displayedDirective || "Sincronizando con la matriz de datos..."}
                                                </p>
                                            </div>

                                            <button 
                                                onClick={onGenerateDirective}
                                                disabled={isDirectiveLoading}
                                                className="group relative w-full py-6 bg-white text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                                <span className="relative z-10 uppercase tracking-[0.2em] text-sm">
                                                    {isDirectiveLoading ? 'Decodificando...' : 'Solicitar Directiva Estratégica'}
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Quick Stats Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center gap-6">
                                            <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-3xl text-emerald-400 border border-emerald-500/20">
                                                <i className="fa-solid fa-award"></i>
                                            </div>
                                            <div>
                                                <p className="text-4xl font-black text-white leading-none">{certsUnlocked}</p>
                                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">Méritos Desbloqueados</p>
                                            </div>
                                        </div>
                                        <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center gap-6">
                                            <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center text-3xl text-blue-400 border border-blue-500/20">
                                                <i className="fa-solid fa-layer-group"></i>
                                            </div>
                                            <div>
                                                <p className="text-4xl font-black text-white leading-none">{purchasedServices.length}</p>
                                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">Protocolos Activos</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'certs' && (
                                <motion.div 
                                    key="certs"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                >
                                    {CERTIFICATIONS_DATA.map((cert) => {
                                        const isEarned = earnedCerts.has(cert.id);
                                        return (
                                            <div 
                                                key={cert.id}
                                                className={`p-8 rounded-[2.5rem] border-2 transition-all duration-500 flex items-center gap-6 ${
                                                    isEarned 
                                                    ? 'bg-white/5 border-white/10 shadow-xl' 
                                                    : 'bg-black/40 border-white/5 opacity-40 grayscale'
                                                }`}
                                            >
                                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${isEarned ? cert.color : 'text-gray-600'} bg-black/40`}>
                                                    <i className={cert.icon}></i>
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className={`font-black uppercase tracking-tighter ${isEarned ? 'text-white' : 'text-gray-500'}`}>{cert.title}</h4>
                                                    <p className="text-[10px] text-gray-500 font-medium leading-tight line-clamp-2">{cert.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            )}

                            {activeTab === 'protocols' && (
                                <motion.div 
                                    key="protocols"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    {purchasedServices.length > 0 ? (
                                        purchasedServices.map((service, idx) => (
                                            <div key={idx} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-between group hover:bg-white/[0.07] transition-all">
                                                <div className="flex items-center gap-6">
                                                    <div className="w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center text-3xl">
                                                        <i className={`fa-solid ${getServiceIcon(service.type)}`}></i>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xl font-black text-white uppercase tracking-tighter">{service.type}</h4>
                                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Estado: Operativo</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-2">Adquirido {new Date(service.date).toLocaleDateString()}</p>
                                                    <button className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white text-[10px] font-black rounded-xl border border-white/10 transition-all uppercase tracking-widest">
                                                        Acceder
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-20 rounded-[3.5rem] bg-white/5 border border-dashed border-white/10 text-center space-y-4">
                                            <i className="fa-solid fa-lock text-4xl text-gray-700"></i>
                                            <p className="text-gray-500 font-black uppercase tracking-widest text-xs">No hay protocolos externos activos</p>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectDashboard;
