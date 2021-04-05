import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import TodoStats from "../";

describe("<TodoStats  />", () => {
  const setFilter = jest.fn();
  const todos = [{ text: "hello" }];

  it("should match the snapshot", () => {
    const rendered = render(<TodoStats setFilter={setFilter} todos={todos} />);

    expect(rendered.container.firstChild).toMatchSnapshot();
  });

  it("should match the length of the todos", () => {
    render(<TodoStats setFilter={setFilter} todos={todos} />);

    expect(screen.getByText("1 items left")).toBeInTheDocument();
  });

  it("should call filterHandler when click event fired on All Button", () => {
    render(<TodoStats setFilter={setFilter} todos={todos} />);

    const filterHandler = screen.getByText("All");
    fireEvent.click(filterHandler);
    expect(filterHandler).toBeInTheDocument();
    expect(setFilter).toHaveBeenCalledTimes(1);
  });

  it("should call filterHandler when click event fired on Active Button", () => {
    render(<TodoStats setFilter={setFilter} todos={todos} />);

    const filterHandler = screen.getByText("Active");
    fireEvent.click(filterHandler);
    expect(filterHandler).toBeInTheDocument();
    expect(setFilter).toHaveBeenCalledTimes(1);
  });

  it("should call filterHandler when click event fired on Completed Button", () => {
    render(<TodoStats setFilter={setFilter} todos={todos} />);

    const filterHandler = screen.getByText("Completed");
    fireEvent.click(filterHandler);
    expect(filterHandler).toBeInTheDocument();
    expect(setFilter).toHaveBeenCalledTimes(1);
  });
});
