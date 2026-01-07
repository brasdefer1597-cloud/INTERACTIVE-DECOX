import React, { useEffect, useRef } from 'react';

const TotalTransformationSection: React.FC = () => {
    const benefitsListRef = useRef<HTMLUListElement>(null);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // We use a slight delay to ensure the modal is fully rendered before starting animations.
        const timer = setTimeout(() => {
            componentRef.current?.classList.add('visible');
        }, 100);

        const observerOptions = {
            root: document.querySelector('.modal-content'), // Observe within the modal scroll area
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, index * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const benefitItems = benefitsListRef.current?.querySelectorAll('.benefit-item');
        if (benefitItems) {
            benefitItems.forEach(el => observer.observe(el));
        }
        
        return () => {
            clearTimeout(timer);
            if (benefitItems) {
                benefitItems.forEach(el => observer.unobserve(el));
            }
        };

    }, []);

    return (
        <div ref={componentRef} id="transformacion-total-page" className="fade-in opacity-0">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-4 text-purple-400 tracking-tight premium-glow glitch" data-text="TRANSFORMACIÓN TOTAL">
                TRANSFORMACIÓN TOTAL
            </h1>
            <p className="text-xl md:text-2xl font-bold text-center mb-8 text-white leading-relaxed">
                Nivel Maestro & Autoridad Absoluta
            </p>

            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 my-8">
                <p className="text-md md:text-lg text-gray-300 mb-8 leading-relaxed text-center">
                    La <strong>Transformación Total</strong> no es un programa; es la <strong>reingeniería completa de tu sistema operativo cognitivo</strong> para el dominio perpetuo. Este es el nivel maestro para quienes buscan la autoridad absoluta sobre sus patrones, no solo para hackearlos, sino para dominarlos e invocar su máximo potencial.
                </p>

                <h3 className="text-2xl font-black text-white mt-8 mb-6 text-center">
                    ¿QUÉ INCLUYE ESTE PROTOCOLO MAESTRO?
                </h3>
                
                <ul ref={benefitsListRef} className="space-y-4 text-left text-lg text-gray-200">
                    <li className="benefit-item flex items-start bg-gray-700 p-4 rounded-lg border-l-4 border-white shadow-md">
                        <span className="text-white mr-3 mt-1 text-xl benefit-icon-spin"><i className="fas fa-microchip"></i></span>
                        <span><strong className="text-white">Reingeniería completa del S.O. Cognitivo:</strong> Tu cerebro optimizado para el éxito.</span>
                    </li>
                    <li className="benefit-item flex items-start bg-gray-700 p-4 rounded-lg border-l-4 border-yellow-400 shadow-md">
                        <span className="text-yellow-400 mr-3 mt-1 text-xl benefit-icon-spin"><i className="fas fa-crown"></i></span>
                        <span><strong className="text-yellow-400">Dominio perpetuo de los 7 Hacks Magistrales:</strong> Elección consciente de tu arquetipo dominante.</span>
                    </li>
                    <li className="benefit-item flex items-start bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500 shadow-md">
                        <span className="text-purple-400 mr-3 mt-1 text-xl benefit-icon-spin"><i className="fas fa-users"></i></span>
                        <span><strong className="text-purple-400">Acceso al Círculo Íntimo (Mastermind):</strong> Entorno de élite con feedback directo.</span>
                    </li>
                    <li className="benefit-item flex items-start bg-gray-700 p-4 rounded-lg border-l-4 border-red-500 shadow-md">
                        <span className="text-red-400 mr-3 mt-1 text-xl benefit-icon-spin"><i className="fas fa-fire-alt"></i></span>
                        <span><strong className="text-red-400">Protocolo de Dominio del Caos:</strong> Metodología para convertir crisis en crecimiento.</span>
                    </li>
                    <li className="benefit-item flex items-start bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500 shadow-md">
                        <span className="text-blue-400 mr-3 mt-1 text-xl benefit-icon-spin"><i className="fas fa-headset"></i></span>
                        <span><strong className="text-blue-400">Soporte de Nivel Arquitecto 24/7:</strong> Comunicación prioritaria ineludible.</span>
                    </li>
                </ul>
            </div>

            <div className="text-center mt-8 p-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-2xl border-2 border-purple-500">
                <p className="text-xl font-black text-white mb-4">
                    <i className="fas fa-exclamation-triangle mr-2"></i> IMPORTANTE: PROGRAMA DE APLICACIÓN
                </p>
                <p className="text-lg text-gray-300 mb-6">
                    Este 'producto' representa el primer paso en el proceso de aplicación. La <strong>Sesión Descubrimiento ($27 USD)</strong> es mandatoria para realizar un diagnóstico maestro y determinar si cumples con el nivel de compromiso requerido.
                </p>

                <a href="https://ko-fi.com/s/e85f9cd5e1" target="_blank" rel="noopener noreferrer" className="w-full inline-block px-12 py-5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-black rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all transform pulse-glow">
                    PASO 1: APLICAR CON DIAGNÓSTICO MAESTRO ($27 USD)
                </a>
                 <p className="text-md text-gray-300 mt-4 font-bold">
                    El valor de tu diagnóstico se acreditará a tu inversión final si eres aceptado.
                </p>
            </div>
        </div>
    );
};

export default TotalTransformationSection;