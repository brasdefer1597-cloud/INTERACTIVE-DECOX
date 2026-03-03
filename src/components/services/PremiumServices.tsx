import React from 'react';

interface PremiumServicesProps {
    onServiceClick: (service: 'discovery' | 'magistral' | 'total') => void;
    playUIClick: () => void;
}

const PremiumServices: React.FC<PremiumServicesProps> = ({ onServiceClick, playUIClick }) => {
    return (
        <section className="py-32 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-yellow-500 font-black tracking-[0.5em] text-[0.6rem] uppercase mb-4 block">
                        Aceleración de Resultados
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
                        Servicios Premium
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Discovery Session */}
                    <div className="group bg-gray-900/40 backdrop-blur-md p-10 rounded-[3rem] border border-gray-800 hover:border-yellow-500/20 transition-all duration-500 flex flex-col">
                        <div className="mb-8">
                            <span className="text-[0.6rem] font-black text-yellow-500/50 uppercase tracking-[0.2em] mb-2 block">Inmersión Inicial</span>
                            <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4">Sesión Descubrimiento</h3>
                            <div className="flex items-baseline space-x-2 mb-6">
                                <span className="text-5xl font-black text-white italic">7</span>
                                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">USD</span>
                            </div>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                Una inmersión táctica de 60-90 minutos para diagnosticar tu arquetipo y trazar tu mapa de ruta inicial.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <button
                                onClick={() => { playUIClick(); onServiceClick('discovery'); }}
                                className="w-full py-5 bg-gray-800 group-hover:bg-yellow-500 text-gray-400 group-hover:text-black font-black uppercase tracking-widest text-xs rounded-2xl transition-all"
                            >
                                Iniciar Protocolo
                            </button>
                        </div>
                    </div>

                    {/* Kit Magistral */}
                    <div className="group relative bg-white p-10 rounded-[3rem] flex flex-col shadow-2xl shadow-white/5 transform lg:scale-105 z-10 transition-all duration-500">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-black text-[0.6rem] font-black uppercase tracking-[0.2em] rounded-full">
                            Más Solicitado
                        </div>
                        <div className="mb-8">
                            <span className="text-[0.6rem] font-black text-black/40 uppercase tracking-[0.2em] mb-2 block">Implementación Táctica</span>
                            <h3 className="text-3xl font-black text-black italic uppercase tracking-tighter mb-4">Kit Magistral</h3>
                            <div className="flex items-baseline space-x-2 mb-6">
                                <span className="text-5xl font-black text-black italic">97</span>
                                <span className="text-sm font-bold text-black/40 uppercase tracking-widest">USD</span>
                            </div>
                            <p className="text-black/70 font-medium leading-relaxed">
                                Un mes de entrenamiento intensivo. 4 sesiones para instalar tus hacks fundamentales y soporte táctico directo.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <button
                                onClick={() => { playUIClick(); onServiceClick('magistral'); }}
                                className="w-full py-5 bg-black text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-yellow-600 transition-all"
                            >
                                Desbloquear Kit
                            </button>
                        </div>
                    </div>

                    {/* Total Transformation */}
                    <div className="group bg-gray-900/40 backdrop-blur-md p-10 rounded-[3rem] border border-gray-800 hover:border-pink-500/20 transition-all duration-500 flex flex-col">
                        <div className="mb-8">
                            <span className="text-[0.6rem] font-black text-pink-500/50 uppercase tracking-[0.2em] mb-2 block">Reingeniería Completa</span>
                            <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4">Transformación Total</h3>
                            <div className="flex items-baseline space-x-2 mb-6">
                                <span className="text-5xl font-black text-white italic">500+</span>
                                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">USD</span>
                            </div>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                Programa de 3 a 6 meses para la reconstrucción total de tu sistema operativo mental. Solo por aplicación.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <button
                                onClick={() => { playUIClick(); onServiceClick('total'); }}
                                className="w-full py-5 bg-gray-800 group-hover:bg-pink-600 text-gray-400 group-hover:text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all"
                            >
                                Aplicar Ahora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumServices;
