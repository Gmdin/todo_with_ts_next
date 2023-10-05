import React from "react";
import AddTodo from "./components/addTodo/add-todo";
import ShowTodoList from "./components/showTodosData";
import Navbar from "./components/navbar";

const Home = () => {
  return (
    <>
      <main>
        <h2>Next + TypeScript</h2>
      </main>
      <Navbar />
      <AddTodo />
      <ShowTodoList />
    </>
  );
};

export default Home;
