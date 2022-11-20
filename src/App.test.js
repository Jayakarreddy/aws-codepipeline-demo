import { render, screen } from '@testing-library/react';
import App from './App';

// import Test from './Test';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("This is testing app");
  expect(linkElement).toBeInTheDocument();
});
