import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hack, ModalState, ServiceType } from '../utils/types';
import PostPaymentPage from './PostPaymentPage';
import DiscoverySessionPage from './DiscoverySessionPage';
import KitMagistralSection from './KitMagistralSection';

interface ModalManagerProps {
    modalState: ModalState;
    hideModal: () => void;
    showModal: (type: ModalState['type'], data?: any) => void;
    toggleHackCompletion: (id: number) => void;
}

const ModalManager: React.FC<ModalManagerProps> = ({ modalState, hideModal, showModal, toggleHackCompletion }) => {
    if (!modalState.isOpen) return null;

    const hack = modalState.data as Hack;
    let title: React.ReactNode = '', subtitle: React.ReactNode = '';
    let modalBody: React.ReactNode;

    switch (modalState.type) {
        case 'discovery':
            title = 'Sesión Descubrimiento';
            subtitle = 'Tu primer paso hacia la decodificación.';
            modalBody = <DiscoverySessionPage />;
            break;
        case 'magistral':
            title = 'Kit Magistral';
            subtitle = 'La arquitectura para dominar tus hacks.';
            modalBody = <KitMagistralSection onShowDiscovery={() => showModal('discovery')} />;
            break;
        case 'hack':
            title = hack.title;
            subtitle = hack.subtitle;
            modalBody = (
                <div className="space-y-8">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 className="text-xl font-black text-white mb-4 flex items-center gap-3">
                            <i className={hack.icon + " text-yellow-400"}></i>
                            MÉTODO DE ACTIVACIÓN
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{hack.metodo}</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 className="text-xl font-black text-white mb-4 flex items-center gap-3">
                            <i className="fa-solid fa-satellite-dish text-emerald-400"></i>
                            AMPLIFICACIÓN
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{hack.amplificacion}</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
                        <h4 className="text-lg font-black text-red-400 mb-2 uppercase tracking-widest">Mini Reto</h4>
                        <p className="text-white font-bold">{hack.miniReto}</p>
                    </div>
                </div>
            );
            break;
        case 'activation':
            title = `Activar: ${hack.title}`;
            subtitle = 'Ejecuta el protocolo para dominar este hack.';
            modalBody = (
                <div className="space-y-8">
                    <div className="bg-white/5 p-8 rounded-3xl border border-yellow-400/30">
                        <h4 className="text-2xl font-black text-white mb-4">EL EJERCICIO</h4>
                        <p className="text-xl text-gray-300 leading-relaxed italic">"{hack.ejercicio}"</p>
                    </div>
                    <button 
                        onClick={() => { toggleHackCompletion(hack.id); hideModal(); }}
                        className="w-full py-6 bg-emerald-500 text-black font-black text-xl rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_20px_40px_rgba(16,185,129,0.2)]"
                    >
                        COMPLETAR Y DOMINAR
                    </button>
                </div>
            );
            break;
        case 'srap':
            title = 'Ritual SRAP™';
            subtitle = 'Sincroniza Ritmos en Acción Presente';
            modalBody = (
                <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                        {['Sincronizar', 'Reconocer', 'Activar', 'Pausa'].map((word, i) => (
                            <div key={word} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                                <span className="text-3xl font-black text-cyan-400 block mb-2">{word[0]}</span>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{word}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed text-center italic">
                        "Detente. Respira. Reconoce el patrón. Actúa con precisión. Sincroniza tu realidad."
                    </p>
                </div>
            );
            break;
        case 'postPayment':
            title = 'Transmisión Exitosa';
            subtitle = 'El protocolo ha sido actualizado.';
            modalBody = <PostPaymentPage serviceName={modalState.data.serviceName} archetype={modalState.data.archetype} />;
            break;
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm" 
            onClick={hideModal}
        >
            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="w-full max-w-3xl bg-[#0a0a0a] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative" 
                onClick={e => e.stopPropagation()}
            >
                {/* Glitch Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                
                <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-start relative z-10">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">{title}</h3>
                        <p className="text-gray-500 font-medium mt-2">{subtitle}</p>
                    </div>
                    <button onClick={hideModal} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl text-gray-500 hover:text-white transition-colors">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="p-8 md:p-12 max-h-[70vh] overflow-y-auto custom-scrollbar relative z-10">
                    {modalBody}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ModalManager;
