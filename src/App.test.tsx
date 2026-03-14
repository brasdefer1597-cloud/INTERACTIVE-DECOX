import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';
describe('App', () => {
    it('renders without crashing', () => {
        render(
            <HelmetProvider>
                <App />
            </HelmetProvider>
        );
        expect(screen.getByText(/Chalamandra Magistral/i, { selector: 'h1' })).toBeInTheDocument();
    });
});
