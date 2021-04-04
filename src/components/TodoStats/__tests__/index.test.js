import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import TodoStats from "../";

describe("<TodoStats  />", () => {
  const todos = [{ text: "hello" }];
  const displayTodos = [{ text: "hello" }];
  const sort = jest.fn();

  it("should match the snapshot", () => {
    const rendered = render(
      <TodoStats todos={todos} displayTodos={displayTodos} sort={sort} />,
    );

    expect(rendered.container.firstChild).toMatchSnapshot();
  });

  it("should match the length of the displayTodos", () => {
    render(<TodoStats todos={todos} displayTodos={displayTodos} sort={sort} />);

    expect(screen.getByText("1 items left")).toBeInTheDocument();
  });

  it("should call allTodos when click event fired on All Button", () => {
    render(<TodoStats todos={todos} displayTodos={displayTodos} sort={sort} />);

    const AllSortButton = screen.getByText("All");
    fireEvent.click(AllSortButton);
    expect(AllSortButton).toBeInTheDocument();
    expect(sort).toHaveBeenCalledTimes(1);
  });

  it("should call activeTodos when click event fired on Active Button", () => {
    render(<TodoStats todos={todos} displayTodos={displayTodos} sort={sort} />);

    const ActiveSortButton = screen.getByText("Active");
    fireEvent.click(ActiveSortButton);
    expect(ActiveSortButton).toBeInTheDocument();
    expect(sort).toHaveBeenCalledTimes(1);
  });

  it("should call completedTodos when click event fired on Completed Button", () => {
    render(<TodoStats todos={todos} displayTodos={displayTodos} sort={sort} />);

    const CompletedSortButton = screen.getByText("Completed");
    fireEvent.click(CompletedSortButton);
    expect(CompletedSortButton).toBeInTheDocument();
    expect(sort).toHaveBeenCalledTimes(1);
  });
});
