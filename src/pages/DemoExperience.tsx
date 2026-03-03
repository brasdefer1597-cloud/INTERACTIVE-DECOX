import React from 'react';
import { useAppContext } from '../context/AppContext';
import { HACKS_DATA } from '../utils/constants';

// Layout & Navigation
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Sections
import Introduction from '../components/sections/Introduction';
import HowItWorks from '../components/sections/HowItWorks';

// Core Features
import ArchetypeQuiz from '../components/quiz/ArchetypeQuiz';
import HacksSection from '../components/hacks/HacksSection';
import ArchitectDashboard from '../components/dashboard/ArchitectDashboard';

// Shared
import ModalManager from '../components/shared/ModalManager';
import Confetti from '../components/shared/Confetti';

const DemoExperience = () => {
    const {
        completedHacks,
        celebrate,
        dominantArchetype,
        aiDirective,
        isDirectiveLoading,
        startAudioContext,
        playUIClick,
        playQuizSelect,
        handleGenerateDirective,
        handleQuizComplete,
        handleRetakeQuiz,
        showActivationModal,
        showHackModal
    } = useAppContext();

    return (
        <div onClick={startAudioContext}>
            {celebrate && <Confetti />}
            <Header completedCount={completedHacks.size} totalCount={HACKS_DATA.length} />

            <Introduction />
            <HowItWorks />

            <div className="bg-yellow-900/20 border-y-2 border-yellow-500/50 p-6 text-center backdrop-blur-sm">
                <p className="text-yellow-500 font-black tracking-widest uppercase text-xs mb-1">Modo Demostración</p>
                <p className="text-gray-400 text-sm font-medium">Estás explorando una versión limitada del sistema operativo.</p>
            </div>

            {!dominantArchetype ? (
                <div id="dashboard">
                    <ArchetypeQuiz onQuizComplete={handleQuizComplete} playSelectSound={playQuizSelect}/>
                </div>
            ) : (
                <ArchitectDashboard
                    completedHacks={completedHacks}
                    dominantArchetype={dominantArchetype}
                    onGenerateDirective={handleGenerateDirective}
                    aiDirective={aiDirective}
                    isDirectiveLoading={isDirectiveLoading}
                />
            )}

             <HacksSection
                hacks={HACKS_DATA.slice(0, 3)}
                completedHacks={completedHacks}
                onActivateClick={showActivationModal}
                onAmplifyClick={showHackModal}
                playUIClick={playUIClick}
            />

            {dominantArchetype && (
                <section className="py-10 px-6 max-w-4xl mx-auto text-center">
                     <button onClick={handleRetakeQuiz} className="inline-block px-8 py-4 bg-gray-900 text-yellow-500 border-2 border-yellow-500 font-black rounded-2xl shadow-2xl hover:bg-gray-800 transition-all text-sm tracking-widest uppercase">
                        <i className="fa-solid fa-repeat mr-2"></i> Rehacer Diagnóstico
                    </button>
                </section>
            )}

            <section className="py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-12 md:p-20 border border-gray-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5 text-9xl text-white">
                        <i className="fa-solid fa-unlock"></i>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic tracking-tighter uppercase">¿Listo para la Maestría?</h2>
                    <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
                        Desbloquea el Grimorio Táctico, el Oráculo del 1%, el Kit Magistral RPG y el Códice completo.
                    </p>
                    <a href="/?mode=full" className="inline-block bg-white text-black font-black text-lg py-5 px-12 rounded-2xl hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest">
                        Acceder Versión Completa
                    </a>
                </div>
            </section>

            <Footer />
            <ModalManager />
        </div>
    );
};

export default DemoExperience;
