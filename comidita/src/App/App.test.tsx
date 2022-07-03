import { render, screen } from '@testing-library/react';
import App from './App';

test('debe renderizar App', () => {
  render(<App />);
  const containerElement = screen.getByTestId('app');
  const titleElement = screen.getByTestId('appTitle');
  const calendarComponent = screen.getByTestId('calendar');

  expect(containerElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(calendarComponent).toBeInTheDocument();
});
