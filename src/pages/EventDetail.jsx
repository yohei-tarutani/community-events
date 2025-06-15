import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";

const EventDetail = () => {
  const { id } = useParams();
  const { events, username_obj, mypageEvents, setMypageEvents } =
    useContext(EventContext);
  const navigate = useNavigate();

  const event = events.find((e) => String(e.id) === id);
  if (!event) {
    return <p>イベントが見つかりませんでした。</p>;
  }

  const handleApply = () => {
    if (username_obj) {
      const alreadyApplied = mypageEvents.some((e) => e.id === event.id);
      if (alreadyApplied) {
        alert("すでに申し込み済みです。");
        return;
      }

      setMypageEvents((prev) => [...prev, event]);
      alert("参加申し込みが完了しました。");
      navigate("/");
    } else {
      alert("参加申し込みにはログインが必要です。");
      navigate("/login");
    }
  };

  return (
    <div className="event-container">
      <div className="event-detail">
        <h2>{event.title}</h2>
        <p>日付：　📅 {event.date}</p>
        <p>場所：　📍 {event.location}</p>
        <p>詳細：　{event.description}</p>
        <button onClick={handleApply} className="apply-btn">
          参加申し込み
        </button>
      </div>
      <div className="button-container">
        <button className="button-text" onClick={() => navigate(-1)}>
          ← 戻る
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
