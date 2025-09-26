import React from "react";

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        padding: "10px 14px",
        borderRadius: 10,
        marginBottom: 10,
        border: "1px solid #e5e7eb"
      }}
    >
      <label style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          style={{ marginRight: 10 }}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "#9ca3af" : "#111827",
            fontWeight: 500
          }}
        >
          {todo.text}
        </span>
      </label>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{
          background: "transparent",
          border: "none",
          color: "#dc2626",
          fontSize: 16,
          cursor: "pointer"
        }}
      >
        ✕
      </button>
    </div>
  );
}
