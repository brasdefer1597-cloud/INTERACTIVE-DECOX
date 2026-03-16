import React, { useState } from 'react';
import { generateContactConfirmation } from '@/services/geminiService';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
    name: string;
    email: string;
    phone: string;
    objective: string;
    service: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        objective: '',
        service: 'Transformación Total'
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [message, setMessage] = useState('');
    const [formContainerClass, setFormContainerClass] = useState('contact-form-container');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.objective) {
            setStatus('error');
            setMessage('Por favor, completa los campos obligatorios.');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            // Simulate sending data to a server
            await new Promise(resolve => setTimeout(resolve, 1500));

            const personalizedMessage = await generateContactConfirmation(formData.objective);
            
            setMessage(`¡SOLICITUD RECIBIDA! ${personalizedMessage}`);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', objective: '', service: 'Transformación Total' });
            
            setFormContainerClass('contact-form-container form-pulse-animation');
            setTimeout(() => setFormContainerClass('contact-form-container'), 1000);

        } catch (error) {
            console.error("Error submitting form or calling Gemini API:", error);
            setStatus('error');
            setMessage('Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.');
        }
    };


    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
             <h2 className="text-4xl font-black text-center mb-6 text-purple-400">
                <i className="fa-solid fa-feather-pointed mr-4"></i>APLICA A TU TRANSFORMACIÓN
            </h2>
            <p className="text-xl text-center mb-12 text-gray-300 font-semibold italic">
               El primer paso no se da, se invoca. Llena el formulario para iniciar tu decodificación.
            </p>
            <div className={formContainerClass}>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-bold text-gray-300 mb-2">Nombre Completo *</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required aria-label="Nombre Completo" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-bold text-gray-300 mb-2">Email *</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required aria-label="Email" />
                        </div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="phone" className="block text-lg font-bold text-gray-300 mb-2">Teléfono / WhatsApp (Opcional)</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} aria-label="Teléfono o WhatsApp" />
                        </div>
                        <div>
                             <label htmlFor="service" className="block text-lg font-bold text-gray-300 mb-2">Servicio de Interés</label>
                             <select id="service" name="service" value={formData.service} onChange={handleChange} aria-label="Servicio de Interés">
                                 <option>Transformación Total</option>
                                 <option>Kit Magistral</option>
                                 <option>Sesión Descubrimiento</option>
                             </select>
                        </div>
                    </div>
                    <div className="mb-8">
                        <label htmlFor="objective" className="block text-lg font-bold text-gray-300 mb-2">¿Cuál es tu principal objetivo o fricción actual? *</label>
                        <textarea id="objective" name="objective" rows={5} value={formData.objective} onChange={handleChange} required aria-label="Objetivo o fricción actual"></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black py-5 px-6 rounded-xl transition-all text-xl pulse-glow disabled:opacity-70 disabled:cursor-not-allowed btn-dynamic">
                        {status === 'loading' ? (
                            <><i className="fa-solid fa-spinner fa-spin mr-3"></i> DECODIFICANDO...</>
                        ) : 'INICIAR PROTOCOLO DE CONTACTO'}
                    </button>
                </form>
                 {message && (
                    <div className={`mt-6 p-4 rounded-lg text-center font-bold text-lg ${status === 'success' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
                        {message}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContactForm;
