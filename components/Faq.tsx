import React, { useState } from 'react';

const faqData = [
    {
        question: "¿Esto es una terapia o coaching?",
        answer: "Ni lo uno ni lo otro. Chalamandra Magistral es un sistema de reingeniería cognitiva. No exploramos el 'porqué' de tu pasado; instalamos nuevos 'cómo' para tu futuro. Es táctico, no terapéutico."
    },
    {
        question: "¿Cuánto tiempo se necesita para ver resultados?",
        answer: "La claridad llega en la primera sesión. Los resultados tangibles, al aplicar el primer Hack. La maestría es un proceso continuo. Este sistema está diseñado para velocidad y momentum, no para un progreso lento y lineal."
    },
    {
        question: "¿Es para emprendedores o para ejecutivos?",
        answer: "Es para cualquiera que opere en entornos de alta incertidumbre y alta exigencia. El sistema operativo es universal; las aplicaciones son específicas para tu campo de batalla."
    },
    {
        question: "¿Qué pasa si no me identifico con mi arquetipo?",
        answer: "El diagnóstico es una hipótesis de trabajo. En la Sesión de Descubrimiento validamos y calibramos tu perfil. A veces, el arquetipo que menos esperas es el que más necesitas integrar."
    }
];

// FIX: Define props interface and use React.FC for proper component typing, resolving the issue with the 'key' prop.
interface FaqItemProps {
    q: string;
    a: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-white"
            >
                <span>{q}</span>
                <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                     <p className="pt-4 text-gray-300 leading-relaxed">{a}</p>
                </div>
            </div>
        </div>
    );
};

const Faq = () => {
    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-black text-center mb-12 text-white">
                    <i className="fa-solid fa-circle-question mr-3"></i> PREGUNTAS FRECUENTES
                </h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} q={item.question} a={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;