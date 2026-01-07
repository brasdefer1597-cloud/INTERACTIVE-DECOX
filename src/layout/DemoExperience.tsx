import React from 'react';
import { useAppContext } from '../context/AppContext';
import { HACKS_DATA } from '../utils/constants';

// Landing Page Sections
import Introduction from '../components/Introduction';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

// Core App Sections
import ArchetypeQuiz from '../components/ArchetypeQuiz';
import ArchitectDashboard from '../components/ArchitectDashboard';
import Header from '../components/Header';
import ModalManager from '../components/ModalManager';
import Confetti from '../components/Confetti';
import HacksSection from '../components/HacksSection';

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

            <div className="bg-yellow-900/20 border-y-2 border-yellow-500/50 p-4 text-center">
                <p className="text-yellow-300 font-bold">MODO DEMOSTRACIÓN</p>
                <p className="text-gray-400 text-sm">Algunas funciones están limitadas.</p>
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

            {/* In Demo, we might show Hacks but maybe locked or limited? For now showing same hacks section but maybe with a limited set in future or just the visual */}
             <HacksSection
                hacks={HACKS_DATA.slice(0, 3)} // Show only first 3 hacks in demo
                completedHacks={completedHacks}
                onActivateClick={showActivationModal}
                onAmplifyClick={showHackModal}
                playUIClick={playUIClick}
            />

            {dominantArchetype && (
                <section className="py-10 px-6 max-w-4xl mx-auto text-center">
                     <button onClick={handleRetakeQuiz} className="inline-block px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-yellow-300 border-2 border-yellow-300 font-black rounded-2xl shadow-2xl hover:bg-gray-700 transition-all text-lg btn-dynamic">
                        <i className="fa-solid fa-repeat mr-2"></i> REHACER DIAGNÓSTICO DE ARQUETIPO
                    </button>
                </section>
            )}

            <section className="py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-10 border-2 border-purple-500 shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">¿Listo para la Experiencia Completa?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Desbloquea el Grimorio Táctico, el Oráculo, el Kit Magistral RPG, Certificaciones y mucho más.
                    </p>
                    <a href="/?mode=full" className="inline-block bg-white text-purple-900 font-black text-xl py-4 px-10 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-lg">
                        ACCEDER A VERSIÓN COMPLETA
                    </a>
                </div>
            </section>

            <Footer />
            <ModalManager />
        </div>
    );
};

export default DemoExperience;