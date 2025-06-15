import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";

const Header = () => {
  const { username_obj, setUsernameObj } = useContext(EventContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirm = window.confirm("ログアウトしますか？");
    if (confirm) {
      localStorage.removeItem("username");
      setUsernameObj(null);

      alert("ログアウトしました。");
      navigate("/");
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">イベント一覧</Link>
        <Link to="/create">イベント作成</Link>
        {username_obj ? (
          <>
            <Link to="/mypage">マイページ</Link>
            <button onClick={handleLogout} className="logout-btn">
              ログアウト
            </button>
          </>
        ) : (
          <Link to="/login">ログイン</Link>
        )}
      </nav>
      {username_obj && (
        <p className="welcome">ようこそ {username_obj.username} さん</p>
      )}
    </header>
  );
};

export default Header;
