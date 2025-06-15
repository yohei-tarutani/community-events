import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event, onDelete }) => {
  return (
    <div className="event-card">
      <h3 className="event-title">{event.title}</h3>
      <p>
        📅 {event.date} / 📍 {event.location}
      </p>
      <Link to={`/events/${event.id}/`} className="details-link">
        詳細を見る
      </Link>
      {onDelete && (
        <button onClick={() => onDelete(event.id)} className="delete-btn">
          削除
        </button>
      )}
    </div>
  );
};

export default EventCard;
