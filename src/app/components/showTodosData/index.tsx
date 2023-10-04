"use client";
import { useTodoContext } from "@/app/store/todo";
import React from "react";

const ShowTodoList = () => {
  const { todo } = useTodoContext();
  const filterList = todo;
  return (
    <div>
      <ul>
        {filterList.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodoList;
