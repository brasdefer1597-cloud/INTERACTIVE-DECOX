import React, { useState } from 'react';

interface SrapRitualProps {
    onActivate: () => void;
    playUIClick: () => void;
}

const SrapRitual: React.FC<SrapRitualProps> = ({ onActivate, playUIClick }) => {
    const [isPulsing, setIsPulsing] = useState(false);
    
    return (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-black shadow-inner">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"><i className="fa-solid fa-sync-alt fa-spin mr-3"></i> NÚCLEO SRAP™</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    <strong>Sincroniza Ritmos en Acción Presente.</strong> El protocolo que activa tus 7 poderes cognitivos y filtra el caos en claridad táctica.
                </p>
                <div id="srap-pulse" className={`mx-auto mb-8 w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 transition-opacity duration-300 ${isPulsing ? 'opacity-100 pulsing' : 'opacity-0'}`}></div>
                <button 
                    className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black rounded-2xl shadow-2xl hover:from-purple-700 hover:to-pink-700 transition-all text-lg pulse-glow btn-dynamic" 
                    onClick={() => {
                        playUIClick();
                        onActivate();
                        setIsPulsing(true);
                        setTimeout(() => setIsPulsing(false), 4000);
                    }}>
                    <i className="fa-solid fa-rocket mr-2"></i> ACTIVAR RITUAL SRAP
                </button>
            </div>
        </section>
    );
};

export default SrapRitual;
