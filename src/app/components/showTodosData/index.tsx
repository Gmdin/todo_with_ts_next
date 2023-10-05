"use client";
import { useTodoContext } from "@/app/store/todo";
import React, { useState } from "react";

const ShowTodoList = () => {
  const { todo, handTodoDelete, toggleTodoAsCompleted } = useTodoContext();
  const filterList = todo;
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
