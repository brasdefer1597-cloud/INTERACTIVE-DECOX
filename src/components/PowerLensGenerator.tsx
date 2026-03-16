import React, { useState } from 'react';
import { PODERES_SHEREZADE_DATA } from '@/utils/constants';
import { generateStrategicDirective } from '@/services/geminiService';
import { motion } from 'motion/react';

const PowerLensGenerator: React.FC = () => {
  const [selectedPoder, setSelectedPoder] = useState(PODERES_SHEREZADE_DATA[0].title);
  const [selectedDominio, setSelectedDominio] = useState('Negocios');
  const [generatedDirective, setGeneratedDirective] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setGeneratedDirective('');
    try {
      const directive = await generateStrategicDirective(selectedPoder, selectedDominio, 'Personal');
      setGeneratedDirective(directive);
    } catch (error) {
      console.error("Error generating directive:", error);
      setGeneratedDirective("Error al generar la directiva. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="power-lens-generator py-12 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-black tracking-tighter mb-4"
        >
          Generador de Lentes de Poder
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Combina un Poder de Sherezade con un Dominio de tu vida para generar una Directiva Estratégica y enfocar tu energía.
        </motion.p>

        <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <div className="w-full">
            <label htmlFor="poder-select" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Poder</label>
            <select 
              id="poder-select"
              value={selectedPoder}
              onChange={(e) => setSelectedPoder(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            >
              {PODERES_SHEREZADE_DATA.map(poder => (
                <option key={poder.id} value={poder.title}>{poder.title}</option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="dominio-select" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Dominio</label>
            <select 
              id="dominio-select"
              value={selectedDominio}
              onChange={(e) => setSelectedDominio(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            >
              <option>Negocios</option>
              <option>Relaciones</option>
              <option>Salud</option>
              <option>Finanzas</option>
              <option>Creatividad</option>
            </select>
          </div>
        </div>

        <button 
          onClick={handleGenerate}
          disabled={isLoading}
          className="px-8 py-4 bg-cyan-400 text-black rounded-xl font-bold uppercase tracking-wider hover:bg-cyan-300 transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? 'Generando...' : 'Generar Directiva'}
        </button>

        {generatedDirective && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-12 p-8 bg-white/5 border border-white/10 rounded-2xl max-w-3xl mx-auto text-left"
          >
            <h3 className="font-bold text-xl text-cyan-400 mb-4">Directiva Estratégica:</h3>
            <p className="text-lg text-gray-300 whitespace-pre-wrap">{generatedDirective}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PowerLensGenerator;
