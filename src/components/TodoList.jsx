import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "This is an example of task #1", completed: true },
    { id: 2, text: "This is an example of task #2", completed: false },
    { id: 3, text: "This is an example of task #3", completed: true },
    { id: 4, text: "This is an example of task #4", completed: false },
    { id: 5, text: "This is an example of task #5", completed: false }
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div
      style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        width: "100%",
        maxWidth: 480
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
        Your To Do
      </h2>

      {/* Input */}
      <div style={{ display: "flex", marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Add new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: "8px 0 0 8px",
            border: "1px solid #d1d5db"
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: "0 16px",
            background: "#2563eb",
            border: "none",
            color: "#fff",
            fontSize: 20,
            borderRadius: "0 8px 8px 0",
            cursor: "pointer"
          }}
        >
          +
        </button>
      </div>

      {/* List */}
      {todos.length === 0 ? (
        <p style={{ color: "#6b7280", fontSize: 14 }}>
          Chưa có task nào — thêm task đầu tiên nhé!
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}

      {/* Footer */}
      <p style={{ marginTop: 12, fontWeight: 600, fontSize: 14 }}>
        Your remaining todos : {remaining}
      </p>
      <p style={{ marginTop: 4, fontSize: 12, color: "#6b7280" }}>
        "Doing what you love is the cornerstone of having abundance in your
        life." – Wayne Dyer
      </p>
    </div>
  );
}
