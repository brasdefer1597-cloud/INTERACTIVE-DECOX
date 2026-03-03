import React, { useState } from 'react';

const TheCodex: React.FC = () => {
    const [isOathTaken, setIsOathTaken] = useState(false);

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-black">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-yellow-500 font-black tracking-[0.5em] text-[0.6rem] uppercase mb-6 block opacity-60">
                        Protocolo de Profundización
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
                        El Códice
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                </div>

                {/* THE SIGIL */}
                <div className="mb-32 flex flex-col items-center">
                    <div className="relative group">
                        {/* Orbital Rings */}
                        <div className="absolute inset-[-40px] border border-gray-800 rounded-full animate-[spin_20s_linear_infinite] opacity-20"></div>
                        <div className="absolute inset-[-80px] border border-gray-900 rounded-full animate-[spin_30s_linear_infinite_reverse] opacity-20"></div>

                        <div className="relative w-64 h-64 flex items-center justify-center bg-gray-900/30 rounded-full backdrop-blur-xl border border-white/5 shadow-2xl group-hover:border-yellow-500/20 transition-all duration-700">
                            {/* The Sigil Graphics */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <i className="fa-solid fa-infinity text-[10rem] text-gray-700"></i>
                            </div>

                            <div className="relative z-10 flex items-center space-x-8">
                                <div className="text-5xl text-orange-500 animate-pulse drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                                    <i className="fa-solid fa-fire-flame-curved"></i>
                                </div>
                                <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
                                <div className="text-4xl text-pink-400 drop-shadow-[0_0_15px_rgba(244,114,182,0.5)]">
                                    <i className="fa-solid fa-gem"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-500 text-[0.6rem] mt-12 tracking-[0.4em] font-black uppercase">
                        El Sigilo de la Transmutación Perpetua
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch mb-32">
                    {/* THE LAW */}
                    <div className="flex flex-col justify-center p-10 bg-gray-900/40 rounded-[3rem] border border-gray-800/50 hover:border-yellow-500/20 transition-all duration-500">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-8 h-[2px] bg-yellow-500"></div>
                            <h3 className="text-sm font-black text-yellow-500 uppercase tracking-widest">LA LEY DEL ORO</h3>
                        </div>
                        <p className="text-4xl md:text-6xl font-black text-white leading-[0.9] italic mb-8">
                            "Danza tu <span className="text-gray-500">Caos</span>, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 drop-shadow-sm">Honra tu Origen</span>."
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed font-medium">
                            No reprimas tu naturaleza <strong className="text-white italic">Chola</strong> (caos), ni finjas tu naturaleza <strong className="text-white italic">Fresa</strong> (orden).
                            La maestría reside en la tensión eléctrica entre ambas.
                        </p>
                    </div>

                    {/* THE VALUE */}
                    <div className="flex flex-col justify-center p-10 bg-gray-900/40 rounded-[3rem] border border-gray-800/50 hover:border-green-500/20 transition-all duration-500">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-8 h-[2px] bg-green-500"></div>
                            <h3 className="text-sm font-black text-green-500 uppercase tracking-widest">LA MONEDA DE CAMBIO</h3>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-3xl font-black text-white mb-4 flex items-center">
                                <i className="fa-solid fa-fire text-yellow-500 mr-3 text-2xl"></i> Fuego Transformado
                            </h4>
                            <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                Aquí no intercambiamos tiempo por dinero. Intercambiamos <strong className="text-green-400">"Cátedras de Zapateado"</strong>:
                                lecciones de vida extraídas del fuego de la experiencia y cristalizadas en sabiduría táctica.
                            </p>
                        </div>
                    </div>
                </div>

                {/* THE ANTI-ARCHETYPE */}
                <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-md border border-gray-800 p-12 rounded-[3.5rem] relative overflow-hidden group hover:border-red-500/30 transition-all duration-700">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.02] text-[12rem] text-red-500 group-hover:opacity-[0.05] transition-opacity">
                        <i className="fa-solid fa-ghost"></i>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                        <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center text-4xl text-red-500/40 group-hover:text-red-500 transition-colors">
                            <i className="fa-solid fa-user-slash"></i>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-black text-red-500 uppercase tracking-[0.3em] mb-4">
                                El Espejo Negro
                            </h3>
                            <h4 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tighter">
                                El Autómata Pulido
                            </h4>
                            <p className="text-gray-400 text-lg leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                                El némesis de la Chalamandra. Aquel que pule la forma pero vacía el contenido.
                                Es la perfección estética sin alma o el caos destructivo sin propósito.
                                El Autómata busca aprobación; la Chalamandra busca <strong className="text-white">Verdad</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* THE OATH */}
                <div className="mt-32 text-center">
                    {!isOathTaken ? (
                        <button
                            onClick={() => setIsOathTaken(true)}
                            className="group relative px-16 py-6 overflow-hidden bg-white text-black font-black uppercase tracking-[0.4em] text-sm hover:text-white transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-yellow-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                            <span className="relative z-10">Jurar el Código</span>
                        </button>
                    ) : (
                        <div className="animate-[fade-in-up_1s_ease-out]">
                            <div className="text-5xl text-yellow-500 mb-6">
                                <i className="fa-solid fa-infinity"></i>
                            </div>
                            <p className="text-3xl font-black text-white mb-4 uppercase italic tracking-tighter">Juramento Aceptado</p>
                            <p className="text-gray-500 font-bold tracking-widest uppercase text-xs">El Proyecto Imposible te espera en la fase de Escalabilidad.</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default TheCodex;
