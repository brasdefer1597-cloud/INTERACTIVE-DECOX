import React from 'react';
import { Hack } from '../utils/types';

interface HackEducationalModuleProps {
    hack: Hack;
    onStartPractice: () => void;
}

const HackEducationalModule: React.FC<HackEducationalModuleProps> = ({ hack, onStartPractice }) => {
    return (
        <div className="space-y-12 pb-8">
            {/* Core Methodology */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4">
                    <h4 className="text-xs font-black text-yellow-500 uppercase tracking-[0.3em]">Metodología</h4>
                    <h3 className="text-2xl font-black text-white uppercase">{hack.metodo}</h3>
                    <p className="text-gray-400 leading-relaxed">{hack.description}</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4">
                    <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em]">Amplificación</h4>
                    <h3 className="text-2xl font-black text-white uppercase">El Hack</h3>
                    <p className="text-gray-400 leading-relaxed">{hack.amplificacion}</p>
                </div>
            </div>

            {/* Deep Amplification */}
            {hack.amplificacionProfunda && (
                <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-white/5 shadow-2xl">
                        <h4 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                            <i className="fa-solid fa-eye text-purple-400"></i>
                            DECODIFICACIÓN PROFUNDA
                        </h4>
                        <div className="space-y-6">
                            <div className="p-6 bg-purple-500/5 border-l-4 border-purple-500 rounded-r-2xl">
                                <p className="text-xs font-black text-purple-400 uppercase mb-2">Dato Oculto</p>
                                <p className="text-gray-200 italic">"{hack.amplificacionProfunda.datoOculto}"</p>
                            </div>
                            <p className="text-gray-400 leading-relaxed">{hack.amplificacionProfunda.miAmplificacion}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] text-center">Ejercicios de Maestría</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {hack.amplificacionProfunda.ejercicios.map((ex, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all">
                                    <h5 className="font-black text-white mb-2">{ex.titulo}</h5>
                                    <p className="text-xs text-gray-500">{ex.descripcion}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Mini Reto */}
            <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-3xl text-center space-y-4">
                <h4 className="text-xs font-black text-red-400 uppercase tracking-[0.3em]">Mini Reto de Impacto</h4>
                <p className="text-2xl font-black text-white leading-tight">"{hack.miniReto}"</p>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
                <button 
                    onClick={onStartPractice}
                    className="px-12 py-5 bg-white text-black font-black text-xl rounded-2xl hover:bg-yellow-400 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                >
                    INICIAR PROTOCOLO DE ACTIVACIÓN
                </button>
                <p className="text-xs text-gray-600 mt-4 uppercase tracking-widest">Requiere 5-10 minutos de enfoque absoluto</p>
            </div>
        </div>
    );
};

export default HackEducationalModule;
