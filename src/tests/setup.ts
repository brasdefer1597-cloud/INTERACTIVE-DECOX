import '@testing-library/jest-dom';

// Mock IntersectionObserver
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
});

// Mock Tone.js classes
vi.mock('tone', () => {
  return {
    Synth: class Synth {
      toDestination() { return this; }
      triggerAttackRelease() {}
    },
    NoiseSynth: class NoiseSynth {
      toDestination() { return this; }
      triggerAttackRelease() {}
    },
    MembraneSynth: class MembraneSynth {
      toDestination() { return this; }
      triggerAttackRelease() {}
    },
    FMSynth: class FMSynth {
      toDestination() { return this; }
      triggerAttackRelease() {}
    },
    Transport: {
      start: vi.fn(),
      stop: vi.fn(),
    },
    start: vi.fn(),
    now: vi.fn(() => 0),
  };
});
