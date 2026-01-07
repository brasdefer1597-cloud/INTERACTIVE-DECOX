import React, { useState, useEffect } from 'react';
import { HACKS_DATA, MANDAMIENTOS, COMBOS } from '../utils/constants';
import { Hack } from '../utils/types';

const PowerUpCard: React.FC<{ hack: Hack; onSelect: (id: number) => void; isSelected: boolean }> = ({ hack, onSelect, isSelected }) => (
    <div 
        className={`power-up-card ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelect(hack.id)}
    >
        <div className="flex items-center justify-between mb-3">
            <h4 className={`text-xl font-bold ${hack.colorClass}`}><i className={`${hack.icon} mr-2`}></i>{hack.title}</h4>
            <span className="text-3xl font-black text-white/40">{hack.id}</span>
        </div>
        <p className="text-gray-300 italic text-center">"{MANDAMIENTOS[hack.id]}"</p>
    </div>
);

interface OraculoChalamandraProps {
    onComboReveal: () => void;
}

const OraculoChalamandra: React.FC<OraculoChalamandraProps> = ({ onComboReveal }) => {
    const [selected, setSelected] = useState<number[]>([]);
    const [combo, setCombo] = useState<{ name: string; description: string } | null>(null);

    const handleSelect = (id: number) => {
        setSelected(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            }
            if (prev.length < 2) {
                return [...prev, id];
            }
            return [prev[0], id];
        });
    };

    useEffect(() => {
        if (selected.length === 2) {
            const sortedIds = [...selected].sort((a, b) => a - b);
            const key = `${sortedIds[0]}-${sortedIds[1]}`;
            const newCombo = COMBOS[key] || { name: "Fusión Desconocida", description: "La combinación de estos poderes crea una sinergia aún no documentada. Explora su potencial. El territorio inexplorado es donde reside la verdadera ventaja." };
            setCombo(newCombo);
            onComboReveal();
        } else {
            setCombo(null);
        }
    }, [selected, onComboReveal]);

    return (
        <section className="oraculo-container py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-6 premium-glow">
                <i className="fa-solid fa-dice-d20 mr-4"></i>ORÁCULO DEL 1%: FORJA TU COMBO
            </h2>
            <p className="text-xl text-center text-gray-400 mb-12 italic">
                La maestría no es dominar un poder, es fusionarlos. Selecciona dos para revelar una estrategia combinada.
            </p>

            <div className="power-up-grid">
                {HACKS_DATA.map(hack => (
                    <PowerUpCard
                        key={hack.id}
                        hack={hack}
                        isSelected={selected.includes(hack.id)}
                        onSelect={handleSelect}
                    />
                ))}
            </div>

            {combo && (
                <div className={`combo-result-card ${combo ? 'visible' : ''}`}>
                    <h3 className="text-3xl font-black text-yellow-300 mb-4 flex items-center">
                        <i className="fa-solid fa-atom fa-spin mr-3"></i>COMBO ALQUÍMICO: {combo.name}
                    </h3>
                    <p className="text-lg text-gray-200 leading-relaxed">{combo.description}</p>
                </div>
            )}
        </section>
    );
};

export default OraculoChalamandra;