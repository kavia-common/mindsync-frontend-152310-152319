import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders MindSync brand in navbar", () => {
  render(<App />);
  const brand = screen.getByText(/MindSync/i);
  expect(brand).toBeInTheDocument();
});
