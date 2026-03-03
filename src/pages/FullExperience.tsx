import React from 'react';
import { useAppContext } from '../context/AppContext';
import { HACKS_DATA } from '../utils/constants';

// Layout & Navigation
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Sections
import Introduction from '../components/sections/Introduction';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import Faq from '../components/sections/Faq';
import TheCodex from '../components/sections/TheCodex';
import CertifiedTech from '../components/sections/CertifiedTech';

// Core Features
import ArchetypeQuiz from '../components/quiz/ArchetypeQuiz';
import HacksSection from '../components/hacks/HacksSection';
import GrimorioTacticoSection from '../components/hacks/GrimorioTacticoSection';
import ArchitectDashboard from '../components/dashboard/ArchitectDashboard';
import OraculoChalamandra from '../components/oracle/OraculoChalamandra';
import KitMagistralRPG from '../components/rpg/KitMagistralRPG';
import SRAPMetronome from '../components/srap/SRAPMetronome';
import SrapRitual from '../components/srap/SrapRitual';

// Services
import PremiumServices from '../components/services/PremiumServices';
import ContactForm from '../components/services/ContactForm';

// Shared
import ModalManager from '../components/shared/ModalManager';
import Confetti from '../components/shared/Confetti';
import WhatsAppFloat from '../components/shared/WhatsAppFloat';

const FullExperience = () => {
    const {
        completedHacks,
        celebrate,
        dominantArchetype,
        aiDirective,
        isDirectiveLoading,
        startAudioContext,
        playUIClick,
        playQuizSelect,
        playComboReveal,
        handleGenerateDirective,
        showServiceModal,
        showHackModal,
        showActivationModal,
        showSrapModal,
        handleQuizComplete,
        handleRetakeQuiz
    } = useAppContext();

    return (
        <div onClick={startAudioContext}>
            {celebrate && <Confetti />}
            <Header completedCount={completedHacks.size} totalCount={HACKS_DATA.length} />

            <Introduction />
            <HowItWorks />

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
                hacks={HACKS_DATA}
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

            <GrimorioTacticoSection />
            <OraculoChalamandra onComboReveal={playComboReveal} />
            <KitMagistralRPG onOpenModule={showHackModal} />
            <SrapRitual onActivate={showSrapModal} playUIClick={playUIClick} />
            <SRAPMetronome />
            <TheCodex />
            <Testimonials />
            <PremiumServices onServiceClick={showServiceModal} playUIClick={playUIClick} />
            <ContactForm />
            <CertifiedTech />
            <Faq />

            <Footer />
            <ModalManager />
            <WhatsAppFloat />
        </div>
    );
};

export default FullExperience;
