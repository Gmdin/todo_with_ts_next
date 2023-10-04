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
};
export const todoContext = createContext<TodoContext | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todo, setTodo] = useState<Todo[]>([]);
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
      return newTodos;
    });
  };
  return (
    <todoContext.Provider value={{ todo, handleAddTodo }}>
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
