import React, { useState, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import FullExperience from './layout/FullExperience';
import DemoExperience from './layout/DemoExperience';

const App = () => {
    const [mode, setMode] = useState<'full' | 'demo'>('full');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const modeParam = params.get('mode');
        if (modeParam === 'demo') {
            setMode('demo');
        } else {
            setMode('full');
        }
    }, []);

    return (
        <AppProvider>
            {mode === 'full' ? <FullExperience /> : <DemoExperience />}
        </AppProvider>
    );
};

export default App;