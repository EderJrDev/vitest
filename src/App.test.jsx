import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it } from "vitest";

describe("reder app", () => {
  it("should render app", () => {
    render(<App />);
    const headerElement = screen.getByText(/learn/i);
    expect(headerElement).toBeInTheDocument();
  });
});
