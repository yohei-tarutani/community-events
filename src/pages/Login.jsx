import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUsernameObj } = useContext(EventContext);

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

    const user = { username, password };
    localStorage.setItem("username", JSON.stringify(user));
    setUsernameObj(user);

    alert("ログインしました！");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>ログイン</h2>

      {error && <p className="error-message">{error}</p>}

      <div className="form-group">
        <label>ユーザー名</label>
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

      <div className="form-group">
        <label>パスワード</label>
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

      <button className="submit-button" onClick={handleLogin}>
        ログイン
      </button>
    </div>
  );
};

export default Login;
