import React, { useState, lazy, Suspense } from 'react';
import { AppProvider } from './context/AppContext';

// Lazy load experiences for better initial load performance
const FullExperience = lazy(() => import('./pages/FullExperience'));
const DemoExperience = lazy(() => import('./pages/DemoExperience'));

const App = () => {
    const [mode] = useState<'full' | 'demo'>(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('mode') === 'demo' ? 'demo' : 'full';
    });

    return (
        <AppProvider>
            <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen bg-black text-yellow-500">
                    <div className="text-2xl font-bold animate-pulse uppercase tracking-[0.3em]">
                        <i className="fa-solid fa-bolt mr-3"></i> Sincronizando...
                    </div>
                </div>
            }>
                {mode === 'full' ? <FullExperience /> : <DemoExperience />}
            </Suspense>
        </AppProvider>
    );
};

export default App;
