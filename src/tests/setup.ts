import '@testing-library/jest-dom';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: mockIntersectionObserver
});

// Mock Tone.js classes
vi.mock('tone', () => {
  return {
    start: vi.fn(),
    now: vi.fn(() => 0),
    Synth: vi.fn().mockImplementation(() => ({
      toDestination: vi.fn().mockReturnThis(),
      triggerAttackRelease: vi.fn(),
    })),
    NoiseSynth: vi.fn().mockImplementation(() => ({
      toDestination: vi.fn().mockReturnThis(),
      triggerAttackRelease: vi.fn(),
    })),
    MembraneSynth: vi.fn().mockImplementation(() => ({
      toDestination: vi.fn().mockReturnThis(),
      triggerAttackRelease: vi.fn(),
    })),
    FMSynth: vi.fn().mockImplementation(() => ({
      toDestination: vi.fn().mockReturnThis(),
      triggerAttackRelease: vi.fn(),
    })),
    Transport: {
      start: vi.fn(),
      stop: vi.fn(),
      cancel: vi.fn(),
      scheduleRepeat: vi.fn(),
      bpm: { value: 60 },
    },
  };
});
