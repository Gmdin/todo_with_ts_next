import React from "react";
import AddTodo from "./components/addTodo/add-todo";
import ShowTodoList from "./components/showTodosData";

const Home = () => {
  return (
    <>
      <main>
        <h2>Next + TypeScript</h2>
      </main>
      <AddTodo />
      <ShowTodoList />
    </>
  );
};

export default Home;
