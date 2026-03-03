import React, { useState } from 'react';

interface SrapRitualProps {
    onActivate: () => void;
    playUIClick: () => void;
}

const SrapRitual: React.FC<SrapRitualProps> = ({ onActivate, playUIClick }) => {
    const [isPulsing, setIsPulsing] = useState(false);

    return (
        <section className="py-32 px-6 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-16">
                    <span className="text-purple-500 font-black tracking-[0.4em] text-[0.6rem] uppercase mb-4 block">
                        Activación de Frecuencia
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
                        Núcleo SRAP™
                    </h2>
                </div>

                <div className="bg-gray-900/40 backdrop-blur-md p-10 md:p-16 rounded-[3.5rem] border border-gray-800 shadow-2xl relative overflow-hidden">
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
                        <strong className="text-white italic">Sincroniza Ritmos en Acción Presente.</strong> El protocolo que activa tus poderes cognitivos y filtra el caos en claridad táctica inmediata.
                    </p>

                    <div className="flex justify-center mb-12">
                        <div className="relative">
                            <div className={`absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl transition-opacity duration-1000 ${isPulsing ? 'opacity-40 animate-pulse' : 'opacity-0'}`}></div>
                            <div className={`relative w-24 h-24 rounded-full border-2 border-gray-800 flex items-center justify-center transition-all duration-700 ${isPulsing ? 'border-purple-500 scale-110 shadow-[0_0_30px_rgba(168,85,247,0.3)]' : ''}`}>
                                <i className={`fa-solid fa-sync-alt text-3xl ${isPulsing ? 'text-purple-500 fa-spin' : 'text-gray-700'}`}></i>
                            </div>
                        </div>
                    </div>

                    <button
                        className="group relative w-full md:w-auto px-12 py-6 overflow-hidden bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:text-white transition-colors duration-500 rounded-2xl"
                        onClick={() => {
                            playUIClick();
                            onActivate();
                            setIsPulsing(true);
                            setTimeout(() => setIsPulsing(false), 5000);
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                        <span className="relative z-10 flex items-center justify-center">
                            <i className="fa-solid fa-bolt mr-3 text-xs"></i>
                            Activar Ritual SRAP
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SrapRitual;
