import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validators";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Email không hợp lệ");
      return;
    }
    if (!validatePassword(password)) {
      setError("Mật khẩu phải ít nhất 6 ký tự, gồm chữ và số");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      setError("Email đã được đăng ký");
      return;
    }

    const newUser = { email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    alert("Đăng ký thành công! Hãy đăng nhập để tiếp tục.");
    navigate("/login");
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f3f4f6"
    }}>
      <form
        onSubmit={handleRegister}
        style={{
          width: 360,
          padding: 28,
          borderRadius: 12,
          background: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Đăng ký</h2>

        {error && (
          <div style={{
            background: "#fee2e2",
            color: "#b91c1c",
            padding: "8px 12px",
            borderRadius: 6,
            marginBottom: 12,
            fontSize: 14
          }}>
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            marginBottom: 12,
            borderRadius: 8,
            border: "1px solid #d1d5db"
          }}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            marginBottom: 16,
            borderRadius: 8,
            border: "1px solid #d1d5db"
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px 0",
            borderRadius: 8,
            border: "none",
            background: "#16a34a",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          Đăng ký
        </button>

        <p style={{ marginTop: 16, fontSize: 14, textAlign: "center" }}>
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </p>
      </form>
    </div>
  );
}
