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
        <section className="py-20 px-6 bg-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-black text-white mb-12">
                     <i className="fa-solid fa-comment-dots mr-3"></i> VOCES DEL 1%
                </h2>
                <div className="space-y-12">
                    {testimonialsData.map((testimonial, index) => (
                        <blockquote key={index} className="bg-black/30 p-8 rounded-2xl border border-gray-700 max-w-3xl mx-auto">
                            <p className="text-2xl italic text-white leading-relaxed">"{testimonial.quote}"</p>
                            <footer className="mt-6">
                                <p className="font-bold text-lg text-yellow-300">{testimonial.name}</p>
                                <p className="text-gray-400">Arquetipo: {testimonial.archetype}</p>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
