import React, { useState } from 'react';

const faqData = [
    {
        question: "¿Esto es una terapia o coaching?",
        answer: "Ni lo uno ni lo otro. Es reingeniería cognitiva táctica. No nos enfocamos en el 'sentir' por el placer de sentir, sino en el 'funcionar'. Es el puente entre el caos creativo (Chola) y la estructura estratégica (Fresa)."
    },
    {
        question: "¿Cuánto tiempo se necesita para ver resultados?",
        answer: "Los Hacks Magistrales se activan instantáneamente. La reconfiguración completa toma tiempo, pero cada 'activación' desplaza tu realidad de inmediato. El Kit Magistral está diseñado para consolidar esto en 30 días."
    },
    {
        question: "¿Es para emprendedores o para ejecutivos?",
        answer: "Es para cualquier humano que opere en entornos de alta presión y necesite una ventaja cognitiva injusta. Si tienes que tomar decisiones, liderar o crear, Chalamandra es tu sistema operativo."
    },
    {
        question: "¿Qué pasa si no me identifico con mi arquetipo?",
        answer: "El arquetipo es un punto de partida, no una celda. Sirve para entender tu sesgo por defecto. El objetivo final es la fluidez total: poder habitar los tres arquetipos según la demanda del entorno."
    }
];

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-800">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-8 flex justify-between items-center text-left group"
            >
                <span className={`text-xl md:text-2xl font-black italic uppercase tracking-tighter transition-colors ${isOpen ? 'text-yellow-500' : 'text-white group-hover:text-yellow-500/70'}`}>
                    {question}
                </span>
                <div className={`w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-yellow-500 border-yellow-500 rotate-45' : 'group-hover:border-gray-600'}`}>
                    <i className={`fa-solid fa-plus text-sm ${isOpen ? 'text-black' : 'text-gray-600'}`}></i>
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-10' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 text-lg leading-relaxed font-medium max-w-3xl">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    return (
        <section className="py-32 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <span className="text-yellow-500 font-black tracking-[0.4em] text-[0.6rem] uppercase mb-4 block">
                        Claridad Táctica
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
                        Preguntas Frecuentes
                    </h2>
                </div>

                <div className="border-t border-gray-800">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
