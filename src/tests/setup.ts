import '@testing-library/jest-dom';
vi.mock('tone', () => ({
  Synth: vi.fn().mockImplementation(function() { return { toDestination: vi.fn().mockReturnThis(), triggerAttackRelease: vi.fn() }; }),
  NoiseSynth: vi.fn().mockImplementation(function() { return { toDestination: vi.fn().mockReturnThis(), triggerAttackRelease: vi.fn() }; }),
  MembraneSynth: vi.fn().mockImplementation(function() { return { toDestination: vi.fn().mockReturnThis(), triggerAttackRelease: vi.fn() }; }),
  FMSynth: vi.fn().mockImplementation(function() { return { toDestination: vi.fn().mockReturnThis(), triggerAttackRelease: vi.fn() }; }),
  Transport: { start: vi.fn(), stop: vi.fn(), cancel: vi.fn(), state: 'stopped' },
  Loop: vi.fn().mockImplementation(function() { return { start: vi.fn(), stop: vi.fn() }; }),
  start: vi.fn(),
  now: vi.fn(),
}));

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = IntersectionObserverMock as any;
