import React, { useState, useEffect } from 'react';
import { generatePostPaymentDirective } from '../services/geminiService';
import { Archetype, ServiceType } from '../utils/types';

interface PostPaymentPageProps {
    serviceName: ServiceType;
    archetype: Archetype | null;
}

const PostPaymentPage: React.FC<PostPaymentPageProps> = ({ serviceName, archetype }) => {
    const [directive, setDirective] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDirective = async () => {
            setIsLoading(true);
            try {
                const result = await generatePostPaymentDirective(serviceName, archetype);
                setDirective(result);
            } catch (error) {
                console.error(error);
                setDirective("Tu camino ha comenzado. Prepara tu mente para la transformación. Los detalles de tu sesión llegarán pronto a tu email.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchDirective();
    }, [serviceName, archetype]);

    const renderDeliveryAction = () => {
        switch (serviceName) {
            case 'discovery':
                return (
                    <div className="space-y-4">
                        <p className="text-lg text-gray-300">Has desbloqueado tu **Diagnóstico Maestro**. El siguiente paso es agendar tu sesión de 90 minutos.</p>
                        <a 
                            href="https://calendly.com/chalamandra/discovery" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-yellow-500 text-black font-black rounded-xl shadow-xl hover:bg-yellow-400 transition-all transform hover:scale-105"
                        >
                            <i className="fa-solid fa-calendar-days mr-2"></i> AGENDAR SESIÓN AHORA
                        </a>
                    </div>
                );
            case 'magistral':
                return (
                    <div className="space-y-4">
                        <p className="text-lg text-gray-300">El **Kit Magistral** está listo para ser desplegado. Accede a tu arsenal táctico y prepárate para la primera sesión.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="#" 
                                className="inline-block px-8 py-4 bg-purple-600 text-white font-black rounded-xl shadow-xl hover:bg-purple-500 transition-all transform hover:scale-105"
                            >
                                <i className="fa-solid fa-download mr-2"></i> DESCARGAR KIT (PDF)
                            </a>
                            <a 
                                href="https://wa.me/yournumber" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 bg-green-600 text-white font-black rounded-xl shadow-xl hover:bg-green-500 transition-all transform hover:scale-105"
                            >
                                <i className="fa-brands fa-whatsapp mr-2"></i> UNIRSE A 'LA FORJA'
                            </a>
                        </div>
                    </div>
                );
            case 'total':
                return (
                    <div className="space-y-4">
                        <p className="text-lg text-gray-300">Has iniciado el protocolo de **Transformación Total**. Un estratega senior se pondrá en contacto contigo en las próximas 24 horas.</p>
                        <a 
                            href="https://wa.me/yournumber?text=Hola,%20he%20iniciado%20mi%20Transformación%20Total" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-pink-600 text-white font-black rounded-xl shadow-xl hover:bg-pink-500 transition-all transform hover:scale-105"
                        >
                            <i className="fa-solid fa-user-tie mr-2"></i> HABLAR CON MI ESTRATEGA
                        </a>
                    </div>
                );
            default:
                return null;
        }
    };
    
    return (
        <div className="text-white text-center space-y-8">
            <h4 className="text-3xl font-bold text-green-400">Transacción Completada</h4>
            <p className="text-xl text-gray-300 leading-relaxed">
                Has asegurado tu <strong className="text-white uppercase">{serviceName}</strong>. Este es el punto de no retorno.
            </p>

            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 min-h-[150px] flex items-center justify-center">
                {isLoading ? (
                     <i className="fa-solid fa-spinner fa-spin text-3xl text-yellow-400"></i>
                ) : (
                    <p className="text-lg italic text-yellow-300 leading-relaxed">{directive}</p>
                )}
            </div>

            <div className="py-6 border-t border-gray-700">
                <h5 className="text-xl font-bold mb-6 text-white">ACCIONES DE ENTREGA INMEDIATA:</h5>
                {renderDeliveryAction()}
            </div>

            <div className="text-sm text-gray-400">
                <p>También hemos enviado un respaldo de esta información a tu email.</p>
                <p className="mt-1 italic">Revisa tu carpeta de spam si no lo ves en los próximos 5 minutos.</p>
            </div>
        </div>
    );
};

export default PostPaymentPage;
