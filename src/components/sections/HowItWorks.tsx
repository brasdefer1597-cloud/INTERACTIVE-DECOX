import React from 'react';

const steps = [
    {
        number: "01",
        title: "Diagnosticar",
        desc: "Realiza el test para decodificar tu Arquetipo Cognitivo fundamental. Este es el punto de partida para entender tu sistema operativo interno.",
        icon: "fa-solid fa-dna"
    },
    {
        number: "02",
        title: "Dominar",
        desc: "Activa y completa los Hacks Magistrales. Cada hack es un protocolo diseñado para instalar una nueva capacidad en tu stack mental.",
        icon: "fa-solid fa-bolt"
    },
    {
        number: "03",
        title: "Diseñar",
        desc: "Utiliza el Oráculo para recibir directivas estratégicas de la IA y diseña tu realidad con las nuevas herramientas que has adquirido.",
        icon: "fa-solid fa-chess-king"
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-32 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-yellow-500 font-black tracking-[0.5em] text-[0.6rem] uppercase mb-4 block">
                        La Metodología
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
                        El Protocolo de 3 Fases
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative">
                            {/* Line connecting steps (hidden on mobile) */}
                            {index < 2 && (
                                <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-gray-800 to-transparent z-0"></div>
                            )}

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-gray-900 border-2 border-gray-800 flex items-center justify-center mb-8 group-hover:border-yellow-500 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                                    <i className={`${step.icon} text-3xl text-gray-700 group-hover:text-yellow-500 transition-colors`}></i>
                                </div>
                                <span className="text-sm font-black text-gray-600 mb-2 uppercase tracking-widest">{step.number}</span>
                                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-6">{step.title}</h3>
                                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
