import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./utils/currency", () => {
  return {
    convert: jest.fn().mockImplementation(() => 1.42),
  };
});

test("renders learn react link", async () => {
  const { findByText } = render(<App />);
  const element = await findByText(/USD to CAD = 1.42/i);
  expect(element).toBeInTheDocument();
});
