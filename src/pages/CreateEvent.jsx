import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";
import { v4 as uuidv4 } from "uuid";

const CreateEvent = () => {
  const { setEvents, username_obj, form, setForm } = useContext(EventContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username_obj) {
      const newEvent = { id: uuidv4(), ...form };
      setEvents((prev) => [...prev, newEvent]);

      alert("イベントが登録されました。");
      navigate("/");
    } else {
      alert("参加申し込みにはログインが必要です。");
      navigate("/login");
    }
  };

  return (
    <div className="create-event-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>イベント登録</h2>
        <div className="form-grid">
          <label>
            名称
            <input
              name="title"
              placeholder="例：夏祭り"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            日時
            <input
              name="date"
              type="date"
              min={new Date().toLocaleDateString("sv-SE")}
              // 過去の日付を選択不可とする（日本よりも時間が遅く.YYYY-MM-DD形式で出力されHTMLのdateと相性の良いスウェーデンのロケールを使用
              onChange={handleChange}
              required
            />
          </label>
          <label>
            場所
            <input
              name="location"
              placeholder="例：中央広場"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            説明
            <textarea
              name="description"
              placeholder="例：地域の夏の風物詩、屋台や盆踊りを楽しめます。"
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">
            投稿する
          </button>
        </div>
      </form>
      <div className="button-container">
        <button className="button-text" onClick={() => navigate(-1)}>
          ← 戻る
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
