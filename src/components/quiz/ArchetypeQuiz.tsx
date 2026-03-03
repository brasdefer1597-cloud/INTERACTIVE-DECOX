import React, { useState } from 'react';
import { Archetype } from '../../utils/types';
import { QUIZ_QUESTIONS } from '../../utils/constants';

interface ArchetypeQuizProps {
    onQuizComplete: (archetype: Archetype) => void;
    playSelectSound: () => void;
}

const ArchetypeQuiz: React.FC<ArchetypeQuizProps> = ({ onQuizComplete, playSelectSound }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<{[key: string]: number}>({ 'El Arquitecto': 0, 'El Alquimista': 0, 'El Explorador': 0 });
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAnswer = (archetype: Archetype) => {
        playSelectSound();
        setIsAnimating(true);

        const newAnswers = { ...answers, [archetype]: answers[archetype] + 1 };
        setAnswers(newAnswers);

        setTimeout(() => {
            if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setIsAnimating(false);
            } else {
                const dominantArchetype = Object.keys(newAnswers).reduce((a, b) => newAnswers[a] > newAnswers[b] ? a : b) as Archetype;
                onQuizComplete(dominantArchetype);
            }
        }, 300);
    };

    const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

    return (
        <section className="py-20 px-6 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
                <div
                    className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                    DIAGNÓSTICO DE ARQUETIPO
                </h2>
                <p className="text-xl text-gray-400 mb-12 font-medium">
                    Descubre tu sistema operativo cognitivo fundamental.
                </p>

                <div className={`bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    <div className="mb-10 text-left">
                        <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-black rounded-full mb-4 tracking-widest uppercase">
                            Fase 1: Diagnóstico
                        </span>
                        <p className="text-2xl md:text-3xl font-bold text-gray-100 leading-tight">
                            {QUIZ_QUESTIONS[currentQuestion].question}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {Object.entries(QUIZ_QUESTIONS[currentQuestion].options).map(([archetype, text]) => (
                            <button
                                key={archetype}
                                onClick={() => handleAnswer(archetype as Archetype)}
                                className="w-full text-left p-6 bg-gray-800/40 hover:bg-gray-800 border-2 border-transparent hover:border-yellow-500/50 rounded-2xl transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0 mr-4 flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                                        <i className="fa-solid fa-bolt text-gray-400 group-hover:text-black text-sm"></i>
                                    </div>
                                    <p className="text-lg text-gray-300 font-bold group-hover:text-white transition-colors">{text}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="mt-12 flex items-center justify-between">
                        <p className="text-gray-500 font-black text-sm uppercase tracking-widest">
                            Pregunta {currentQuestion + 1} / {QUIZ_QUESTIONS.length}
                        </p>
                        <div className="flex space-x-1">
                            {QUIZ_QUESTIONS.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i === currentQuestion ? 'bg-yellow-500' : i < currentQuestion ? 'bg-yellow-900' : 'bg-gray-800'}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchetypeQuiz;
