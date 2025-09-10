import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logins() {
  const navigate = useNavigate();

  const [user] = useState({
    email: "nva@gmail.com",
    password: "12345",
    role: "User",
  });

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.email === user.email &&
      form.password === user.password &&
      form.role === user.role
    ) {
      navigate("/account");
    } else {
      setError("Thông tin đăng nhập sai");
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Nhập email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="">-- Chọn quyền --</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
