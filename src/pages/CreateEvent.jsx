import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";
import { v4 as uuidv4 } from "uuid";

const CreateEvent = () => {
  const { setEvents } = useContext(EventContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = { id: uuidv4(), ...form };
    setEvents((prev) => [...prev, newEvent]);

    alert("イベントが登録されました。");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>イベント登録</h2>

      <div style={{ display: "grid", columnGap: 10, rowGap: 20 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <label htmlFor="">名称</label>
          <input
            name="title"
            placeholder="例：夏祭り"
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <label htmlFor="">日時</label>
          <input name="date" type="date" onChange={handleChange} required />
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <label htmlFor="">場所</label>
          <input placeholder="例：中央広場" onChange={handleChange} required />
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <label htmlFor="">説明</label>
          <textarea
            placeholder="例：地域の夏の風物詩、屋台や盆踊りを楽しめます。"
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ display: "flex", marginTop: 10 }}>
          <button type="submit">投稿する</button>
        </div>
      </div>
    </form>
  );
};

export default CreateEvent;
