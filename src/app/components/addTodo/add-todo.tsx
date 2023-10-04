"use client";
import { useTodoContext } from "@/app/store/todo";
import React, { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodoContext();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Write your todo"
          name=""
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit"> ADD</button>
      </form>
    </div>
  );
};

export default AddTodo;
