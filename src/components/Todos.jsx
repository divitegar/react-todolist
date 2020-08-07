import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React1"
    },
    {
      text: "Belajar React2"
    },
    {
      text: "Belajar React3"
    },
    {
      text: "Belajar React4"
    },
    {
      text: "Belajar React5"
    },
    {
      text: "Belajar React6"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
