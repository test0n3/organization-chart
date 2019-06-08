import React from "react";
import { render } from "@testing-library/react";
import CompanyName from './create-company';

test("Create Company component with CSS ", () => {
  const { asFragment } = render(<CompanyName />);

  expect(asFragment()).toMatchSnapshot();
});
