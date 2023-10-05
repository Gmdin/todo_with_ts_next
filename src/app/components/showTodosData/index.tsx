"use client";
import { useTodoContext } from "@/app/store/todo";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ShowTodoList = () => {
  const { todo, handTodoDelete, toggleTodoAsCompleted } = useTodoContext();
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todo");
  let filterList;
  if (todosFilter === "active") {
    filterList = todo.filter((task) => task.completed === false);
  } else if (todosFilter === "completed") {
    filterList = todo.filter((task) => task.completed === true);
  } else {
    filterList = todo;
  }

  return (
    <div>
      <ul>
        {filterList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              name=""
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && (
              <button type="button" onClick={() => handTodoDelete(todo.id)}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodoList;
