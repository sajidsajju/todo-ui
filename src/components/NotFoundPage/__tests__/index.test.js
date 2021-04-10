import React from "react";
import { render, screen } from "@testing-library/react";

import NotFoundPage from "../";

describe("<NotFoundPage  />", () => {
  it("should match the snapshot", () => {
    const rendered = render(<NotFoundPage />);

    expect(rendered.container.firstChild).toMatchSnapshot();
  });

  it("should match the Page not found text", () => {
    render(<NotFoundPage />);

    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });
});
