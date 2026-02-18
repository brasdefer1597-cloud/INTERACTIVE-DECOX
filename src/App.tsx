import React, { useState, lazy, Suspense } from 'react';
import { AppProvider } from './context/AppContext';

// Lazy load experiences for better initial load performance
const FullExperience = lazy(() => import('./layout/FullExperience'));
const DemoExperience = lazy(() => import('./layout/DemoExperience'));

const App = () => {
    // Optimized initialization: Check URL param before first render to avoid loading unnecessary chunks
    const [mode] = useState<'full' | 'demo'>(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('mode') === 'demo' ? 'demo' : 'full';
    });

    return (
        <AppProvider>
            <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen bg-black text-yellow-500">
                    <div className="text-2xl font-bold animate-pulse">
                        <i className="fa-solid fa-bolt mr-2"></i> Cargando experiencia...
                    </div>
                </div>
            }>
                {mode === 'full' ? <FullExperience /> : <DemoExperience />}
            </Suspense>
        </AppProvider>
    );
};

export default App;
