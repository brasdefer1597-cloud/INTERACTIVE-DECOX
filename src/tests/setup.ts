import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = () => null;
  unobserve = () => null;
  disconnect = () => null;
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver
});

// Mock tone.js since Web Audio API is not available in node
vi.mock('tone', () => ({
  start: vi.fn().mockResolvedValue(undefined),
  now: vi.fn().mockReturnValue(0),
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
  Transport: {
    state: 'stopped',
    start: vi.fn(),
    stop: vi.fn(),
    cancel: vi.fn(),
    bpm: { value: 120 }
  },
  Loop: vi.fn().mockImplementation(() => ({
    start: vi.fn(),
    stop: vi.fn(),
    cancel: vi.fn()
  }))
}));