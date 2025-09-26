import React from "react";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 40
        }}
      >
        <TodoList />
      </div>
    </div>
  );
}
