import { render, screen } from '@testing-library/react';
import Home from "./pages/index";
import ThemeContext from "./components/theme";

test('renders learn react link', () => {
  render(<ThemeContext><Home /></ThemeContext>);
  const linkElement = screen.getByText(/Javon Kitson/i);
  // expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
