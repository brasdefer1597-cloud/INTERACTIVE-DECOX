import React from 'react';

const CertifiedTech = () => (
     <section className="py-20 px-6 max-w-6xl mx-auto border-t border-gray-700">
        <h2 className="text-4xl font-black text-center mb-6 text-white">
            <i className="fa-solid fa-rocket mr-3"></i> TECNOLOGÍA CERTIFICADA
        </h2>
        <p className="text-xl text-center mb-12 text-gray-300 font-semibold italic">
            Metodologías validadas con infraestructura de vanguardia y análisis predictivo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-l-4 border-green-400 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4"><i className="fa-solid fa-brain mr-2"></i> DECODIFICACIÓN COGNITIVA</h3>
                <p className="text-gray-300 text-lg">Metodologías validadas en psicología de patrones de comportamiento y sistemas de creencias limitantes.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-l-4 border-blue-400 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4"><i className="fa-solid fa-cloud mr-2"></i> ARQUITECTURA CLOUD</h3>
                <p className="text-gray-300 text-lg">Infraestructura escalable para el seguimiento de métricas personales y análisis de data fría.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-l-4 border-red-400 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4"><i className="fa-solid fa-chart-pie mr-2"></i> ANÁLISIS DE PATRONES</h3>
                <p className="text-gray-300 text-lg">Sistemas avanzados de reconocimiento y decodificación de patrones fractales en comportamiento humano (SRAP).</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-l-4 border-yellow-400 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4"><i className="fa-solid fa-bolt mr-2"></i> OPTIMIZACIÓN COGNITIVA</h3>
                <p className="text-gray-300 text-lg">Protocolos de aceleración mental y optimización de procesos de toma de decisiones en entornos de alta presión.</p>
            </div>
        </div>
    </section>
);

export default React.memo(CertifiedTech);
