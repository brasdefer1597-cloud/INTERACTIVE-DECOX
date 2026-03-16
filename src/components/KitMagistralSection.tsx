import React from 'react';

interface KitMagistralSectionProps {
    onShowDiscovery: () => void;
}

const KitMagistralSection: React.FC<KitMagistralSectionProps> = ({ onShowDiscovery }) => {
    return (
        <div className="text-white space-y-16 pb-12">
            {/* Header */}
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-purple-400 tracking-tighter">
                    KIT MAGISTRAL
                </h2>
                <p className="text-xl md:text-2xl font-bold text-gray-300 max-w-2xl mx-auto">
                    30 días de inmersión para instalar tu nuevo <span className="text-purple-300">Sistema Operativo Cognitivo</span>.
                </p>
            </div>

            {/* The Concept */}
            <div className="bg-purple-900/20 border border-purple-500/30 p-8 rounded-3xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-200 text-center italic">
                    "Saber qué hacer es solo el 10% del éxito. El 90% restante es la **instalación** de ese conocimiento en tu comportamiento diario. El Kit Magistral es el proceso de instalación."
                </p>
            </div>

            {/* The 4-Week Roadmap */}
            <div className="space-y-8">
                <h3 className="text-2xl font-black text-center uppercase tracking-widest text-white">EL MAPA DE IMPLEMENTACIÓN</h3>
                <div className="space-y-4">
                    {[
                        { week: '01', title: 'CALIBRACIÓN', desc: 'Alineamos tus objetivos con tu arquetipo y seleccionamos los 4 hacks críticos.' },
                        { week: '02', title: 'INSTALACIÓN', desc: 'Ejecutamos los primeros 2 hacks. Monitorizamos la resistencia al cambio.' },
                        { week: '03', title: 'OPTIMIZACIÓN', desc: 'Ajustamos la ejecución. Instalamos los 2 hacks restantes.' },
                        { week: '04', title: 'SOBERANÍA', desc: 'Consolidamos el sistema. Creas tu propio ritual de mantenimiento SRAP.' }
                    ].map((step, i) => (
                        <div key={i} className="flex items-center space-x-6 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all">
                            <span className="text-4xl font-black text-purple-500/30">{step.week}</span>
                            <div>
                                <h4 className="font-black text-white text-lg">{step.title}</h4>
                                <p className="text-sm text-gray-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* What's Inside the Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/30 p-8 rounded-3xl border border-white/5 space-y-6">
                    <h4 className="text-xl font-black text-white flex items-center">
                        <i className="fa-solid fa-microchip mr-3 text-purple-400"></i> TECNOLOGÍA INCLUIDA
                    </h4>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start"><i className="fa-solid fa-check text-purple-500 mr-3 mt-1"></i> 4 Sesiones 1-a-1 de 60 min.</li>
                        <li className="flex items-start"><i className="fa-solid fa-check text-purple-500 mr-3 mt-1"></i> Guía de Implementación SRAP Personalizada.</li>
                        <li className="flex items-start"><i className="fa-solid fa-check text-purple-500 mr-3 mt-1"></i> Acceso a la Biblioteca de Hacks Premium.</li>
                    </ul>
                </div>
                <div className="bg-black/30 p-8 rounded-3xl border border-white/5 space-y-6">
                    <h4 className="text-xl font-black text-white flex items-center">
                        <i className="fa-solid fa-headset mr-3 text-purple-400"></i> SOPORTE TÁCTICO
                    </h4>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start"><i className="fa-solid fa-check text-purple-500 mr-3 mt-1"></i> Acceso Directo a WhatsApp (L-V).</li>
                        <li className="flex items-start"><i className="fa-solid fa-check text-purple-500 mr-3 mt-1"></i> Feedback en menos de 12h.</li>
                        <li className="flex items-start"><i className="fa-solid fa-check text-purple-500 mr-3 mt-1"></i> Sesión de Cierre y Próximos Pasos.</li>
                    </ul>
                </div>
            </div>

            {/* Prerequisite Note */}
            <div className="text-center p-8 bg-gray-900 rounded-3xl border border-gray-800">
                <p className="text-gray-400 mb-6">
                    Para garantizar que el Kit Magistral es lo que necesitas, requerimos una **Sesión de Descubrimiento** previa.
                </p>
                <button 
                    onClick={onShowDiscovery}
                    className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all"
                >
                    AGENDAR DESCUBRIMIENTO PRIMERO
                </button>
            </div>

            {/* CTA */}
            <div className="text-center space-y-6">
                <p className="text-sm text-gray-500 uppercase tracking-widest">Inversión en tu Maestría</p>
                <p className="text-6xl font-black text-white">$397 <span className="text-xl text-gray-400">USD</span></p>
                <a 
                    href="?payment_success=true&service=magistral" 
                    className="inline-block px-12 py-5 bg-purple-600 text-white font-black rounded-2xl text-xl shadow-[0_0_50px_rgba(147,51,234,0.3)] hover:scale-105 transition-all pulse-glow"
                >
                    ADQUIRIR KIT MAGISTRAL
                </a>
                <p className="text-xs text-gray-500">Solo 3 plazas disponibles este mes.</p>
            </div>
        </div>
    );
};

export default KitMagistralSection;
