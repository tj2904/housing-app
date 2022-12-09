import { render, screen } from '@testing-library/react';
import App from '../src/components/App'

test('renders site title', () => {
  render(<App />);
  const linkElement = screen.getByText("Eviction Prevention");
  expect(linkElement).toBeInTheDocument();
});
