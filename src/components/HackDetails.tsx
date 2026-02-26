import React from 'react';
import { useAppContext } from '../context/AppContext';
import { PODERES_SHEREZADE_DATA } from '../utils/constants';
import { Hack, PoderDeSherezade } from '../utils/types';

interface HackDetailsProps {
    hack: Hack;
}

const HackDetails: React.FC<HackDetailsProps> = ({ hack }) => {
    const { allTemplateInputs, handleTemplateInputChange } = useAppContext();
    const poder: PoderDeSherezade | undefined = PODERES_SHEREZADE_DATA.find(p => p.id === hack.poderDeSherezadeId);
    const currentHackInputs = allTemplateInputs[hack.id] || {};

    return (
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
};

export default HackDetails;
