import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ads checkout', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ads checkout/i);
  expect(linkElement).toBeInTheDocument();
});
