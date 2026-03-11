import { render, screen } from '@testing-library/react';
import App from '../App';
import { vi } from 'vitest';

vi.mock('tone', () => ({
    Synth: vi.fn(() => ({ toDestination: vi.fn() })),
    now: vi.fn(() => 0),
    start: vi.fn(),
    context: {
        resume: vi.fn()
    },
    MembraneSynth: vi.fn(() => ({ toDestination: vi.fn(), triggerAttackRelease: vi.fn() })),
    NoiseSynth: vi.fn(() => ({ toDestination: vi.fn(), triggerAttackRelease: vi.fn() })),
    FMSynth: vi.fn(() => ({ toDestination: vi.fn(), triggerAttackRelease: vi.fn() })),
    Transport: {
        state: 'stopped',
        stop: vi.fn(),
        cancel: vi.fn(),
        start: vi.fn(),
        scheduleRepeat: vi.fn(),
    },
}));

vi.mock('../components/SEO', () => {
  return {
    default: () => <></>
  };
});

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText('CHALAMANDRA MAGISTRAL')).toBeInTheDocument();
    });
});
