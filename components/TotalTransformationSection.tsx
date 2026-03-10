import React, { useEffect, useRef } from 'react';

const TotalTransformationSection: React.FC = () => {
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            componentRef.current?.classList.add('visible');
        }, 100);

        const observerOptions = {
            root: document.querySelector('.modal-content'),
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = componentRef.current?.querySelectorAll('.reveal-item');
        if (revealElements) {
            revealElements.forEach(el => observer.observe(el));
        }
        
        return () => {
            clearTimeout(timer);
            if (revealElements) {
                revealElements.forEach(el => observer.unobserve(el));
            }
        };

    }, []);

    return (
        <div ref={componentRef} className="space-y-20 pb-12 opacity-0 transition-opacity duration-1000">
            {/* Hero Section */}
            <div className="text-center space-y-6">
                <div className="inline-block px-4 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-xs font-black tracking-[0.3em] uppercase mb-4">
                    Protocolo de Élite
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                    TRANSFORMACIÓN <span className="text-pink-500">TOTAL</span>
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-gray-400 max-w-3xl mx-auto">
                    La reingeniería completa de tu sistema operativo para el <span className="text-white">Dominio Perpetuo</span>.
                </p>
            </div>

            {/* The Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-item">
                <div className="space-y-6">
                    <h3 className="text-3xl font-black text-white">NO ES UN CURSO. ES UNA METAMORFOSIS.</h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        La mayoría de los programas te enseñan a "hacer" cosas. Nosotros te enseñamos a **ser** el arquitecto de tu propia realidad. Durante 3 a 6 meses, trabajamos en las capas más profundas de tu arquitectura cognitiva para eliminar la fricción y maximizar la potencia.
                    </p>
                    <div className="p-6 bg-pink-500/5 border-l-4 border-pink-500 rounded-r-2xl italic text-pink-100">
                        "El dominio no es un destino, es un estado de coherencia absoluta entre tu intención y tu ejecución."
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full blur-3xl absolute inset-0 animate-pulse"></div>
                    <div className="relative bg-gray-900 border border-white/10 p-8 rounded-3xl shadow-2xl">
                        <h4 className="text-xl font-black text-white mb-6 uppercase tracking-widest">Los 3 Pilares del Dominio:</h4>
                        <ul className="space-y-6">
                            {[
                                { t: 'Soberanía Cognitiva', d: 'Control total sobre tus sesgos y procesos de pensamiento.' },
                                { t: 'Arquitectura de Hábitos', d: 'Sistemas automáticos que trabajan para tu visión 24/7.' },
                                { t: 'Dominio del Caos', d: 'Capacidad de transmutar cualquier crisis en una ventaja estratégica.' }
                            ].map((p, i) => (
                                <li key={i} className="flex items-start space-x-4">
                                    <span className="text-pink-500 font-black text-xl">0{i+1}</span>
                                    <div>
                                        <p className="font-bold text-white">{p.t}</p>
                                        <p className="text-sm text-gray-500">{p.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* The Journey Timeline */}
            <div className="space-y-12 reveal-item">
                <h3 className="text-3xl font-black text-center text-white">EL VIAJE DEL ARQUITECTO</h3>
                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-500 to-transparent hidden md:block"></div>
                    <div className="space-y-12">
                        {[
                            { m: 'Mes 1', t: 'Deconstrucción', d: 'Identificamos y aislamos los virus cognitivos que han limitado tu crecimiento por años.' },
                            { m: 'Mes 2', t: 'Reingeniería', d: 'Diseñamos e instalamos los nuevos protocolos de pensamiento y acción.' },
                            { m: 'Mes 3', t: 'Consolidación', d: 'Pruebas de estrés en entornos reales. Ajustes de precisión quirúrgica.' },
                            { m: 'Mes 4+', t: 'Soberanía', d: 'Mantenimiento del sistema y expansión hacia nuevos territorios de influencia.' }
                        ].map((step, i) => (
                            <div key={i} className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 p-6 text-center md:text-left">
                                    <div className={`inline-block px-4 py-1 rounded-full bg-gray-800 text-pink-400 text-xs font-black mb-2`}>{step.m}</div>
                                    <h4 className="text-xl font-black text-white">{step.t}</h4>
                                    <p className="text-gray-400 text-sm mt-2">{step.d}</p>
                                </div>
                                <div className="w-4 h-4 bg-pink-500 rounded-full border-4 border-black z-10 my-4 md:my-0"></div>
                                <div className="flex-1"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Application Note */}
            <div className="bg-gradient-to-r from-gray-900 to-black p-10 rounded-3xl border border-pink-500/20 text-center space-y-8 reveal-item">
                <h3 className="text-3xl font-black text-white">PROGRAMA EXCLUSIVO POR APLICACIÓN</h3>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    No aceptamos a cualquiera. Buscamos individuos con un compromiso inquebrantable con su propia evolución. La **Sesión de Descubrimiento** es el primer filtro obligatorio.
                </p>
                <div className="space-y-6">
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Inversión Base</p>
                    <p className="text-6xl font-black text-white">$1500+ <span className="text-xl text-gray-400">USD</span></p>
                    <a href="https://ko-fi.com/s/e85f9cd5e1" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-pink-600 text-white font-black rounded-2xl text-xl shadow-[0_0_50px_rgba(219,39,119,0.3)] hover:scale-105 transition-all pulse-glow">
                        INICIAR PROCESO DE APLICACIÓN ($27 USD)
                    </a>
                    <p className="text-xs text-gray-400 italic">El costo del diagnóstico se acredita a tu inversión final.</p>
                </div>
            </div>
        </div>
    );
};

export default TotalTransformationSection;
