import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders base component", () => {
  render(<App />);
  const zipCodeText = screen.getByText(/Enter Zip Code/i);
  expect(zipCodeText).toBeInTheDocument();
});
