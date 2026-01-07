import React, { useState, useEffect } from 'react';

interface HeaderProps {
    completedCount: number;
    totalCount: number;
}

const Header: React.FC<HeaderProps> = ({ completedCount, totalCount }) => {
    const [heroText, setHeroText] = useState('');
    const fullHeroText = "El Sistema Operativo del 1%";
    const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullHeroText.length) {
                setHeroText(fullHeroText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
        return () => clearInterval(typingInterval);
    }, [fullHeroText]);

    return (
        <header className="text-center py-20 px-6 hero-gradient">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-black mb-4 premium-glow">Chalamandra Magistral</h1>
                <p className="text-2xl md:text-3xl font-semibold mb-8 text-white h-10">{heroText}</p>
                <div className="max-w-md mx-auto">
                     <div className="h-4 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                        <div 
                            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-700 ease-out" 
                            style={{ width: `${progressPercent}%` }}>
                        </div>
                    </div>
                    <p className="text-lg text-white/80 mt-4 font-semibold">{completedCount}/{totalCount} Hacks Magistrales Dominados ({progressPercent}%)</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
