import React from 'react';

const testimonialsData = [
    {
        quote: "Chalamandra no me dio respuestas, me dio un nuevo sistema para generarlas. Pasé de reaccionar a mi negocio a diseñarlo.",
        name: "CEO de Tech Startup",
        archetype: "El Arquitecto"
    },
    {
        quote: "Pensaba que necesitaba más disciplina. Lo que necesitaba era un nuevo sistema operativo. El 'Hack de Alquimia Emocional' cambió el juego por completo.",
        name: "Artista y Creadora",
        archetype: "El Alquimista"
    },
    {
        quote: "Este sistema es para aquellos que están cansados de los consejos genéricos. Es la diferencia entre leer un mapa y tener un GPS satelital en tiempo real.",
        name: "Consultor Estratégico",
        archetype: "El Explorador"
    }
];

const Testimonials = () => {
    return (
        <section className="py-32 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-yellow-500 font-black tracking-[0.5em] text-[0.6rem] uppercase mb-4 block">
                        Resultados Reales
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
                        Voces del 1%
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <blockquote key={index} className="group bg-gray-900/30 backdrop-blur-md p-10 rounded-[3rem] border border-gray-800 hover:border-yellow-500/20 transition-all duration-500 relative flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-6xl text-white group-hover:scale-110 transition-transform">
                                <i className="fa-solid fa-quote-right"></i>
                            </div>

                            <p className="text-xl md:text-2xl italic text-gray-300 leading-relaxed font-medium mb-12 relative z-10">
                                "{testimonial.quote}"
                            </p>

                            <footer className="relative z-10 pt-8 border-t border-gray-800">
                                <p className="font-black text-white uppercase italic tracking-tighter text-lg">{testimonial.name}</p>
                                <p className="text-yellow-500/60 font-black text-[0.6rem] uppercase tracking-widest mt-1">Arquetipo: {testimonial.archetype}</p>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
