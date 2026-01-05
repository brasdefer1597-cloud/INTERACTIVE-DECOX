import React from 'react';

interface KitMagistralSectionProps {
    onShowDiscovery: () => void;
}

const KitMagistralSection: React.FC<KitMagistralSectionProps> = ({ onShowDiscovery }) => {
    return (
        <div className="text-white space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
                El Kit Magistral es tu arsenal completo. No solo te damos el mapa (Sesión de Descubrimiento), te entregamos las armas, el entrenamiento y la munición para conquistar el territorio.
            </p>

            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <h4 className="text-2xl font-bold text-yellow-300 mb-4">Componentes del Kit:</h4>
                <ul className="space-y-4 text-lg">
                    <li className="flex items-start">
                        <i className="fa-solid fa-check text-green-400 mr-4 mt-1"></i>
                        <span><strong className="text-white">TODO lo de la Sesión de Descubrimiento</strong>, amplificado.</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-check text-green-400 mr-4 mt-1"></i>
                        <span><strong className="text-white">4 Sesiones de Implementación (60 min c/u):</strong> Una por semana. Instalamos y calibramos un Hack Magistral por sesión.</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-check text-green-400 mr-4 mt-1"></i>
                        <span><strong className="text-white">Acceso a 'La Forja':</strong> Soporte prioritario vía WhatsApp por 30 días para ajustes tácticos en tiempo real.</span>
                    </li>
                     <li className="flex items-start">
                        <i className="fa-solid fa-check text-green-400 mr-4 mt-1"></i>
                        <span><strong className="text-white">Dashboard de Progreso Personalizado:</strong> Métricas y seguimiento de tu evolución.</span>
                    </li>
                </ul>
            </div>
            
            <p className="text-lg text-center text-gray-400">
                La Sesión de Descubrimiento es un prerrequisito. <button onClick={onShowDiscovery} className="text-yellow-300 underline hover:text-yellow-200">Agenda la tuya primero</button> para ser elegible para el Kit Magistral.
            </p>

            <div className="text-center">
                <a 
                    href="#" 
                    className="inline-block mt-4 px-12 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black rounded-2xl shadow-2xl hover:from-yellow-600 hover:to-orange-600 transition-all text-xl pulse-glow btn-dynamic"
                >
                    RESERVAR KIT MAGISTRAL DE $397 USD
                </a>
                 <p className="text-gray-400 mt-4 text-sm">Serás redirigido a nuestra plataforma de pago seguro.</p>
            </div>
        </div>
    );
};

export default KitMagistralSection;
