import React, { useContext, useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { EventContext } from "../contexts/EventContext";

const Home = () => {
  const { events } = useContext(EventContext);

  return (
    <div>
      <h2>地域イベント一覧</h2>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Home;
