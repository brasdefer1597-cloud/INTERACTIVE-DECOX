import React, { lazy, Suspense } from 'react';
import { useAppContext } from '../context/AppContext';
import { HACKS_DATA, PODERES_SHEREZADE_DATA } from '../utils/constants';
import { Hack, PoderDeSherezade } from '../utils/types';

// Lazy load large modal components to improve initial load
const PostPaymentPage = lazy(() => import('./PostPaymentPage'));
const DiscoverySessionPage = lazy(() => import('./DiscoverySessionPage'));
const KitMagistralSection = lazy(() => import('./KitMagistralSection'));
const TotalTransformationSection = lazy(() => import('./TotalTransformationSection'));

const ModalManager = () => {
    const { modalState, hideModal, showServiceModal, handleTemplateInputChange, allTemplateInputs, toggleHackCompletion } = useAppContext();

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
            const currentHackInputs = allTemplateInputs[hack.id] || {};

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
            modalBody = (
                    <div className="space-y-8">
                    {poder && (
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-lg font-bold text-gray-300 mb-2">
                                <span className="text-2xl mr-3">{poder.icon}</span>El Poder: {poder.clave}
                            </h4>
                            <p className="text-gray-300 text-lg leading-relaxed">{poder.poder}</p>
                        </div>
                    )}

                    {hack.amplificacionProfunda && (
                        <div className="border-t-2 border-gray-700/50 pt-6">
                            <h4 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                                <i className="fa-solid fa-satellite-dish mr-3"></i>AMPLIFICACIÓN PROFUNDA
                            </h4>
                            <div className="space-y-4">
                                <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-yellow-500">
                                    <h5 className="font-bold text-yellow-400">DATO OCULTO:</h5>
                                    <p className="text-gray-300 italic">{hack.amplificacionProfunda.datoOculto}</p>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-yellow-500">
                                    <h5 className="font-bold text-yellow-400">MI AMPLIFICACIÓN:</h5>
                                    <p className="text-gray-300 italic">{hack.amplificacionProfunda.miAmplificacion}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {hack.amplificacionProfunda?.ejercicios && (
                        <div className="pt-6">
                            <h4 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                                <i className="fa-solid fa-microchip mr-3"></i> EJERCICIOS DE ACTIVACIÓN
                            </h4>
                            <div className="space-y-6">
                                {hack.amplificacionProfunda.ejercicios.map((ejercicio, index) => {
                                    if (hack.id === 2 && ejercicio.titulo.includes("Mapa Fractal")) {
                                        return (
                                            <div key={index} className="bg-gray-800 p-4 rounded-lg">
                                                <h5 className="text-xl font-bold text-white mb-2">{ejercicio.titulo}</h5>
                                                <p className="text-gray-400 mb-6">{ejercicio.descripcion}</p>
                                                <div className="p-4 space-y-8 bg-black/30 rounded-lg">
                                                    {/* Central Node */}
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-bold text-gray-400">PUNTO DE ORIGEN</h6>
                                                        <div className="fractal-node central-node p-4 mt-2">
                                                            <label className="text-lg font-bold text-green-300 mb-2 block">Problema Central / Patrón Raíz</label>
                                                            <textarea
                                                                rows={3}
                                                                value={currentHackInputs['fractal_central'] || ''}
                                                                onChange={(e) => handleTemplateInputChange(hack.id, 'fractal_central', e.target.value)}
                                                                placeholder="Ej: Falta de feedback loops claros que permitan la corrección de rumbo a tiempo..."
                                                                className="w-full"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-center">
                                                        <div className="w-px h-12 bg-gray-600"></div>
                                                    </div>

                                                    {/* Context Nodes */}
                                                    <div className="text-center">
                                                        <h6 className="text-sm font-bold text-gray-400">REPLICACIONES FRACTALES</h6>
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                                                            <div className="fractal-node context-node p-4 flex flex-col">
                                                                <i className="fa-solid fa-landmark text-3xl text-blue-400/50 mb-3"></i>
                                                                <label className="text-lg font-bold text-blue-300 mb-2 block">Contexto Histórico</label>
                                                                <textarea rows={4} placeholder="Ej: Caída de imperios por falta de comunicación..." className="flex-grow"
                                                                    value={currentHackInputs['fractal_historico'] || ''}
                                                                    onChange={(e) => handleTemplateInputChange(hack.id, 'fractal_historico', e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="fractal-node context-node p-4 flex flex-col">
                                                                <i className="fa-solid fa-industry text-3xl text-blue-400/50 mb-3"></i>
                                                                <label className="text-lg font-bold text-blue-300 mb-2 block">Contexto Industrial</label>
                                                                <textarea rows={4} placeholder="Ej: Empresas que quiebran por ignorar al mercado..." className="flex-grow"
                                                                    value={currentHackInputs['fractal_industrial'] || ''}
                                                                    onChange={(e) => handleTemplateInputChange(hack.id, 'fractal_industrial', e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="fractal-node context-node p-4 flex flex-col">
                                                                <i className="fa-solid fa-dna text-3xl text-blue-400/50 mb-3"></i>
                                                                <label className="text-lg font-bold text-blue-300 mb-2 block">Contexto Biológico</label>
                                                                <textarea rows={4} placeholder="Ej: Especies que se extinguen por no adaptarse..." className="flex-grow"
                                                                    value={currentHackInputs['fractal_biologico'] || ''}
                                                                    onChange={(e) => handleTemplateInputChange(hack.id, 'fractal_biologico', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div key={index} className="bg-gray-800 p-4 rounded-lg">
                                            <h5 className="text-xl font-bold text-white mb-2">{ejercicio.titulo}</h5>
                                            <p className="text-gray-300">{ejercicio.descripcion}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {poder?.miniReto && (
                        <div className="mt-6 bg-red-900/50 p-4 rounded-xl border-l-4 border-red-400 shadow-lg">
                            <h4 className="text-lg font-black text-red-400 mb-2"><i className="fa-solid fa-crosshairs mr-2"></i> MINI RETO DE ACTIVACIÓN</h4>
                            <p className="text-base text-gray-200 leading-relaxed font-bold">
                                {poder.miniReto}
                            </p>
                        </div>
                    )}

                    {poder && (
                            <div className="border-t-2 border-gray-700/50 pt-6">
                            <h4 className="text-2xl font-bold text-green-400 mb-3 flex items-center"><i className="fa-solid fa-feather-pointed mr-3"></i>PLANTILLA METODOLÓGICA</h4>
                            <div className="space-y-4 bg-gray-900 p-4 rounded-lg">
                                {poder.plantilla.map(item => (
                                    <div key={item.aspecto}>
                                        <label className="block text-lg font-bold text-white mb-1">{item.aspecto}</label>
                                        <p className="text-sm text-gray-400 mb-2 italic">{item.guia}</p>
                                        <textarea
                                            rows={3}
                                            value={currentHackInputs[item.aspecto] || ''}
                                            onChange={(e) => handleTemplateInputChange(hack.id, item.aspecto, e.target.value)}
                                            className="w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-3 text-lg text-gray-200 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                                            aria-label={item.aspecto}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            );
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
                    <div className="flex flex-col items-center justify-center p-12 text-yellow-500">
                        <i className="fa-solid fa-bolt text-4xl animate-pulse mb-4"></i>
                        <p className="text-xl font-bold animate-pulse">Cargando...</p>
                    </div>
                }>
                    {modalBody}
                </Suspense>
            </div>
        </div>
    );
};

export default ModalManager;