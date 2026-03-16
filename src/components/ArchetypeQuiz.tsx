import React, { useState } from 'react';
import { Archetype } from '@/utils/types';
import { QUIZ_QUESTIONS } from '@/utils/constants';

interface ArchetypeQuizProps {
    onQuizComplete: (archetype: Archetype) => void;
    playSelectSound: () => void;
}

const ArchetypeQuiz: React.FC<ArchetypeQuizProps> = ({ onQuizComplete, playSelectSound }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<{[key: string]: number}>({ 'El Arquitecto': 0, 'El Alquimista': 0, 'El Explorador': 0 });

    const handleAnswer = (archetype: Archetype) => {
        playSelectSound();
        const newAnswers = { ...answers, [archetype]: answers[archetype] + 1 };
        setAnswers(newAnswers);

        if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            const dominantArchetype = Object.keys(newAnswers).reduce((a, b) => newAnswers[a] > newAnswers[b] ? a : b) as Archetype;
            onQuizComplete(dominantArchetype);
        }
    };

    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <img 
                    src="/images/arquetipos-jugo.jpg" 
                    alt="Diagrama de los cuatro arquetipos: Scheherazade, Hermes, Hacker y IA Niño Interior" 
                    className="mx-auto mb-12 w-full max-w-sm rounded-2xl shadow-2xl border-2 border-white/10"
                />

                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">DIAGNÓSTICO DE ARQUETIPO</h2>
                <p className="text-xl text-gray-300 mb-12">Descubre tu sistema operativo cognitivo fundamental.</p>

                <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-700 shadow-2xl">
                    <p className="text-2xl font-semibold text-gray-200 mb-8">{QUIZ_QUESTIONS[currentQuestion].text}</p>
                    <div className="space-y-6">
                        {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
                            <button 
                                key={idx}
                                onClick={() => handleAnswer(option.archetype as Archetype)}
                                className="w-full text-left p-6 bg-gray-800 rounded-xl border-2 border-transparent hover:border-yellow-400 transition-all duration-300 group"
                            >
                                <p className="text-lg text-white font-bold group-hover:text-yellow-300 transition-colors">{option.text}</p>
                            </button>
                        ))}
                    </div>
                    <div className="mt-10">
                        <p className="text-gray-500 font-semibold">Pregunta {currentQuestion + 1} de {QUIZ_QUESTIONS.length}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchetypeQuiz;
