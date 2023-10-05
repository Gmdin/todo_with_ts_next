"use client";
import { ReactNode, createContext, useContext, useState } from "react";
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodoContext = {
  todo: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handTodoDelete: (id: string) => void;
};
export const todoContext = createContext<TodoContext | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todo, setTodo] = useState<Todo[]>(() => {
    const newTodos = localStorage.getItem("todo") || "[]";
    return JSON.parse(newTodos) as Todo[];
  });
  const handleAddTodo = (task: string) => {
    setTodo((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  const toggleTodoAsCompleted = (id: string) => {
    setTodo((prev) => {
      const newTodos = prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      localStorage.setItem("todo", JSON.stringify(newTodos));
      localStorage.getItem("todo");
      return newTodos;
    });
  };
  const handTodoDelete = (id: string) => {
    setTodo((prev) => {
      const newTodos = prev.filter((task) => task.id !== id);
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  return (
    <todoContext.Provider
      value={{ todo, handleAddTodo, toggleTodoAsCompleted, handTodoDelete }}
    >
      {children}
    </todoContext.Provider>
  );
};
export const useTodoContext = () => {
  const todoContextValue = useContext(todoContext);
  if (!todoContextValue) {
    throw new Error("UseTodo used outside of Provider");
  }
  return todoContextValue;
};
