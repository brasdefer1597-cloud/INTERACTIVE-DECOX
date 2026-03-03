import React, { useState, useEffect } from 'react';
import { generatePostPaymentDirective } from '../services/geminiService';
import { Archetype } from '../utils/types';

interface PostPaymentPageProps {
    serviceName: string;
    archetype: Archetype | null;
}

const PostPaymentPage: React.FC<PostPaymentPageProps> = ({ serviceName, archetype }) => {
    const [directive, setDirective] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDirective = async () => {
            setIsLoading(true);
            try {
                const response = await generatePostPaymentDirective(serviceName, archetype);
                setDirective(response.text);
            } catch (error) {
                console.error(error);
                setDirective("Tu camino ha comenzado. Prepara tu mente para la transformación. Los detalles de tu sesión llegarán pronto a tu email.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchDirective();
    }, [serviceName, archetype]);
    
    return (
        <div className="text-white text-center space-y-8">
            <h4 className="text-3xl font-bold text-green-400">Transacción Completada</h4>
            <p className="text-xl text-gray-300 leading-relaxed">
                Has asegurado tu <strong className="text-white">{serviceName}</strong>. Este es el punto de no retorno. La decisión ya fue tomada. Ahora solo queda la ejecución.
            </p>

            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 min-h-[150px] flex items-center justify-center">
                {isLoading ? (
                     <i className="fa-solid fa-spinner fa-spin text-3xl text-yellow-400"></i>
                ) : (
                    <p className="text-lg italic text-yellow-300 leading-relaxed">{directive}</p>
                )}
            </div>

            <div>
                <p className="text-lg text-gray-300">Recibirás un email en las próximas horas con los siguientes pasos para agendar tu sesión.</p>
                <p className="text-gray-400 mt-2">Revisa tu carpeta de spam si no lo ves.</p>
            </div>
        </div>
    );
};

export default PostPaymentPage;
