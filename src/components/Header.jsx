import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ display: "flex", gap: 10 }}>
      <Link to="/">イベント一覧</Link>
      <Link to="/create">イベント作成</Link>
      <Link to="/login">ログイン</Link>
    </nav>
  );
};

export default Header;
