import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

test('debe renderizar Calendar', () => {
  render(<Calendar />);
  const containerElement = screen.getByTestId('calendar');
  const lunesCard = screen.getByTestId('card-lunes');
  const martesCard = screen.getByTestId('card-martes');
  const miercolesCard = screen.getByTestId('card-miercoles');
  const juevesCard = screen.getByTestId('card-jueves');
  const viernesCard = screen.getByTestId('card-viernes');

  expect(containerElement).toBeInTheDocument();
  expect(lunesCard).toBeInTheDocument();
  expect(martesCard).toBeInTheDocument();
  expect(miercolesCard).toBeInTheDocument();
  expect(juevesCard).toBeInTheDocument();
  expect(viernesCard).toBeInTheDocument();
});