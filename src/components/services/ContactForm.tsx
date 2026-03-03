import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<null | 'sending' | 'success' | 'error'>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <section id="contact" className="py-32 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-yellow-500/10 text-yellow-500 text-[0.7rem] font-black rounded-full mb-6 uppercase tracking-[0.3em] border border-yellow-500/20">
                        Fase 3: Diseñar
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
                        Inicia la Invocación
                    </h2>
                    <p className="text-xl text-gray-400 font-medium leading-relaxed">
                        El primer paso no se da, se invoca. Completa el protocolo para iniciar tu decodificación estratégica.
                    </p>
                </div>

                <div className="bg-gray-900/40 backdrop-blur-md p-10 md:p-16 rounded-[3.5rem] border border-gray-800 shadow-2xl relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-yellow-600 to-transparent"></div>

                    {status === 'success' ? (
                        <div className="text-center py-10 animate-[fade-in-up_0.5s_ease-out]">
                            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <i className="fa-solid fa-check text-5xl text-green-500"></i>
                            </div>
                            <h3 className="text-3xl font-black text-white mb-4 italic uppercase tracking-tighter">Protocolo Iniciado</h3>
                            <p className="text-gray-400 text-lg font-medium">Recibirás una señal en tu bandeja de entrada en las próximas 24 horas.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Nombre Completo *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Tu nombre de poder"
                                        className="w-full bg-black/50 border-2 border-gray-800 focus:border-yellow-500 rounded-2xl p-5 text-white outline-none transition-all placeholder:text-gray-700 font-bold"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="donde_enviar_senales@gmail.com"
                                        className="w-full bg-black/50 border-2 border-gray-800 focus:border-yellow-500 rounded-2xl p-5 text-white outline-none transition-all placeholder:text-gray-700 font-bold"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">WhatsApp (Opcional)</label>
                                    <input
                                        type="tel"
                                        placeholder="+52 000 000 0000"
                                        className="w-full bg-black/50 border-2 border-gray-800 focus:border-yellow-500 rounded-2xl p-5 text-white outline-none transition-all placeholder:text-gray-700 font-bold"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Interés Táctico *</label>
                                    <select
                                        required
                                        className="w-full bg-black/50 border-2 border-gray-800 focus:border-yellow-500 rounded-2xl p-5 text-white outline-none transition-all font-bold appearance-none cursor-pointer"
                                    >
                                        <option value="discovery">Sesión Descubrimiento (7)</option>
                                        <option value="kit">Kit Magistral (97)</option>
                                        <option value="total">Transformación Total (500+)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">¿Cuál es tu principal fricción actual? *</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Describe el caos que quieres ordenar..."
                                    className="w-full bg-black/50 border-2 border-gray-800 focus:border-yellow-500 rounded-2xl p-5 text-white outline-none transition-all placeholder:text-gray-700 font-bold resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full group relative overflow-hidden bg-white text-black font-black py-6 rounded-2xl transition-all hover:text-white"
                            >
                                <div className="absolute inset-0 bg-yellow-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                <span className="relative z-10 flex items-center justify-center text-lg uppercase tracking-widest">
                                    {status === 'sending' ? (
                                        <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                                    ) : (
                                        <i className="fa-solid fa-bolt mr-2"></i>
                                    )}
                                    {status === 'sending' ? 'Sincronizando...' : 'Iniciar Protocolo de Contacto'}
                                </span>
                            </button>

                            <p className="text-center text-gray-600 text-[0.65rem] font-black uppercase tracking-widest">
                                Al enviar, aceptas que procesemos tus datos con frialdad analítica y rigor táctico.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
