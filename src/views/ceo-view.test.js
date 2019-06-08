import React from "react";
import { render } from "@testing-library/react";
import CeoName from "./ceo-view";

test("CeoName component", () => {
  const { asFragment } = render(<CeoName />);

  expect(asFragment()).toMatchSnapshot();
});
