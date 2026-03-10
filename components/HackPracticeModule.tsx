import React, { useState } from 'react';
import { Hack } from '../utils/types';

interface HackPracticeModuleProps {
    hack: Hack;
    onComplete: () => void;
}

const HackPracticeModule: React.FC<HackPracticeModuleProps> = ({ hack, onComplete }) => {
    const [step, setStep] = useState(0);
    const [inputs, setInputs] = useState<string[]>(new Array(hack.plantillaMetodologica?.length || 0).fill(''));

    const handleInputChange = (index: number, value: string) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };

    const isStepComplete = inputs[step]?.trim().length > 5;

    const nextStep = () => {
        if (step < (hack.plantillaMetodologica?.length || 0) - 1) {
            setStep(step + 1);
        } else {
            setStep(step + 1); // Final step
        }
    };

    const prevStep = () => {
        if (step > 0) setStep(step - 1);
    };

    if (step >= (hack.plantillaMetodologica?.length || 0)) {
        return (
            <div className="space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-4xl text-green-400 border border-green-500/30">
                        <i className="fa-solid fa-check-double"></i>
                    </div>
                    <h3 className="text-3xl font-black text-white">PROTOCOLO CALIBRADO</h3>
                    <p className="text-gray-400">Has decodificado la estructura. Ahora, ejecútala en el mundo real.</p>
                </div>

                <div className="bg-gray-900/50 border border-white/10 p-6 rounded-2xl space-y-4">
                    <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Tu Configuración Táctica:</h4>
                    {hack.plantillaMetodologica?.map((item, i) => (
                        <div key={i} className="space-y-1">
                            <p className="text-xs text-yellow-500 font-bold">{item.aspecto}</p>
                            <p className="text-white italic">"{inputs[i]}"</p>
                        </div>
                    ))}
                </div>

                <button 
                    onClick={onComplete}
                    className="w-full py-5 bg-green-600 hover:bg-green-500 text-white font-black text-xl rounded-2xl shadow-[0_0_50px_rgba(22,163,74,0.3)] transition-all"
                >
                    DOMINAR HACK
                </button>
            </div>
        );
    }

    const currentItem = hack.plantillaMetodologica?.[step];

    return (
        <div className="space-y-8">
            {/* Progress Bar */}
            <div className="flex gap-2">
                {hack.plantillaMetodologica?.map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-yellow-500' : 'bg-gray-800'}`}
                    />
                ))}
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <span className="text-xs font-black text-yellow-500 uppercase tracking-[0.3em]">Paso {step + 1} de {hack.plantillaMetodologica?.length}</span>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{currentItem?.aspecto}</h3>
                    <p className="text-gray-400 italic">{currentItem?.guia}</p>
                </div>

                <div className="relative">
                    <textarea 
                        value={inputs[step]}
                        onChange={(e) => handleInputChange(step, e.target.value)}
                        placeholder="Escribe aquí tu decodificación..."
                        className="w-full h-40 bg-black/50 border-2 border-white/10 rounded-2xl p-6 text-white text-lg focus:border-yellow-500 outline-none transition-all resize-none"
                    />
                    <div className="absolute bottom-4 right-4 text-[10px] font-black text-gray-600 uppercase">
                        {inputs[step].length} caracteres
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <button 
                    onClick={prevStep}
                    disabled={step === 0}
                    className="px-8 py-4 bg-white/5 text-gray-500 font-black rounded-xl disabled:opacity-0 transition-all"
                >
                    ATRÁS
                </button>
                <button 
                    onClick={nextStep}
                    disabled={!isStepComplete}
                    className="flex-1 py-4 bg-white text-black font-black rounded-xl hover:bg-yellow-400 disabled:opacity-30 disabled:hover:bg-white transition-all"
                >
                    {step === (hack.plantillaMetodologica?.length || 0) - 1 ? 'FINALIZAR' : 'SIGUIENTE'}
                </button>
            </div>

            <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-blue-400 mt-1"></i>
                <p className="text-xs text-gray-400 leading-relaxed">
                    <span className="text-blue-300 font-bold">Tip Magistral:</span> No busques la perfección, busca la claridad. Este ejercicio es para calibrar tu intención antes de la acción.
                </p>
            </div>
        </div>
    );
};

export default HackPracticeModule;
