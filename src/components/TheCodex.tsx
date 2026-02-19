import React, { useState } from 'react';

const TheCodex: React.FC = () => {
    const [isOathTaken, setIsOathTaken] = useState(false);

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0505] to-black opacity-90 z-0"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <span className="text-yellow-500 font-bold tracking-[0.3em] text-sm uppercase mb-4 block animate-pulse">
                    Fase de Profundización
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-16 premium-glow">
                    EL CÓDICE DE LA CHALAMANDRA
                </h2>

                {/* THE SIGIL */}
                <div className="mb-20">
                    <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                        {/* The Infinity Container */}
                        <div className="absolute inset-0 border-4 border-gray-800 rounded-full blur-xl opacity-50"></div>
                        
                        {/* Left Side: Chaos/Fire */}
                        <div className="absolute left-0 text-6xl text-orange-500 animate-float-slow" style={{ animationDelay: '0s' }}>
                            <i className="fa-solid fa-fire"></i>
                        </div>

                        {/* Center: The Bridge */}
                        <div className="absolute text-8xl text-gray-700 z-0">
                            <i className="fa-solid fa-infinity"></i>
                        </div>

                        {/* Right Side: Order/Diamond */}
                        <div className="absolute right-0 text-5xl text-pink-400 animate-float-slow" style={{ animationDelay: '1.5s' }}>
                            <i className="fa-solid fa-gem"></i>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-4 tracking-widest uppercase">El Sigilo de la Transmutación Perpetua</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    {/* THE LAW */}
                    <div className="text-right border-r-2 border-yellow-500/30 pr-8">
                        <h3 className="text-2xl font-bold text-yellow-500 mb-2">LA LEY DEL ORO</h3>
                        <p className="text-4xl md:text-5xl font-black text-white leading-tight italic">
                            "Danza tu Caos,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Honra tu Origen."</span>
                        </p>
                        <p className="text-gray-400 mt-4 text-sm">
                            No reprimas tu naturaleza Chola (caos), ni fingas tu naturaleza Fresa (orden). 
                            La maestría reside en la tensión entre ambas.
                        </p>
                    </div>

                    {/* THE VALUE */}
                    <div className="text-left pl-4">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">LA MONEDA DE CAMBIO</h3>
                        <div className="bg-gray-900/80 p-6 rounded-xl border border-green-500/30">
                            <h4 className="text-xl font-bold text-white mb-2"><i className="fa-solid fa-coins mr-2 text-yellow-400"></i> Fuego Transformado</h4>
                            <p className="text-gray-300">
                                Aquí no intercambiamos tiempo por dinero. Intercambiamos <strong>"Cátedras de Zapateado"</strong>: 
                                lecciones de vida extraídas del fuego de la experiencia y cristalizadas en sabiduría táctica.
                            </p>
                        </div>
                    </div>
                </div>

                {/* THE ANTI-ARCHETYPE */}
                <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 p-8 rounded-3xl relative overflow-hidden group hover:border-red-900 transition-colors duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent group-hover:via-red-500 transition-all"></div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="text-6xl text-gray-700 grayscale group-hover:text-gray-500 transition-colors">
                            <i className="fa-solid fa-user-tie"></i>
                        </div>
                        <div className="text-left">
                            <h3 className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors mb-2">
                                EL ESPEJO NEGRO: <span className="text-red-500">EL AUTÓMATA PULIDO</span>
                            </h3>
                            <p className="text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">
                                El némesis de la Chalamandra. Aquel que pule la forma pero vacía el contenido. 
                                Es la perfección estética sin alma (Fresa vacía) o el caos destructivo sin propósito (Chola perdida). 
                                El Autómata busca aprobación; la Chalamandra busca <strong className="text-white">Verdad</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* THE OATH */}
                <div className="mt-20">
                    {!isOathTaken ? (
                        <button 
                            onClick={() => setIsOathTaken(true)}
                            className="px-12 py-5 bg-transparent border-2 border-yellow-500 text-yellow-500 font-black tracking-widest hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-none uppercase text-lg btn-dynamic"
                        >
                            Jurar el Código
                        </button>
                    ) : (
                        <div className="animate-fade-in-up">
                            <p className="text-2xl font-black text-white mb-2"><i className="fa-solid fa-infinity text-yellow-500 mr-2"></i> JURAMENTO ACEPTADO</p>
                            <p className="text-gray-400">El Proyecto Imposible te espera en la fase de Escalabilidad.</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default React.memo(TheCodex);