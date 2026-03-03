import React from 'react';

const Introduction: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <div className="mb-8 inline-flex items-center space-x-3 px-4 py-2 bg-gray-900/50 backdrop-blur-md rounded-full border border-gray-800">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                    </span>
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-gray-400">Sistema Operativo v2.5 Activo</span>
                </div>

                <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter italic uppercase leading-[0.85]">
                    Danza <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-white to-gray-500">tu Caos,</span><br />
                    Honra tu Origen
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                    No reprimas tu naturaleza. Transmuta la fricción en combustible táctico. El protocolo definitivo para el 1% que diseña la realidad.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button
                        onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-12 py-6 overflow-hidden bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:text-white transition-colors duration-500 rounded-2xl w-full md:w-auto"
                    >
                        <div className="absolute inset-0 bg-yellow-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                        <span className="relative z-10 flex items-center">
                            Iniciar Decodificación
                            <i className="fa-solid fa-arrow-right ml-3 text-xs"></i>
                        </span>
                    </button>
                    <a
                        href="#how-it-works"
                        className="px-12 py-6 bg-transparent border-2 border-gray-800 text-gray-400 font-black uppercase tracking-[0.2em] text-sm hover:border-gray-600 hover:text-white transition-all rounded-2xl w-full md:w-auto"
                    >
                        Ver Protocolo
                    </a>
                </div>

                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-white mb-2">99%</span>
                        <span className="text-[0.55rem] font-bold uppercase tracking-widest text-gray-500 text-center">Filtro de Ruido</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-white mb-2">300ms</span>
                        <span className="text-[0.55rem] font-bold uppercase tracking-widest text-gray-500 text-center">Latencia Cognitiva</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-white mb-2">∞</span>
                        <span className="text-[0.55rem] font-bold uppercase tracking-widest text-gray-500 text-center">Escalabilidad Fractal</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-white mb-2">100%</span>
                        <span className="text-[0.55rem] font-bold uppercase tracking-widest text-gray-500 text-center">Ejecución Táctica</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
};

export default Introduction;
