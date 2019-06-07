import React from "react";
import { render } from "@testing-library/react";
import ChartView from "./chart";

test("ChartView component", () => {
  const { asFragment } = render(<ChartView />);

  expect(asFragment()).toMatchSnapshot();
});
