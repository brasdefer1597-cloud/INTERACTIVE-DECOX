import React, { useState, useEffect } from 'react';
import { PODERES_SHEREZADE_DATA } from '../../utils/constants';
import { generateAlchemicalCombo } from '../../services/geminiService';

const GRIMORIO_INPUTS_KEY = 'grimorioTemplateInputs';
const COMBO_INPUTS_KEY = 'grimorioComboInputs';

const GrimorioTacticoSection: React.FC = () => {
    const [templateInputs, setTemplateInputs] = useState<{ [key: string]: { [key: string]: string } }>({});
    const [comboPoder1, setComboPoder1] = useState('');
    const [comboPoder2, setComboPoder2] = useState('');
    const [comboResultado, setComboResultado] = useState('');
    const [isForging, setIsForging] = useState(false);

    useEffect(() => {
        const savedGrimorioInputs = localStorage.getItem(GRIMORIO_INPUTS_KEY);
        if (savedGrimorioInputs) {
            setTemplateInputs(JSON.parse(savedGrimorioInputs));
        }
        const savedComboInputs = localStorage.getItem(COMBO_INPUTS_KEY);
        if (savedComboInputs) {
            const { poder1, poder2 } = JSON.parse(savedComboInputs);
            setComboPoder1(poder1 || '');
            setComboPoder2(poder2 || '');
        }
    }, []);

    const handleInputChange = (poderId: number, aspecto: string, value: string) => {
        setTemplateInputs(prev => {
            const newInputs = {
                ...prev,
                [poderId]: {
                    ...(prev[poderId] || {}),
                    [aspecto]: value
                }
            };
            localStorage.setItem(GRIMORIO_INPUTS_KEY, JSON.stringify(newInputs));
            return newInputs;
        });
    };

    const handleComboInputChange = (poder: 'poder1' | 'poder2', value: string) => {
        if (poder === 'poder1') {
            setComboPoder1(value);
        } else {
            setComboPoder2(value);
        }
        const newComboInputs = {
            poder1: poder === 'poder1' ? value : comboPoder1,
            poder2: poder === 'poder2' ? value : comboPoder2,
        };
        localStorage.setItem(COMBO_INPUTS_KEY, JSON.stringify(newComboInputs));
    };

    const handleForjarCombo = async () => {
        if (!comboPoder1 || !comboPoder2 || isForging) return;
        setIsForging(true);
        setComboResultado('');
        try {
            const resultado = await generateAlchemicalCombo(comboPoder1, comboPoder2);
            setComboResultado(resultado);
        } catch (error) {
            console.error("Error forging combo:", error);
            setComboResultado("Error: Fusión fallida. Los ingredientes son inestables.");
        } finally {
            setIsForging(false);
        }
    };

    return (
        <section className="py-32 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <span className="inline-block px-4 py-1.5 bg-yellow-500/10 text-yellow-500 text-[0.7rem] font-black rounded-full mb-6 uppercase tracking-[0.3em] border border-yellow-500/20">
                    Grimorio Táctico
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
                    El Arte de la Fusión
                </h2>
                <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
                    La maestría no es dominar un poder, es fusionarlos. Utiliza estas plantillas para forjar tu ventaja injusta.
                </p>
            </div>

            <div className="space-y-12 mb-32">
                {PODERES_SHEREZADE_DATA.map((poder) => (
                    <div key={poder.id} className="group bg-gray-900/40 backdrop-blur-md p-10 rounded-[3rem] border border-gray-800 hover:border-yellow-500/20 transition-all duration-500">
                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                             <div className="w-20 h-20 rounded-3xl bg-gray-800 flex items-center justify-center text-4xl group-hover:bg-yellow-500 transition-all duration-500 group-hover:scale-110 shadow-xl">
                                {poder.icon}
                             </div>
                             <div>
                                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-1">{poder.title}</h3>
                                <p className="text-yellow-500 font-black text-xs uppercase tracking-[0.2em]">Misión: {poder.proposito}</p>
                             </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="p-6 bg-black/40 rounded-2xl border-l-4 border-gray-700">
                                    <p className="text-gray-300 text-lg leading-relaxed font-medium">{poder.poder}</p>
                                </div>
                                <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-800">
                                    <span className="block text-[0.6rem] font-black text-yellow-500 uppercase tracking-widest mb-2">Ejemplo de Uso</span>
                                    <p className="text-gray-400 italic leading-relaxed" dangerouslySetInnerHTML={{ __html: poder.ejemploDeUso }}></p>
                                </div>
                                <div className="p-6 bg-red-900/10 rounded-2xl border border-red-900/20">
                                    <h4 className="text-sm font-black text-red-500 mb-2 uppercase tracking-widest flex items-center">
                                        <i className="fa-solid fa-crosshairs mr-2"></i> Mini Reto
                                    </h4>
                                    <p className="text-gray-200 font-bold leading-relaxed italic">
                                        {poder.miniReto}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {poder.plantilla.map(item => (
                                    <div key={item.aspecto} className="space-y-2">
                                        <label className="block text-xs font-black text-gray-500 uppercase tracking-widest ml-1">{item.aspecto}</label>
                                        <textarea
                                            rows={3}
                                            value={templateInputs[poder.id]?.[item.aspecto] || ''}
                                            onChange={(e) => handleInputChange(poder.id, item.aspecto, e.target.value)}
                                            placeholder={item.guia}
                                            className="w-full bg-black/40 border-2 border-gray-800 focus:border-yellow-500 rounded-2xl p-4 text-gray-200 outline-none transition-all placeholder:text-gray-700 font-medium resize-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative p-12 md:p-20 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-xl rounded-[4rem] border border-purple-500/20 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 text-[15rem] text-purple-500">
                    <i className="fa-solid fa-flask-vial"></i>
                </div>

                <div className="relative z-10">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-4 italic uppercase tracking-tighter">
                            Combo Alquímico
                        </h3>
                        <p className="text-xl text-gray-400 font-medium italic">
                            Fusiona dos conceptos para forjar una capacidad inédita.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-purple-400 uppercase tracking-widest ml-1">Ingrediente 1</label>
                            <input
                                type="text"
                                placeholder="Ej: Dominio Narrativo"
                                value={comboPoder1}
                                onChange={(e) => handleComboInputChange('poder1', e.target.value)}
                                className="w-full bg-black/50 border-2 border-purple-900/50 focus:border-purple-500 rounded-2xl p-5 text-white outline-none transition-all placeholder:text-gray-800 font-bold"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-purple-400 uppercase tracking-widest ml-1">Ingrediente 2</label>
                            <input
                                type="text"
                                placeholder="Ej: Inyección de Caos"
                                value={comboPoder2}
                                onChange={(e) => handleComboInputChange('poder2', e.target.value)}
                                className="w-full bg-black/50 border-2 border-purple-900/50 focus:border-purple-500 rounded-2xl p-5 text-white outline-none transition-all placeholder:text-gray-800 font-bold"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 mb-10">
                        <label className="text-xs font-black text-purple-400 uppercase tracking-widest ml-1">Resultado de la Fusión</label>
                        <div className="w-full bg-black/50 border-2 border-purple-900/50 rounded-2xl p-6 min-h-[150px] text-lg text-gray-200 font-medium leading-relaxed italic">
                            {isForging ? (
                                <div className="flex items-center space-x-3 text-purple-400">
                                    <i className="fa-solid fa-spinner fa-spin"></i>
                                    <span className="uppercase tracking-[0.2em] text-xs font-black">Transmutando...</span>
                                </div>
                            ) : comboResultado || <span className="text-gray-800">Los secretos de la fusión aparecerán aquí...</span>}
                        </div>
                    </div>

                    <button
                        onClick={handleForjarCombo}
                        disabled={isForging || !comboPoder1 || !comboPoder2}
                        className="w-full group relative overflow-hidden bg-white text-black font-black py-6 rounded-2xl transition-all hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <div className="absolute inset-0 bg-purple-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                        <span className="relative z-10 flex items-center justify-center text-xl uppercase tracking-widest">
                            <i className="fa-solid fa-wand-magic-sparkles mr-3"></i>
                            {isForging ? 'Forjando...' : 'Forjar Combo'}
                        </span>
                    </button>
                </div>
            </div>

            <div className="text-center mt-32 max-w-3xl mx-auto">
                <h4 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">¿Buscas Potencia de Impacto?</h4>
                <p className="text-lg text-gray-500 font-medium mb-12 leading-relaxed">
                    La verdadera alquimia requiere un diagnóstico preciso y calibración experta. En la Sesión Descubrimiento, forjamos los combos que desintegran tus limitaciones reales.
                </p>
                <a
                    href="https://ko-fi.com/s/e85f9cd5e1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-4 px-12 py-6 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-black rounded-2xl text-lg shadow-2xl hover:scale-105 transition-all transform pulse-glow uppercase tracking-widest"
                >
                    <i className="fa-solid fa-calendar-check"></i>
                    <span>Agenda Calibración (7 USD)</span>
                </a>
            </div>
        </section>
    );
};

export default GrimorioTacticoSection;
