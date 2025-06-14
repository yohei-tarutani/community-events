import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // フォームのバリデーション
    if (!username || !password) {
      setError("ユーザー名とパスワードを入力してください");
      return;
    }
    if (password.length < 4) {
      setError("パスワードは4文字以上で入力してください");
      return;
    }

    localStorage.setItem("username", JSON.stringify({ username }));
    alert("ログインしました！");
    // ログイン後ホーム画面へ
    navigate("/");
  };

  return (
    <div>
      <h2>ログイン</h2>

      {error && (
        <p style={{ color: "red", fontWeight: "bold", marginBottom: 10 }}>
          {error}
        </p>
      )}

      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <label htmlFor="">ユーザー名</label>
        <input
          type="text"
          placeholder="例：ファンリピート"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
        />
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <label htmlFor="">パスワード</label>
        <input
          type="password"
          placeholder="例：1111"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
      </div>
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
};

export default Login;
