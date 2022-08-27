import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.queryAllByText(/WaffleCSS/i);
  expect(linkElement[0]).toBeInTheDocument();
});
