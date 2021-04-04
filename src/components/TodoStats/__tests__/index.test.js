import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import TodoStats from "../";

describe("<TodoStats  />", () => {
  let setStatus = jest.fn();
  const filteredTodos = [{ text: "hello" }];

  it("should match the snapshot", () => {
    const rendered = render(
      <TodoStats setStatus={setStatus} filteredTodos={filteredTodos} />,
    );

    expect(rendered.container.firstChild).toMatchSnapshot();
  });

  it("should match the length of the displayTodos", () => {
    render(<TodoStats setStatus={setStatus} filteredTodos={filteredTodos} />);

    expect(screen.getByText("1 items left")).toBeInTheDocument();
  });

  it("should call allTodos when click event fired on All Button", () => {
    render(<TodoStats setStatus={setStatus} filteredTodos={filteredTodos} />);

    const statusHandler = screen.getByText("All");
    fireEvent.click(statusHandler);
    expect(statusHandler).toBeInTheDocument();
    expect(setStatus).toHaveBeenCalledTimes(1);
  });

  it("should call activeTodos when click event fired on Active Button", () => {
    render(<TodoStats setStatus={setStatus} filteredTodos={filteredTodos} />);

    const statusHandler = screen.getByText("Active");
    fireEvent.click(statusHandler);
    expect(statusHandler).toBeInTheDocument();
    expect(setStatus).toHaveBeenCalledTimes(1);
  });

  it("should call completedTodos when click event fired on Completed Button", () => {
    render(<TodoStats setStatus={setStatus} filteredTodos={filteredTodos} />);

    const statusHandler = screen.getByText("Completed");
    fireEvent.click(statusHandler);
    expect(statusHandler).toBeInTheDocument();
    expect(setStatus).toHaveBeenCalledTimes(1);
  });
});
