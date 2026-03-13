import '@testing-library/jest-dom';

// Mock Tone.js due to ES module import issues in Vitest
vi.mock('tone', () => {
    return {
        Synth: class {
            toDestination() { return this; }
            triggerAttackRelease() {}
        },
        NoiseSynth: class {
            toDestination() { return this; }
            triggerAttackRelease() {}
        },
        MembraneSynth: class {
            toDestination() { return this; }
            triggerAttackRelease() {}
        },
        FMSynth: class {
            toDestination() { return this; }
            triggerAttackRelease() {}
        },
        now: vi.fn().mockReturnValue(0),
        start: vi.fn(),
        Transport: {
            start: vi.fn(),
            stop: vi.fn(),
            cancel: vi.fn(),
            position: '0:0:0',
        },
        Loop: class {
            start() {}
            stop() {}
        },
    };
});

// Mock IntersectionObserver
window.IntersectionObserver = class {
    constructor() {}
    root: Element | Document | null = null;
    rootMargin: string = '';
    thresholds: ReadonlyArray<number> = [];
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
} as any;
