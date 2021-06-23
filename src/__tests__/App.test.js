import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders NASA logo on screen", () => {
  render(<App />);
  const nasaLogo = screen.getByAltText(/NASA logo/i);
  expect(nasaLogo).toBeInTheDocument();
});
