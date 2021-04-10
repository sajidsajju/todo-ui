import React from "react";
import { fireEvent, render } from "@testing-library/react";

import TodoForm from "../";

describe("<TodoForm  />", () => {
  const user = { uid: "12" };

  it("should match the snapshot", () => {
    const rendered = render(<TodoForm user={user} />);

    expect(rendered.container.firstChild).toMatchSnapshot();
  });

  it("should check the empty text field", () => {
    const { getByTestId } = render(<TodoForm user={user} />);

    const input = getByTestId("input-field").querySelector("input");

    expect(input).toHaveValue("");
  });

  it("should check the text field with some text", () => {
    const { getByTestId } = render(<TodoForm user={user} />);

    const input = getByTestId("input-field").querySelector("input");

    fireEvent.change(input, { target: { value: "hello" } });

    expect(input).toHaveValue("hello");
  });
});
