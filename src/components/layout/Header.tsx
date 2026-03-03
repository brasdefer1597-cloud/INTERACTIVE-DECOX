import React, { useState, useEffect } from 'react';

interface HeaderProps {
    completedCount: number;
    totalCount: number;
}

const Header: React.FC<HeaderProps> = ({ completedCount, totalCount }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const progress = (completedCount / totalCount) * 100;

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-gray-900' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black italic text-xl shadow-lg shadow-white/10">
                        C
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-lg font-black text-white italic tracking-tighter uppercase leading-none">Chalamandra</h1>
                        <p className="text-[0.5rem] font-bold text-gray-500 uppercase tracking-[0.2em]">Magistral</p>
                    </div>
                </div>

                <div className="flex items-center space-x-8">
                    <div className="hidden md:flex flex-col items-end space-y-1">
                        <div className="flex items-center space-x-2">
                            <span className="text-[0.6rem] font-black text-gray-500 uppercase tracking-widest">Maestría:</span>
                            <span className="text-xs font-black text-yellow-500 tracking-widest">RANK {completedCount} / {totalCount}</span>
                        </div>
                        <div className="w-40 h-1 bg-gray-900 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-yellow-500 transition-all duration-1000 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    <a
                        href="#contact"
                        className="px-6 py-3 bg-white text-black text-[0.65rem] font-black uppercase tracking-widest rounded-xl hover:bg-yellow-500 transition-all shadow-lg shadow-white/5"
                    >
                        Solicitar Acceso
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
