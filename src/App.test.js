import { render, screen } from '@testing-library/react';
import App from './components/App';
import React from "react";
import "@testing-library/jest-dom";

test('renders without crashing', () => { 
  render(<App />);
});

test('renders site title correctly', () => {
  render(<App />);
  const siteName = screen.getByText("Eviction Prevention");
  expect(siteName).toBeInTheDocument();
});
