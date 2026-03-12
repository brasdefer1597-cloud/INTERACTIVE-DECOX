import '@testing-library/jest-dom';

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
    start: vi.fn().mockResolvedValue(true),
    now: vi.fn().mockReturnValue(0),
    Transport: {
      state: 'stopped',
      stop: vi.fn(),
      cancel: vi.fn(),
      start: vi.fn(),
    },
    Loop: class {
      constructor() {}
      start() {}
      stop() {}
      dispose() {}
    }
  };
});

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = MockIntersectionObserver as any;
