import React, { useState, useEffect, useMemo } from 'react';
import { PODERES_SHEREZADE_DATA } from '../utils/constants';
import { generateAlchemicalCombo } from '../services/geminiService';
import { motion, AnimatePresence } from 'motion/react';

const GRIMORIO_INPUTS_KEY = 'grimorioTemplateInputs';
const COMBO_INPUTS_KEY = 'grimorioComboInputs';

const GrimorioTacticoSection: React.FC = () => {
    const [templateInputs, setTemplateInputs] = useState<{ [key: string]: { [key: string]: string } }>({});
    const [comboPoder1Id, setComboPoder1Id] = useState<number | null>(null);
    const [comboPoder2Id, setComboPoder2Id] = useState<number | null>(null);
    const [comboResultado, setComboResultado] = useState('');
    const [isForging, setIsForging] = useState(false);
    const [activePoderId, setActivePoderId] = useState<number | null>(null);

    useEffect(() => {
        const savedGrimorioInputs = localStorage.getItem(GRIMORIO_INPUTS_KEY);
        if (savedGrimorioInputs) {
            setTemplateInputs(JSON.parse(savedGrimorioInputs));
        }
        const savedComboInputs = localStorage.getItem(COMBO_INPUTS_KEY);
        if (savedComboInputs) {
            const { p1Id, p2Id, result } = JSON.parse(savedComboInputs);
            setComboPoder1Id(p1Id || null);
            setComboPoder2Id(p2Id || null);
            setComboResultado(result || '');
        }
    }, []);

    const progress = useMemo(() => {
        const totalFields = PODERES_SHEREZADE_DATA.reduce((acc, p) => acc + p.plantilla.length, 0);
        let filledFields = 0;
        Object.values(templateInputs).forEach(poderInputs => {
            Object.values(poderInputs).forEach(val => {
                if (val.trim()) filledFields++;
            });
        });
        return Math.round((filledFields / totalFields) * 100);
    }, [templateInputs]);

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

    const handleForjarCombo = async () => {
        if (comboPoder1Id === null || comboPoder2Id === null || isForging) return;
        
        const p1 = PODERES_SHEREZADE_DATA.find(p => p.id === comboPoder1Id);
        const p2 = PODERES_SHEREZADE_DATA.find(p => p.id === comboPoder2Id);
        
        if (!p1 || !p2) return;

        setIsForging(true);
        setComboResultado('');
        try {
            const resultado = await generateAlchemicalCombo(p1.title, p2.title);
            setComboResultado(resultado);
            localStorage.setItem(COMBO_INPUTS_KEY, JSON.stringify({
                p1Id: comboPoder1Id,
                p2Id: comboPoder2Id,
                result: resultado
            }));
        } catch (error) {
            console.error("Error forging combo:", error);
            setComboResultado("Error: Fusión fallida. Los ingredientes son inestables.");
        } finally {
            setIsForging(false);
        }
    };

    const togglePoderSelection = (id: number) => {
        if (comboPoder1Id === id) {
            setComboPoder1Id(null);
        } else if (comboPoder2Id === id) {
            setComboPoder2Id(null);
        } else if (comboPoder1Id === null) {
            setComboPoder1Id(id);
        } else if (comboPoder2Id === null) {
            setComboPoder2Id(id);
        } else {
            // Replace the first one if both are full
            setComboPoder1Id(id);
        }
    };

    return (
        <section id="grimorio" className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <header className="text-center mb-24 space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
                    >
                        Laboratorio de Alquimia Cognitiva
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
                        Grimorio <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Táctico</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        La maestría no es dominar un poder, es fusionarlos. Documenta tu progreso y forja tu propia ventaja injusta.
                    </p>

                    {/* Progress Bar */}
                    <div className="max-w-md mx-auto pt-8 space-y-2">
                        <div className="flex justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
                            <span>Sincronización del Grimorio</span>
                            <span className="text-yellow-500">{progress}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.4)]"
                            />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Power List & Templates */}
                    <div className="lg:col-span-7 space-y-6">
                        <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.4em] mb-8">Poderes de Sherezade</h3>
                        {PODERES_SHEREZADE_DATA.map((poder) => {
                            const isActive = activePoderId === poder.id;
                            const isSelected = comboPoder1Id === poder.id || comboPoder2Id === poder.id;
                            const isFilled = Object.values(templateInputs[poder.id] || {}).some(v => v.trim());

                            return (
                                <motion.article 
                                    key={poder.id}
                                    layout
                                    className={`group relative bg-gray-900/40 border-2 rounded-[2.5rem] transition-all duration-500 overflow-hidden ${
                                        isActive ? 'border-yellow-500/50 shadow-2xl' : isSelected ? 'border-purple-500/50' : 'border-white/5 hover:border-white/10'
                                    }`}
                                >
                                    <div 
                                        onClick={() => setActivePoderId(isActive ? null : poder.id)}
                                        className="p-8 cursor-pointer flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 ${
                                                isActive ? 'bg-yellow-500 text-black scale-110' : 'bg-white/5 text-white group-hover:bg-white/10'
                                            }`}>
                                                {poder.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-black text-white uppercase tracking-tighter">{poder.title}</h4>
                                                <div className="flex items-center gap-3 mt-1">
                                                    <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">{poder.clave}</span>
                                                    {isFilled && <i className="fa-solid fa-circle-check text-green-500 text-[10px]"></i>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); togglePoderSelection(poder.id); }}
                                                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                                                    isSelected ? 'bg-purple-500 border-purple-400 text-white' : 'border-white/10 text-gray-600 hover:border-purple-500/50 hover:text-purple-400'
                                                }`}
                                                title="Seleccionar para Combo"
                                            >
                                                <i className="fa-solid fa-flask"></i>
                                            </button>
                                            <i className={`fa-solid fa-chevron-down text-gray-600 transition-transform duration-500 ${isActive ? 'rotate-180 text-yellow-500' : ''}`}></i>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-8 pb-8 space-y-8 border-t border-white/5 pt-8"
                                            >
                                                <div className="space-y-4">
                                                    <p className="text-gray-400 leading-relaxed text-lg italic">"{poder.poder}"</p>
                                                    <div className="p-6 bg-black/40 rounded-3xl border border-white/5">
                                                        <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest block mb-2">Protocolo de Uso:</span>
                                                        <p className="text-white text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: poder.ejemploDeUso }}></p>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    {poder.plantilla.map(item => (
                                                        <div key={item.aspecto} className="space-y-2">
                                                            <div className="flex justify-between items-end">
                                                                <label className="text-xs font-black text-white uppercase tracking-widest">{item.aspecto}</label>
                                                                <span className="text-[10px] text-gray-600 italic">{item.guia}</span>
                                                            </div>
                                                            <textarea 
                                                                rows={2}
                                                                value={templateInputs[poder.id]?.[item.aspecto] || ''}
                                                                onChange={(e) => handleInputChange(poder.id, item.aspecto, e.target.value)}
                                                                placeholder="Escribe tu táctica..."
                                                                className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white focus:border-yellow-500 outline-none transition-all resize-none"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-3xl flex items-start gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                                                        <i className="fa-solid fa-bolt"></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Mini Reto de Activación</h5>
                                                        <p className="text-white text-sm font-bold">{poder.miniReto}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.article>
                            );
                        })}
                    </div>

                    {/* Right: The Forge */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-[3rem] border-2 border-purple-500/20 shadow-2xl relative overflow-hidden group">
                                {/* Animated Background */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] group-hover:bg-purple-500/20 transition-all duration-1000"></div>

                                <div className="relative z-10 space-y-8">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-purple-500/10 rounded-[2rem] flex items-center justify-center text-4xl text-purple-400 mx-auto mb-6 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                                            <i className={`fa-solid ${isForging ? 'fa-spinner fa-spin' : 'fa-flask-vial'}`}></i>
                                        </div>
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">La Forja Alquímica</h3>
                                        <p className="text-sm text-gray-500 font-medium mt-2">Fusiona dos poderes para crear una ventaja injusta.</p>
                                    </div>

                                    <div className="flex items-center justify-center gap-4 py-8">
                                        {/* Slot 1 */}
                                        <div className={`w-24 h-24 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center transition-all duration-500 ${
                                            comboPoder1Id ? 'bg-purple-500/10 border-purple-500/50 scale-110' : 'bg-black/40 border-white/10 text-gray-700'
                                        }`}>
                                            {comboPoder1Id ? (
                                                <>
                                                    <span className="text-3xl mb-1">{PODERES_SHEREZADE_DATA.find(p => p.id === comboPoder1Id)?.icon}</span>
                                                    <span className="text-[8px] font-black text-purple-400 uppercase text-center px-2 truncate w-full">
                                                        {PODERES_SHEREZADE_DATA.find(p => p.id === comboPoder1Id)?.title}
                                                    </span>
                                                </>
                                            ) : (
                                                <i className="fa-solid fa-plus text-xl"></i>
                                            )}
                                        </div>

                                        <div className="text-purple-500/50 text-2xl font-black">+</div>

                                        {/* Slot 2 */}
                                        <div className={`w-24 h-24 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center transition-all duration-500 ${
                                            comboPoder2Id ? 'bg-purple-500/10 border-purple-500/50 scale-110' : 'bg-black/40 border-white/10 text-gray-700'
                                        }`}>
                                            {comboPoder2Id ? (
                                                <>
                                                    <span className="text-3xl mb-1">{PODERES_SHEREZADE_DATA.find(p => p.id === comboPoder2Id)?.icon}</span>
                                                    <span className="text-[8px] font-black text-purple-400 uppercase text-center px-2 truncate w-full">
                                                        {PODERES_SHEREZADE_DATA.find(p => p.id === comboPoder2Id)?.title}
                                                    </span>
                                                </>
                                            ) : (
                                                <i className="fa-solid fa-plus text-xl"></i>
                                            )}
                                        </div>
                                    </div>

                                    <button 
                                        onClick={handleForjarCombo}
                                        disabled={isForging || !comboPoder1Id || !comboPoder2Id}
                                        className="w-full py-5 bg-purple-600 hover:bg-purple-500 disabled:bg-gray-800 disabled:text-gray-600 text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_rgba(168,85,247,0.2)] transition-all transform active:scale-95 flex items-center justify-center gap-3"
                                    >
                                        {isForging ? 'DECODIFICANDO...' : 'FORJAR COMBO'}
                                    </button>

                                    <AnimatePresence>
                                        {comboResultado && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-8 p-6 bg-black/60 rounded-3xl border border-purple-500/30 space-y-4"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Resultado de la Fusión:</span>
                                                    <i className="fa-solid fa-sparkles text-purple-400"></i>
                                                </div>
                                                <p className="text-white text-lg leading-relaxed italic font-medium">
                                                    {comboResultado}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-[2.5rem] space-y-6 text-center">
                                <h4 className="text-xl font-black text-white uppercase tracking-tighter">¿Buscas la Maestría Total?</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    En la Sesión Descubrimiento, calibramos tus ingredientes para forjar los combos que realmente desintegran tus limitaciones.
                                </p>
                                <a 
                                    href="https://ko-fi.com/s/e85f9cd5e1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl transition-all shadow-xl"
                                >
                                    AGENDAR CALIBRACIÓN ($27 USD)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrimorioTacticoSection;