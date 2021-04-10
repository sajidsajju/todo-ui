import React from "react";
import { render, screen } from "@testing-library/react";

import Login from "../";

describe("<Login  />", () => {
  it("should match the snapshot", () => {
    const rendered = render(<Login />);

    expect(rendered.container.firstChild).toMatchSnapshot();
  });

  it("should match the Login Button", () => {
    render(<Login />);

    expect(screen.getByText("Login with Google")).toBeInTheDocument();
  });
});
