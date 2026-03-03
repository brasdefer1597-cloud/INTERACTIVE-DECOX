import React from 'react';

const techData = [
    {
        title: "Decodificación Cognitiva",
        icon: "fa-solid fa-brain",
        desc: "Metodologías validadas en psicología de patrones de comportamiento y sistemas de creencias."
    },
    {
        title: "Arquitectura Cloud",
        icon: "fa-solid fa-cloud",
        desc: "Infraestructura escalable para el seguimiento de métricas personales y análisis de data fría."
    },
    {
        title: "Análisis de Patrones",
        icon: "fa-solid fa-fingerprint",
        desc: "Sistemas avanzados de reconocimiento de patrones fractales en comportamiento humano (SRAP)."
    },
    {
        title: "Optimización Mental",
        icon: "fa-solid fa-bolt",
        desc: "Protocolos de aceleración mental y optimización de toma de decisiones en entornos de alta presión."
    }
];

const CertifiedTech: React.FC = () => {
    return (
        <section className="py-32 px-6 bg-black border-y border-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-gray-500 font-black tracking-[0.5em] text-[0.6rem] uppercase mb-4 block">
                        Infraestructura Magistral
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
                        Tecnología Certificada
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {techData.map((tech, index) => (
                        <div key={index} className="group flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-3xl bg-gray-900 border border-gray-800 flex items-center justify-center text-3xl text-gray-700 group-hover:text-yellow-500 group-hover:border-yellow-500/30 transition-all duration-500 mb-8 transform group-hover:scale-110">
                                <i className={tech.icon}></i>
                            </div>
                            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-4">{tech.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                {tech.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertifiedTech;
