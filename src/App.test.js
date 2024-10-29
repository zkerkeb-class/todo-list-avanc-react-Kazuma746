import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Liste de Tâches title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Liste de Tâches/i);
  expect(titleElement).toBeInTheDocument();
});
