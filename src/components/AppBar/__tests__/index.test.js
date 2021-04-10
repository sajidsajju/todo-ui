import React from "react";
import { render, screen } from "@testing-library/react";

import TodoAppBar from "../";

describe("<AppBar  />", () => {
  const userName = "Sajid Ahmed";
  it("should match the snapshot", () => {
    const rendered = render(<TodoAppBar userName={userName} />);

    expect(rendered.container.firstChild).toMatchSnapshot();
  });

  it("should match the title of the AppBar", () => {
    render(<TodoAppBar userName={userName} />);

    expect(screen.getByText(`Welcome,`)).toBeInTheDocument();
  });

  it("should match the signout button", () => {
    render(<TodoAppBar userName={userName} />);

    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
});
