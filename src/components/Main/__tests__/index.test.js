import React from "react";
import { render, screen } from "@testing-library/react";

import Main from "../";

describe("<Main  />", () => {
  it("should match the snapshot", () => {
    const rendered = render(<Main />);

    expect(rendered.container.firstChild).toMatchSnapshot();
  });

  it("should match the title", () => {
    render(<Main />);

    expect(screen.getByText("TODO")).toBeInTheDocument();
  });
});
