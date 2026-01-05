import React, { useState } from 'react';
import { Archetype } from '../utils/types';

interface ArchetypeQuizProps {
    onQuizComplete: (archetype: Archetype) => void;
    playSelectSound: () => void;
}

const quizQuestions = [
    {
        question: "Cuando enfrentas un problema complejo, tu primer instinto es:",
        options: {
            'El Arquitecto': "Desglosarlo en sus componentes y crear un plan estructural.",
            'El Alquimista': "Experimentar con diferentes enfoques y sentir la energía de la situación.",
            'El Explorador': "Buscar información externa, ver qué han hecho otros y aventurarte en lo desconocido."
        }
    },
    {
        question: "Tu mayor fortaleza en un equipo es:",
        options: {
            'El Arquitecto': "La capacidad de crear orden, sistemas y predictibilidad.",
            'El Alquimista': "La habilidad de transformar conflictos y catalizar nuevas ideas.",
            'El Explorador': "La audacia para probar nuevos caminos y adaptarme rápidamente."
        }
    },
    {
        question: "Prefieres un entorno que sea:",
        options: {
            'El Arquitecto': "Controlado, optimizado y predecible.",
            'El Alquimista': "Fluido, inspirador y lleno de potencial.",
            'El Explorador': "Dinámico, desafiante y lleno de oportunidades."
        }
    }
];

const ArchetypeQuiz: React.FC<ArchetypeQuizProps> = ({ onQuizComplete, playSelectSound }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<{[key: string]: number}>({ 'El Arquitecto': 0, 'El Alquimista': 0, 'El Explorador': 0 });

    const handleAnswer = (archetype: Archetype) => {
        playSelectSound();
        const newAnswers = { ...answers, [archetype]: answers[archetype] + 1 };
        setAnswers(newAnswers);

        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            const dominantArchetype = Object.keys(newAnswers).reduce((a, b) => newAnswers[a] > newAnswers[b] ? a : b) as Archetype;
            onQuizComplete(dominantArchetype);
        }
    };

    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">DIAGNÓSTICO DE ARQUETIPO</h2>
                <p className="text-xl text-gray-300 mb-12">Descubre tu sistema operativo cognitivo fundamental.</p>

                <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-700 shadow-2xl">
                    <p className="text-2xl font-semibold text-gray-200 mb-8">{quizQuestions[currentQuestion].question}</p>
                    <div className="space-y-6">
                        {Object.entries(quizQuestions[currentQuestion].options).map(([archetype, text]) => (
                            <button 
                                key={archetype}
                                onClick={() => handleAnswer(archetype as Archetype)}
                                className="w-full text-left p-6 bg-gray-800 rounded-xl border-2 border-transparent hover:border-yellow-400 transition-all duration-300 group"
                            >
                                <p className="text-lg text-white font-bold group-hover:text-yellow-300 transition-colors">{text}</p>
                            </button>
                        ))}
                    </div>
                    <div className="mt-10">
                        <p className="text-gray-500 font-semibold">Pregunta {currentQuestion + 1} de {quizQuestions.length}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchetypeQuiz;
