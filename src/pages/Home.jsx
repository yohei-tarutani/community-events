import React, { useContext } from "react";
import EventCard from "../components/EventCard";
import { EventContext } from "../contexts/EventContext";

const Home = () => {
  const { events } = useContext(EventContext);

  return (
    <div className="container">
      <h2 className="page-title">地域イベント一覧</h2>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;
