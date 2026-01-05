import React, { useEffect, useRef } from 'react';

const DiscoverySessionPage: React.FC = () => {
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            root: document.querySelector('.modal-content'), // Observe within the modal scroll area
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
        <div ref={componentRef} className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-6 text-yellow-300 tracking-tight reveal-on-scroll">
                Tu primer paso para desmantelar tus patrones de inercia y activar tu verdadera potencia.
            </h2>
            <p className="text-xl md:text-2xl font-bold text-center mb-8 text-white leading-relaxed reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
                Una Decodificación Táctica de 60 minutos para darte <span className="text-green-400">claridad instantánea</span> y una estrategia accionable. Garantizado.
            </p>

            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 reveal-on-scroll my-10" style={{ transitionDelay: '0.4s' }}>

                <div className="mb-8">
                    <h4 className="text-xl md:text-2xl font-black text-white mb-4 flex items-center reveal-on-scroll">
                        <span className="mr-3 text-2xl"><i className="fa-solid fa-bullseye"></i></span> ¿Qué conseguirás en esta sesión?
                    </h4>
                    <ul className="space-y-4 text-left text-base text-gray-200">
                        <li className="flex items-start reveal-on-scroll p-3 bg-gray-900 rounded-lg">
                             <i className="fa-solid fa-check text-green-400 mr-3 mt-1"></i>
                            <span><strong className="text-green-400">Decodificación de Arquetipo:</strong> Identificaremos tu arquetipo dominante (El Arquitecto, El Alquimista, El Explorador) y el código invisible que te frena.</span>
                        </li>
                        <li className="flex items-start reveal-on-scroll p-3 bg-gray-900 rounded-lg" style={{ transitionDelay: '0.2s' }}>
                            <i className="fa-solid fa-check text-green-400 mr-3 mt-1"></i>
                            <span><strong className="text-green-400">Estrategia de Impacto Inmediato:</strong> Recibirás al menos un Hack Magistral que puedes implementar INMEDIATAMENTE para ver resultados.</span>
                        </li>
                         <li className="flex items-start reveal-on-scroll p-3 bg-gray-900 rounded-lg" style={{ transitionDelay: '0.4s' }}>
                            <i className="fa-solid fa-check text-green-400 mr-3 mt-1"></i>
                            <span><strong className="text-green-400">Tu Plan de Ataque Inicial:</strong> Conocerás el mapa exacto para desbloquear los Hacks Magistrales que resuenan con tu código cognitivo único.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-yellow-900/50 p-4 rounded-xl border-l-4 border-yellow-400 shadow-lg mb-8 reveal-on-scroll">
                    <h4 className="text-lg font-black text-yellow-400 mb-2"><i className="fa-solid fa-shield-halved mr-2"></i> GARANTÍA DE VALOR INIGUALABLE</h4>
                    <p className="text-base text-gray-200 leading-relaxed font-bold">
                        Si al terminar la sesión no tienes claridad sobre tu Arquetipo Dominante y una estrategia aplicable, te devuelvo el 100% de tu inversión y TE QUEDAS CON EL DIAGNÓSTICO. Sin preguntas.
                    </p>
                </div>

                <div className="text-center bg-gray-700 p-6 rounded-2xl shadow-xl border border-gray-600 reveal-on-scroll">
                    <p className="text-lg text-yellow-300 font-bold mb-2">INVERSIÓN ÚNICA:</p>
                    <p className="text-4xl font-black text-green-400 mb-4 premium-glow">$27 USD</p>
                    <a href="https://ko-fi.com/s/e85f9cd5e1" target="_blank" rel="noopener noreferrer" className="w-full inline-block px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-black rounded-xl text-lg shadow-2xl transition-all pulse-glow btn-dynamic">
                        🚀 ¡QUIERO MI DIAGNÓSTICO AHORA!
                    </a>
                    <p className="text-sm text-gray-400 mt-4">Recibirás un email con instrucciones para agendar tu sesión inmediatamente después de la compra.</p>
                </div>
            </div>
        </div>
    );
};

export default DiscoverySessionPage;