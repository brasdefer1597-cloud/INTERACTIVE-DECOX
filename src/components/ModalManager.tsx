import React, { lazy, Suspense } from 'react';
import { useAppContext } from '../context/AppContext';
import { PODERES_SHEREZADE_DATA } from '../utils/constants';
import { Hack, PoderDeSherezade } from '../utils/types';

// Lazy loaded components
const PostPaymentPage = lazy(() => import('./PostPaymentPage'));
const DiscoverySessionPage = lazy(() => import('./DiscoverySessionPage'));
const KitMagistralSection = lazy(() => import('./KitMagistralSection'));
const TotalTransformationSection = lazy(() => import('./TotalTransformationSection'));
const HackDetails = lazy(() => import('./HackDetails'));

const ModalManager = () => {
    const { modalState, hideModal, showServiceModal, toggleHackCompletion } = useAppContext();

    if (!modalState.isOpen) return null;

    const hack = modalState.data as Hack;
    let title: React.ReactNode = '', subtitle: React.ReactNode = '';
    let modalBody: React.ReactNode;

    switch (modalState.type) {
            case 'discovery':
            title = <><i className="fa-solid fa-key mr-3"></i>Sesión Descubrimiento</>;
            subtitle = 'Tu primer paso hacia la decodificación.';
            modalBody = <DiscoverySessionPage />;
            break;
        case 'magistral':
            title = <><i className="fa-solid fa-wand-magic-sparkles mr-3"></i>Kit Magistral</>;
            subtitle = 'La arquitectura para dominar tus hacks.';
            modalBody = <KitMagistralSection onShowDiscovery={() => showServiceModal('discovery')} />;
            break;
        case 'total':
            title = <><i className="fa-solid fa-crown mr-3"></i>Transformación Total</>;
            subtitle = 'Asciende al Nivel Maestro.';
            modalBody = <TotalTransformationSection />;
            break;
        case 'hack':
            const poder: PoderDeSherezade | undefined = PODERES_SHEREZADE_DATA.find(p => p.id === hack.poderDeSherezadeId);

            title = <><i className={`${hack.icon} mr-3`}></i>{hack.title}</>;
            subtitle = <>Protocolo de Amplificación: {poder ? (
                <span className="tooltip-container">
                    <span className="underline decoration-dotted cursor-help">{poder.title}</span>
                    <span className="tooltip">
                        <strong className="block text-yellow-300">Clave:</strong> {poder.clave}
                        <strong className="block text-yellow-300 mt-2">Propósito:</strong> {poder.proposito}
                    </span>
                </span>
            ) : hack.subtitle}</>;
            modalBody = <HackDetails hack={hack} />;
            break;
        case 'activation':
            title = <><i className="fa-solid fa-bolt mr-3"></i>Activar Protocolo: {hack.title}</>;
            subtitle = `Estás a punto de ejecutar el ejercicio para dominar este poder.`;
            modalBody = <>
                <div className="bg-gray-800 p-6 rounded-2xl border-l-4 border-yellow-400 mb-8">
                    <h4 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center"><span className="mr-3"><i className="fa-solid fa-running"></i></span>EJERCICIO DE ACTIVACIÓN</h4>
                    <p className="text-gray-300 text-lg">{hack.ejercicio}</p>
                </div>
                <p className="text-center text-gray-400 mb-6 italic">Al completar este ejercicio, marcarás este hack como dominado y avanzarás en tu maestría.</p>
                <button
                    onClick={() => {
                        toggleHackCompletion(hack.id);
                        hideModal();
                    }}
                    className="w-full text-center bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-black py-4 px-6 rounded-xl transition-all text-lg pulse-glow btn-dynamic"
                >
                    <i className="fa-solid fa-check-double mr-2"></i> COMPLETAR Y DOMINAR
                </button>
            </>;
            break;
        case 'srap':
            title = <><i className="fa-solid fa-sync-alt fa-spin mr-3"></i>RITUAL SRAP ACTIVADO</>;
            subtitle = 'Sincroniza Ritmos en Acción Presente';
                modalBody = <>
                <div className="bg-gray-800 p-6 rounded-2xl border-l-4 border-yellow-400 mb-6">
                    <ul className="text-xl space-y-3">
                        <li><strong className="text-yellow-300">S</strong> = Sincronizar (Ritmos Internos)</li>
                        <li><strong className="text-yellow-300">R</strong> = Reconocer (Patrones de Inercia)</li>
                        <li><strong className="text-yellow-300">A</strong> = Activar (Acción Presente)</li>
                        <li><strong className="text-yellow-300">P</strong> = Pausa (Consciente)</li>
                    </ul>
                </div>
                <div className="border-t border-gray-600 pt-6">
                    <h4 className="text-2xl font-bold text-green-400 mb-4 flex items-center"><span className="mr-3"><i className="fa-solid fa-bolt"></i></span>PROTOCOLO DE EJECUCIÓN</h4>
                    <p className="text-gray-200 text-lg leading-relaxed">Detente completamente. Haz una <strong className="text-white">Pausa</strong> consciente de 5 segundos. <strong className="text-white">Reconoce</strong> el patrón que acabas de identificar (ej: Inercia, Miedo al Caos). Define una <strong className="text-white">Acción Presente</strong> inmediata, pequeña y concreta, inspirada en el Hack que necesites aplicar para <strong className="text-white">Sincronizar</strong> con tu objetivo.</p>
                </div>
            </>;
            break;
        case 'postPayment':
            title = <><i className="fa-solid fa-check-circle mr-3"></i>Compra Exitosa</>;
            subtitle = 'Bienvenido al siguiente nivel.';
            modalBody = <PostPaymentPage serviceName={modalState.data.serviceName} archetype={modalState.data.archetype} />;
            break;
    }

    return (
        <div className={`modal-overlay ${modalState.isOpen ? 'active' : ''}`} onClick={hideModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h3 className="text-4xl font-black text-yellow-300">{title}</h3>
                        <p className="text-lg text-gray-400 mt-2">{subtitle}</p>
                    </div>
                    <button onClick={hideModal} className="text-5xl text-gray-500 hover:text-white transition-colors">&times;</button>
                </div>
                <Suspense fallback={
                    <div className="flex justify-center items-center h-40">
                         <i className="fa-solid fa-spinner fa-spin text-4xl text-yellow-400"></i>
                    </div>
                }>
                    {modalBody}
                </Suspense>
            </div>
        </div>
    );
};

export default ModalManager;
