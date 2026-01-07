import React from 'react';
import { useAppContext } from '../context/AppContext';
import { HACKS_DATA } from '../utils/constants';

// Landing Page Sections
import Introduction from '../components/Introduction';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

// Core App Sections
import ArchetypeQuiz from '../components/ArchetypeQuiz';
import HacksSection from '../components/HacksSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactForm from '../components/ContactForm';
import ArchitectDashboard from '../components/ArchitectDashboard';
import GrimorioTacticoSection from '../components/GrimorioTacticoSection';
import SRAPMetronome from '../components/SRAPMetronome';
import OraculoChalamandra from '../components/OraculoChalamandra';
import KitMagistralRPG from '../components/KitMagistralRPG';
import PremiumServices from '../components/PremiumServices';
import CertifiedTech from '../components/CertifiedTech';
import SrapRitual from '../components/SrapRitual';
import Header from '../components/Header';
import WhatsAppFloat from '../components/WhatsAppFloat';
import TheCodex from '../components/TheCodex';
import Confetti from '../components/Confetti';
import ModalManager from '../components/ModalManager';

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
        handleCelebration,
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
            <CertificationsSection completedHacks={completedHacks} onCelebration={handleCelebration} />
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