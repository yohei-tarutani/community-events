import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import EventDetail from "./pages/EventDetail";
import CreateEvent from "./pages/CreateEvent";
import Login from "./pages/Login";
import { EventProvider } from "./contexts/EventContext";

function App() {
  return (
    <>
      <Header />
      <EventProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </EventProvider>
    </>
  );
}

export default App;
