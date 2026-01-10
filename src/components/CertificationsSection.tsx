import React, { useEffect } from 'react';
import { CERTIFICATIONS_DATA } from '../utils/constants';

interface CertificationsSectionProps {
    completedHacks: Set<number>;
    onCelebration: () => void;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ completedHacks, onCelebration }) => {
    
    useEffect(() => {
        CERTIFICATIONS_DATA.forEach(cert => {
            const isUnlocked = cert.requiredHacks.every(id => completedHacks.has(id));
            const wasUnlockedPreviously = localStorage.getItem(`cert_${cert.id}_unlocked`) === 'true';

            if (isUnlocked && !wasUnlockedPreviously) {
                onCelebration();
                localStorage.setItem(`cert_${cert.id}_unlocked`, 'true');
            }
        });
    }, [completedHacks, onCelebration]);

    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-black text-center mb-6 text-white">
                    <i className="fa-solid fa-award mr-3"></i> CERTIFICACIONES DE MAESTRÍA
                </h2>
                <p className="text-xl text-center mb-12 text-gray-300 font-semibold">
                    Asciende en los rangos dominando las constelaciones de Hacks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATIONS_DATA.map(cert => {
                        const isUnlocked = cert.requiredHacks.every(id => completedHacks.has(id));
                        return (
                            <div key={cert.id} className={`p-8 rounded-2xl transition-all duration-500 ${isUnlocked ? 'bg-gradient-to-br from-yellow-900/50 to-gray-900 border-2 border-yellow-400 shadow-2xl shadow-yellow-500/20' : 'bg-gray-900 border border-gray-700'}`}>
                                <i className={`${cert.icon} text-5xl mb-6 ${isUnlocked ? 'text-yellow-400' : 'text-gray-500'}`}></i>
                                <h3 className={`text-2xl font-bold mb-3 ${isUnlocked ? 'text-white' : 'text-gray-400'}`}>{cert.title}</h3>
                                <p className={`mb-4 ${isUnlocked ? 'text-gray-300' : 'text-gray-500'}`}>{cert.description}</p>
                                {isUnlocked && (
                                    <div className="mt-4 pt-4 border-t border-yellow-400/30">
                                        <p className="font-bold text-green-400"><i className="fa-solid fa-check-circle mr-2"></i> Desbloqueado</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
