import React, { useContext } from "react";
import EventCard from "../components/EventCard";
import { EventContext } from "../contexts/EventContext";

const Mypage = () => {
  const { mypageEvents, setMypageEvents } = useContext(EventContext);

  const handleDelete = (idToDelete) => {
    alert("申込済みイベントから削除しました。");
    setMypageEvents((prev) => prev.filter((e) => e.id !== idToDelete));
  };

  return (
    <div className="mypage-container">
      <h2 className="page-title">申込済みイベント</h2>

      {mypageEvents.length === 0 ? (
        <p>申し込み済みのイベントはありません。</p>
      ) : (
        <div className="event-list">
          {mypageEvents.map((event) => (
            <EventCard key={event.id} event={event} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Mypage;
