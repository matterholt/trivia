import { render, screen } from '@testing-library/react';
import App from './App';

test("Welcome to the Trivia Challenge", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Trivia Challenge/i);
  expect(linkElement).toBeInTheDocument();
});
