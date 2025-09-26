import React from "react";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logout = () => {
    localStorage.removeItem("user");
    // reload về login -> đảm bảo route được bảo vệ
    window.location.href = "/login";
  };

  return (
    <div style={{
      background: "#fff",
      boxShadow: "0 1px 6px rgba(0,0,0,0.06)"
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 16px"
      }}>
        <div style={{ fontWeight: 700, cursor: "pointer" }} onClick={() => window.location.href = "/"}>
          Your ToDo
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ color: "#333" }}>{user?.email}</div>
          <button
            onClick={logout}
            style={{
              background: "#ef4444",
              color: "#fff",
              border: "none",
              padding: "6px 10px",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
}
