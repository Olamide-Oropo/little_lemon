import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';

test('renders booking form heading', () => {
  render(<BookingForm />);
  const headingElement = screen.findByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});
