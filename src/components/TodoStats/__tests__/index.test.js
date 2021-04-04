import React from "react";
import { render, screen } from "@testing-library/react";

import TodoStats from "../";

describe("<TodoStats  />", () => {
  it("should match the snapshot", () => {
    const rendered = render(<TodoStats />);

    expect(rendered.container.firstChild).toMatchSnapshot();
  });
});
