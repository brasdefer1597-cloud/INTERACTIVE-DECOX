import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-20 px-6 bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-black text-center mb-12 text-white">EL PROTOCOLO DE 3 FASES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div className="border border-gray-700 p-8 rounded-2xl bg-black/30">
                        <div className="text-5xl font-black text-yellow-400 mb-4">1</div>
                        <h3 className="text-2xl font-bold text-white mb-4">DIAGNOSTICAR</h3>
                        <p className="text-gray-300">Realiza el test para decodificar tu Arquetipo Cognitivo fundamental. Este es el punto de partida para entender tu sistema operativo interno.</p>
                    </div>
                    <div className="border border-gray-700 p-8 rounded-2xl bg-black/30 transform md:scale-110 md:shadow-2xl shadow-purple-500/20">
                        <div className="text-5xl font-black text-purple-400 mb-4">2</div>
                        <h3 className="text-2xl font-bold text-white mb-4">DOMINAR</h3>
                        <p className="text-gray-300">Activa y completa los Hacks Magistrales. Cada hack es un protocolo diseñado para instalar una nueva capacidad en tu stack mental.</p>
                    </div>
                    <div className="border border-gray-700 p-8 rounded-2xl bg-black/30">
                        <div className="text-5xl font-black text-pink-400 mb-4">3</div>
                        <h3 className="text-2xl font-bold text-white mb-4">DISEÑAR</h3>
                        <p className="text-gray-300">Utiliza el Oráculo para recibir directivas estratégicas de la IA y diseña tu realidad con las nuevas herramientas que has adquirido.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(HowItWorks);
