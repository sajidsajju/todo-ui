import React from "react";
import { fireEvent, render } from "@testing-library/react";

import TodoList from "../";

describe("<TodoList  />", () => {
  const todos = [{ text: "hello" }, { text: "great" }];

  it("should match the snapshot", () => {
    const rendered = render(<TodoList todos={todos} />);

    expect(rendered.container.firstChild).toMatchSnapshot();
  });
});
