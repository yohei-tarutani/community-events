import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";

const EventDetail = () => {
  const { id } = useParams();
  const { events } = useContext(EventContext);

  const event = events.find((e) => String(e.id) === id);
  if (!event) {
    return <p>イベントが見つかりませんでした。</p>;
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "16px",
        padding: 30,
        margin: 30,
      }}
    >
      <h2 style={{ marginTop: 10 }}>{event.title}</h2>
      <p>日付：　📅 {event.date}</p>
      <p>場所：　📍 {event.location}</p>
      <p>詳細：　{event.description}</p>
    </div>
  );
};

export default EventDetail;
