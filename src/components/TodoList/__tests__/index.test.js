import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import TodoList from "../";

describe("<TodoList  />", () => {
  const todos = [{ text: "hello" }];
  const removeTodo = jest.fn();
  const editTodo = jest.fn();

  it("should match the snapshot", () => {
    const rendered = render(
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />,
    );

    expect(rendered.container.firstChild).toMatchSnapshot();
  });

  it("should check the passed Todos in the document", () => {
    render(
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />,
    );

    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("should call deleteTodo when click event fired on ClearIcon", () => {
    render(
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />,
    );

    const clearButton = screen.getByLabelText("delete-todo");
    fireEvent.click(clearButton);
    expect(clearButton).toBeInTheDocument();
    expect(removeTodo).toHaveBeenCalledTimes(1);
  });

  it("should call editTodo when click event fired twice on editIcon", () => {
    render(
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />,
    );

    const editButton = screen.getByLabelText("update-todo");
    fireEvent.click(editButton);

    const input = screen.getByTestId("input-field");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input).toHaveValue("hello");

    fireEvent.click(editButton);
    expect(editButton).toBeInTheDocument();
    expect(editTodo).toHaveBeenCalledTimes(1);
  });

  it("should call editTodo when click event fired on DoneOutlineIcon", () => {
    render(
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />,
    );

    const strikeOffButton = screen.getByLabelText("TodoCompleted-Handler");
    fireEvent.click(strikeOffButton);
    expect(strikeOffButton).toBeInTheDocument();
    expect(editTodo).toHaveBeenCalledTimes(1);
  });
});
