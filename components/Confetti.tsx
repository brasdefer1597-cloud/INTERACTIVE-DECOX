import React, { useEffect, useState } from 'react';

const Confetti: React.FC = () => {
    const [pieces, setPieces] = useState<any[]>([]);

    useEffect(() => {
        const newPieces = Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            style: {
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 0.5}s`,
                backgroundColor: ['#fde047', '#f97316', '#ec4899', '#8b5cf6'][Math.floor(Math.random() * 4)],
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                opacity: Math.random() * 0.5 + 0.5,
                transform: `rotate(${Math.random() * 360}deg)`
            }
        }));
        setPieces(newPieces);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
            {pieces.map(p => (
                 <div
                    key={p.id}
                    className="absolute top-[-20px] rounded-full animate-fall"
                    style={p.style}
                />
            ))}
            <style>{`
                @keyframes fall {
                    to {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }
                .animate-fall {
                    animation: fall linear forwards;
                }
            `}</style>
        </div>
    );
};

export default Confetti;
