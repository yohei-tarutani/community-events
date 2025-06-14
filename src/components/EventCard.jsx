import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "16px",
        padding: 14,
        marginBottom: 10,
      }}
    >
      <h3 style={{ marginTop: 0 }}>{event.title}</h3>
      <p>
        📅{event.date} / 📍{event.location}
      </p>
      <Link to={`/events/${event.id}/`}>詳細を見る</Link>
    </div>
  );
};

export default EventCard;
