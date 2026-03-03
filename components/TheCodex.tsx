import React, { useState } from 'react';
import { CODICE_CONTENT } from '../utils/constants';

const TheCodex: React.FC = () => {
    const [isOathTaken, setIsOathTaken] = useState(false);

    return (
        <section id="codice" className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0d0d] to-black opacity-90 z-0"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1 rounded-full bg-orange-400/10 border border-orange-400/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6">
                        Fase de Profundización
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
                        EL CÓDICE DE LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">CHALAMANDRA</span>
                    </h2>
                </div>

                {/* THE SIGIL */}
                <div className="mb-32 text-center">
                    <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-pulse"></div>
                        <div className="absolute inset-4 border border-white/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        
                        {/* Chaos/Fire */}
                        <div className="absolute left-0 text-5xl text-orange-500 animate-bounce" style={{ animationDuration: '3s' }}>
                            <i className="fa-solid fa-fire"></i>
                        </div>

                        {/* Center: The Bridge */}
                        <div className="absolute text-9xl text-white/5">
                            <i className="fa-solid fa-infinity"></i>
                        </div>

                        {/* Order/Diamond */}
                        <div className="absolute right-0 text-4xl text-pink-400 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
                            <i className="fa-solid fa-gem"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 text-[10px] font-black mt-8 tracking-[0.5em] uppercase">{CODICE_CONTENT.sigilo}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* THE LAW */}
                    <div className="p-12 rounded-[3rem] bg-[#111] border border-white/5 relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500 opacity-30"></div>
                        <h3 className="text-xs font-black text-orange-400 uppercase tracking-widest mb-8">{CODICE_CONTENT.leyDelOro.titulo}</h3>
                        <p className="text-4xl lg:text-5xl font-black text-white leading-tight mb-8 italic tracking-tighter">
                            "{CODICE_CONTENT.leyDelOro.lema}"
                        </p>
                        <p className="text-gray-400 font-medium leading-relaxed">
                            {CODICE_CONTENT.leyDelOro.descripcion}
                        </p>
                    </div>

                    {/* THE VALUE */}
                    <div className="p-12 rounded-[3rem] bg-[#111] border border-white/5 relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-30"></div>
                        <h3 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-8">{CODICE_CONTENT.monedaDeCambio.titulo}</h3>
                        <p className="text-4xl lg:text-5xl font-black text-white leading-tight mb-8 italic tracking-tighter">
                            "{CODICE_CONTENT.monedaDeCambio.lema}"
                        </p>
                        <p className="text-gray-400 font-medium leading-relaxed">
                            {CODICE_CONTENT.monedaDeCambio.descripcion}
                        </p>
                    </div>
                </div>

                {/* THE ANTI-ARCHETYPE */}
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-950/20 to-transparent border border-red-900/20 p-12 rounded-[3rem] relative overflow-hidden group">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="text-8xl text-red-900/20 group-hover:text-red-900/40 transition-colors">
                            <i className="fa-solid fa-user-tie"></i>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-black text-red-500 uppercase tracking-widest mb-4">
                                {CODICE_CONTENT.espejoNegro.titulo}
                            </h3>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                {CODICE_CONTENT.espejoNegro.descripcion}
                            </p>
                        </div>
                    </div>
                </div>

                {/* THE OATH */}
                <div className="mt-24 text-center">
                    {!isOathTaken ? (
                        <button 
                            onClick={() => setIsOathTaken(true)}
                            className="group relative px-16 py-6 bg-white text-black font-black text-xl tracking-widest uppercase hover:scale-105 active:scale-95 transition-all rounded-2xl overflow-hidden"
                        >
                            <span className="relative z-10">Jurar el Código</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    ) : (
                        <div className="animate-fade-in">
                            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10">
                                <i className="fa-solid fa-infinity text-orange-500 text-2xl"></i>
                                <div className="text-left">
                                    <p className="text-xl font-black text-white uppercase tracking-widest">Juramento Aceptado</p>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">El Proyecto Imposible te espera</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TheCodex;
