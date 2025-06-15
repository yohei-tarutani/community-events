import React, { createContext, useState } from "react";

const dummyEvents = [
  {
    id: 1,
    title: "健康ヨガ",
    date: "2025-06-30",
    location: "集会室A",
    description: "無理なく体を動かして柔軟な身体をつくります",
  },
  {
    id: 2,
    title: "親子バザー",
    date: "2025-07-04",
    location: "中央公園",
    description: "使わなくなったオモチャや洋服を売ってお小遣いにしませんか",
  },
  {
    id: 3,
    title: "夏祭り",
    date: "2025-07-15",
    location: "駅前広場",
    description: "地域の夏の風物詩。屋台の食べ物や盆踊りも楽しめます",
  },
  {
    id: 4,
    title: "バーベキュー＆スイカ割り",
    date: "2025-08-08",
    location: "河川敷",
    description: "美味しいお肉とスイカをご用意。親子でご参加ください",
  },
  {
    id: 5,
    title: "シニアウォーク",
    date: "2025-09-10",
    location: "中央公園など",
    description: "60歳以上の方の足腰の健康づくりに取り組んでいます",
  },
];

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(dummyEvents);
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });
  const [username_obj, setUsernameObj] = useState(
    JSON.parse(localStorage.getItem("username")) || null
  );
  const [mypageEvents, setMypageEvents] = useState([]);

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        form,
        setForm,
        username_obj,
        setUsernameObj,
        mypageEvents,
        setMypageEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
