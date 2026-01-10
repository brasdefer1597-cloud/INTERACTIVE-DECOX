import React from 'react';

interface PremiumServicesProps {
    onServiceClick: (service: 'discovery' | 'magistral' | 'total') => void;
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Discovery Session */}
                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center flex flex-col">
                        <h3 className="text-3xl font-bold text-yellow-300 mb-4">Sesión Descubrimiento</h3>
                        <p className="text-5xl font-black text-white mb-4">$27 <span className="text-lg font-semibold text-gray-400">USD</span></p>
                        <p className="text-gray-300 flex-grow">Una inmersión de 90 minutos para diagnosticar tu arquetipo y trazar tu mapa de ruta inicial.</p>
                        <button onClick={() => { playUIClick(); onServiceClick('discovery'); }} className="mt-8 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition-colors">Saber Más</button>
                    </div>

                    {/* Kit Magistral */}
                    <div className="bg-gray-800 p-8 rounded-2xl border-2 border-purple-500 text-center flex flex-col shadow-2xl shadow-purple-500/30 transform lg:scale-105">
                        <h3 className="text-3xl font-bold text-purple-300 mb-4">Kit Magistral</h3>
                        <p className="text-5xl font-black text-white mb-4">$397 <span className="text-lg font-semibold text-gray-400">USD</span></p>
                        <p className="text-gray-300 flex-grow">Un mes de implementación intensiva. 4 sesiones para instalar tus hacks fundamentales y soporte directo.</p>
                         <button onClick={() => { playUIClick(); onServiceClick('magistral'); }} className="mt-8 w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-colors">Saber Más</button>
                    </div>

                    {/* Total Transformation */}
                     <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center flex flex-col">
                        <h3 className="text-3xl font-bold text-pink-300 mb-4">Transformación Total</h3>
                        <p className="text-5xl font-black text-white mb-4">$1500+ <span className="text-lg font-semibold text-gray-400">USD</span></p>
                        <p className="text-gray-300 flex-grow">Un programa de 3 a 6 meses para la reingeniería completa de tu sistema operativo. Solo por aplicación.</p>
                         <button onClick={() => { playUIClick(); onServiceClick('total'); }} className="mt-8 w-full bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 rounded-lg transition-colors">Saber Más</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumServices;
