import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import TodoList from "../";

describe("<TodoList  />", () => {
  const todos = [{ text: "hello" }];

  it("should match the snapshot", () => {
    const rendered = render(<TodoList todos={todos} />);

    expect(rendered.container.firstChild).toMatchSnapshot();
  });

  it("should check the passed Todos in the document", () => {
    render(<TodoList todos={todos} />);

    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("should call deleteTodo when click event fired on ClearIcon", () => {
    render(<TodoList todos={todos} />);

    const clearButton = screen.getByLabelText("delete-todo");
    expect(clearButton).toBeInTheDocument();
  });

  it("should call editTodo when click event fired on editIcon", () => {
    render(<TodoList todos={todos} />);

    const editButton = screen.getByLabelText("update-todo");
    fireEvent.click(editButton);

    const input = screen.getByTestId("input-field");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input).toHaveValue("hello");

    expect(editButton).toBeInTheDocument();
  });

  it("should call editTodo when click event fired on DoneOutlineIcon", () => {
    render(<TodoList todos={todos} />);

    const strikeOffButton = screen.getByLabelText("update-completed-todo");
    expect(strikeOffButton).toBeInTheDocument();
  });
});
