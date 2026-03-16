import React from 'react';

interface PremiumServicesProps {
    onServiceClick: (service: 'discovery' | 'magistral') => void;
    playUIClick: () => void;
}

const PremiumServices: React.FC<PremiumServicesProps> = ({ onServiceClick, playUIClick }) => {
    return (
        <section className="py-20 px-6 bg-gradient-to-t from-black via-gray-900 to-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-black text-center mb-6 text-white">
                    <i className="fa-solid fa-rocket mr-3"></i> SERVICIOS PREMIUM
                </h2>
                <p className="text-xl text-center mb-12 text-gray-300 font-semibold">
                    Acelera tu evolución con una intervención directa.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Discovery Session */}
                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center flex flex-col">
                        <h3 className="text-3xl font-bold text-yellow-300 mb-4">Sesión Descubrimiento</h3>
                        <p className="text-5xl font-black text-white mb-4">$27 <span className="text-lg font-semibold text-gray-400">USD</span></p>
                        <p className="text-gray-300 flex-grow">Una inmersión de 90 minutos para diagnosticar tu arquetipo y trazar tu mapa de ruta inicial.</p>
                        <div className="mt-8 space-y-3">
                            <button onClick={() => { playUIClick(); onServiceClick('discovery'); }} className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-lg transition-colors">Saber Más</button>
                            <a href="?payment_success=true&service=discovery" className="block w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-3 rounded-lg transition-colors shadow-lg">ADQUIRIR AHORA</a>
                        </div>
                    </div>

                    {/* Kit Magistral */}
                    <div className="bg-gray-800 p-8 rounded-2xl border-2 border-purple-500 text-center flex flex-col shadow-2xl shadow-purple-500/30">
                        <h3 className="text-3xl font-bold text-purple-300 mb-4">Kit Magistral</h3>
                        <p className="text-5xl font-black text-white mb-4">$397 <span className="text-lg font-semibold text-gray-400">USD</span></p>
                        <p className="text-gray-300 flex-grow">Un mes de implementación intensiva. 4 sesiones para instalar tus hacks fundamentales y soporte directo.</p>
                        <div className="mt-8 space-y-3">
                            <button onClick={() => { playUIClick(); onServiceClick('magistral'); }} className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-lg transition-colors">Saber Más</button>
                            <a href="?payment_success=true&service=magistral" className="block w-full bg-purple-600 hover:bg-purple-500 text-white font-black py-3 rounded-lg transition-colors shadow-lg">ADQUIRIR AHORA</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumServices;
