import { render, screen } from '@testing-library/react';
import App from './App';

test('should rendered title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Patient History/i);
  expect(titleElement).toBeInTheDocument();
});
