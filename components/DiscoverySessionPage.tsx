import React, { useEffect, useRef } from 'react';

const DiscoverySessionPage: React.FC = () => {
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            root: document.querySelector('.modal-content'),
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elementsToReveal = componentRef.current?.querySelectorAll('.reveal-on-scroll');
        if (elementsToReveal) {
            elementsToReveal.forEach(el => observer.observe(el));
        }
        
        return () => {
            if (elementsToReveal) {
                elementsToReveal.forEach(el => observer.unobserve(el));
            }
        };
    }, []);

    return (
        <div ref={componentRef} className="space-y-16 pb-12">
            {/* Hero Section */}
            <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-yellow-300 tracking-tighter reveal-on-scroll">
                    DECODIFICACIÓN MAESTRA
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-white max-w-3xl mx-auto leading-tight reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
                    60 minutos para desmantelar tu inercia y activar tu <span className="text-green-400">Ventaja Injusta</span>.
                </p>
            </div>

            {/* The Problem Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center reveal-on-scroll">
                <div className="space-y-4">
                    <h3 className="text-2xl font-black text-red-400 uppercase tracking-widest">El Síntoma:</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Sientes que estás operando al 20% de tu capacidad. Tienes las herramientas, pero el "Sistema Operativo" de tu mente está desactualizado, lleno de bugs cognitivos y patrones de autosabotaje que no puedes ver.
                    </p>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl italic text-red-200">
                    "La mayoría de las personas no fracasan por falta de talento, sino por operar bajo un mapa de la realidad que ya no existe."
                </div>
            </div>

            {/* The Methodology Section */}
            <div className="space-y-8">
                <h3 className="text-3xl font-black text-center text-white reveal-on-scroll">LA METODOLOGÍA CHALAMANDRA</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                        { title: 'DIAGNÓSTICO', icon: 'fa-magnifying-glass-chart', desc: 'Escaneamos tus sesgos cognitivos y detectamos tu arquetipo dominante.' },
                        { title: 'DECODIFICACIÓN', icon: 'fa-code-branch', desc: 'Identificamos el "código muerto" que genera fricción en tu toma de decisiones.' },
                        { title: 'ACTIVACIÓN', icon: 'fa-bolt-lightning', desc: 'Instalamos tu primer Hack Magistral para resultados en menos de 24h.' }
                    ].map((step, i) => (
                        <div key={i} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 text-center reveal-on-scroll" style={{ transitionDelay: `${i * 0.2}s` }}>
                            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center text-2xl text-yellow-400 mx-auto mb-4">
                                <i className={`fa-solid ${step.icon}`}></i>
                            </div>
                            <h4 className="font-black text-white mb-2">{step.title}</h4>
                            <p className="text-sm text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* What you get Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl reveal-on-scroll">
                <h4 className="text-2xl font-black text-green-400 mb-8 flex items-center">
                    <i className="fa-solid fa-box-open mr-4"></i> ENTREGABLES DE LA SESIÓN:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { t: 'Reporte de Arquetipo', d: 'Un PDF detallado con tus fortalezas y sombras cognitivas.' },
                        { t: 'Mapa de Ruta Táctico', d: 'Los 3 hacks prioritarios para tu situación actual.' },
                        { t: 'Grabación de la Sesión', d: 'Para que puedas decodificar cada palabra a tu ritmo.' },
                        { t: 'Acceso al Oráculo', d: 'Soporte vía email para dudas sobre tu primer hack.' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-4 p-4 bg-black/20 rounded-xl">
                            <i className="fa-solid fa-circle-check text-green-500 mt-1"></i>
                            <div>
                                <h5 className="font-bold text-white">{item.t}</h5>
                                <p className="text-sm text-gray-400">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Guarantee & CTA */}
            <div className="space-y-8 text-center">
                <div className="inline-block bg-yellow-900/30 border border-yellow-500/30 p-6 rounded-2xl max-w-2xl reveal-on-scroll">
                    <p className="text-yellow-200 font-bold italic">
                        "Si al minuto 45 sientes que no hemos aportado un valor 10x superior a tu inversión, detenemos la sesión y te devuelvo tu dinero. Sin preguntas. Mi tiempo es tan valioso como el tuyo."
                    </p>
                </div>

                <div className="reveal-on-scroll">
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Inversión en tu Evolución</p>
                    <p className="text-6xl font-black text-white mb-6">$27 <span className="text-xl text-gray-400">USD</span></p>
                    <a href="https://ko-fi.com/s/e85f9cd5e1" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-yellow-500 text-black font-black rounded-2xl text-xl shadow-[0_0_50px_rgba(234,179,8,0.3)] hover:scale-105 transition-all pulse-glow">
                        RESERVAR MI DECODIFICACIÓN
                    </a>
                    <p className="text-xs text-gray-500 mt-6">Cupos limitados a 5 sesiones por semana para garantizar profundidad.</p>
                </div>
            </div>
        </div>
    );
};

export default DiscoverySessionPage;
