
import { render, fireEvent, screen } from '@testing-library/react';
import ArchetypeQuiz from '../ArchetypeQuiz';
import { vi } from 'vitest';

describe('ArchetypeQuiz', () => {
  it('should determine the correct archetype after completing the quiz', () => {
    const onQuizComplete = vi.fn();
    const playSelectSound = vi.fn();

    render(<ArchetypeQuiz onQuizComplete={onQuizComplete} playSelectSound={playSelectSound} />);

    // Simulate answering the quiz questions
    fireEvent.click(screen.getByText('Analizo los datos y busco el patrón estructural subyacente.'));
    fireEvent.click(screen.getByText('Un sistema robusto y escalable.'));
    fireEvent.click(screen.getByText('La claridad del diseño y la estructura final.'));
    fireEvent.click(screen.getByText('A través de métricas, dashboards y procesos claros.'));
    fireEvent.click(screen.getByText('Un espacio ordenado donde todo tiene su lugar lógico.'));
    fireEvent.click(screen.getByText('El caos incontrolado y la falta de estructura.'));
    fireEvent.click(screen.getByText('Registro el error en el sistema para evitar que se repita.'));
    fireEvent.click(screen.getByText('La fiabilidad y el cumplimiento de los procesos.'));
    fireEvent.click(screen.getByText('Basándome en datos históricos y proyecciones lógicas.'));
    fireEvent.click(screen.getByText('Superarlos mediante una infraestructura más eficiente y sólida.'));

    // Check that the onQuizComplete function was called with the correct archetype
    expect(onQuizComplete).toHaveBeenCalledWith('El Arquitecto');
  });
});
