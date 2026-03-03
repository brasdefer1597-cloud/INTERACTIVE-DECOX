import React, { useState, useEffect } from 'react';
import { PODERES_SHEREZADE_DATA } from '../utils/constants';
import { generateAlchemicalCombo } from '../services/geminiService';

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
        <section className="py-20 px-6 max-w-5xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-6 text-yellow-300">
                <i className="fa-solid fa-book-skull mr-3"></i>GRIMORIO TÁCTICO: EL ARTE DE LA FUSIÓN
            </h2>
            <p className="text-xl text-center text-gray-300 mb-16 italic">
                La maestría no es dominar un poder, es fusionarlos. Usa estas plantillas interactivas para forjar tu propia ventaja injusta y documentar tu progreso.
            </p>
            

            <div className="space-y-12">
                {PODERES_SHEREZADE_DATA.map((poder) => (
                    <div key={poder.id} className="dashboard-widget p-6 border-l-4 border-gray-600 hover:border-yellow-400">
                        <div className="flex items-center mb-6">
                             <span className="text-4xl mr-4">{poder.icon}</span>
                             <div>
                                <h3 className="text-2xl font-bold text-white">{poder.title}</h3>
                                <p className="text-yellow-300 font-semibold italic">Misión: {poder.proposito}</p>
                             </div>
                        </div>

                        <div className="mb-6 space-y-4 pl-3 border-l-2 border-gray-700">
                            <p className="text-gray-300 text-lg leading-relaxed">{poder.poder}</p>
                            <div className="bg-gray-800/60 p-4 rounded-lg">
                                <p className="text-sm font-bold text-yellow-400 mb-1">EJEMPLO DE USO:</p>
                                <p className="text-gray-300 italic" dangerouslySetInnerHTML={{ __html: poder.ejemploDeUso }}></p>
                            </div>
                        </div>
                        
                        <div className="space-y-4 bg-gray-900/50 p-4 rounded-lg border-t-2 border-gray-700">
                            {poder.plantilla.map(item => (
                                <div key={item.aspecto}>
                                    <label className="block text-lg font-bold text-gray-200 mb-1">{item.aspecto}</label>
                                    <p className="text-sm text-gray-400 mb-2 italic">{item.guia}</p>
                                    <textarea 
                                        rows={3}
                                        value={templateInputs[poder.id]?.[item.aspecto] || ''}
                                        onChange={(e) => handleInputChange(poder.id, item.aspecto, e.target.value)}
                                        className="w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-3 text-lg text-gray-200 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
                                        aria-label={item.aspecto}
                                    />
                                </div>
                            ))}
                        </div>

                         <div className="mt-6 bg-red-900/50 p-4 rounded-xl border-l-4 border-red-400 shadow-lg">
                            <h4 className="text-lg font-black text-red-400 mb-2"><i className="fa-solid fa-crosshairs mr-2"></i> MINI RETO DE ACTIVACIÓN</h4>
                            <p className="text-base text-gray-200 leading-relaxed font-bold">
                                {poder.miniReto}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

             <div className="mt-20">
                <h3 className="text-3xl font-black text-center mb-6 text-purple-400">
                    <i className="fa-solid fa-flask-vial mr-3"></i>CREA TU PROPIO COMBO ALQUÍMICO
                </h3>
                <p className="text-lg text-center text-gray-400 mb-8 italic">
                    Combina dos poderes para forjar una nueva capacidad. Esta es la esencia de la maestría.
                </p>
                <div className="dashboard-widget p-8 border-l-4 border-purple-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-lg font-bold text-gray-300 mb-2">Ingrediente 1 (Poder)</label>
                            <input type="text" placeholder="Ej: Dominio Narrativo" value={comboPoder1} onChange={(e) => handleComboInputChange('poder1', e.target.value)} className="w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-3 text-lg text-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all" />
                        </div>
                        <div>
                            <label className="block text-lg font-bold text-gray-300 mb-2">Ingrediente 2 (Poder)</label>
                            <input type="text" placeholder="Ej: Inyección de Caos" value={comboPoder2} onChange={(e) => handleComboInputChange('poder2', e.target.value)} className="w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-3 text-lg text-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-lg font-bold text-gray-300 mb-2">Resultado: Mi Combo Alquímico</label>
                        <textarea rows={4} placeholder="El resultado de tu fusión aparecerá aquí..." value={comboResultado} readOnly className="w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-3 text-lg text-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"></textarea>
                    </div>
                    <button onClick={handleForjarCombo} disabled={isForging || !comboPoder1 || !comboPoder2} className="w-full mt-6 text-center bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 rounded-lg transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed btn-dynamic">
                        {isForging ? (
                            <><i className="fa-solid fa-spinner fa-spin mr-2"></i> FORJANDO...</>
                        ) : (
                            <><i className="fa-solid fa-wand-magic-sparkles mr-2"></i> FORJAR COMBO</>
                        )}
                    </button>
                </div>
            </div>

            <div className="text-center mt-16">
                <p className="text-xl text-gray-300 font-bold">
                    ¿Tus combos no tienen la potencia que buscas?
                </p>
                <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
                    La verdadera alquimia requiere un diagnóstico preciso. En la Sesión Descubrimiento, calibramos tus ingredientes para forjar los combos que realmente desintegran tus limitaciones.
                </p>
                <a 
                    href="https://ko-fi.com/s/e85f9cd5e1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-black rounded-xl text-lg shadow-2xl hover:scale-105 transition-all transform pulse-glow">
                    AGENDA TU SESIÓN DE CALIBRACIÓN ($27 USD)
                </a>
            </div>
        </section>
    );
};

export default GrimorioTacticoSection;