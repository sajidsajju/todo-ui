import React from "react";

function TodoList(props) {
  const { text } = props;

  return (
    <>
      <h2>{text}</h2>
    </>
  );
}

export default TodoList;
