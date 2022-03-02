import React, { useState, useEffect } from "react";

import Scheduler from "devextreme-react/scheduler";

import { LoadPanel } from "devextreme-react/load-panel";
import agent from "../../api/agent";

const CalendarReservation = () => {
  const currentDate = new Date(2021, 2, 1);
  const views = ["day", "week", "month"];

  const [data, setData] = useState([]);

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    console.log(params.get("id"));
    agent.Calendar.list(params.get("id")).then((response) => {
      setData(response);
      console.log(data);
    });
  }, []);

  if (data == []) return <LoadPanel></LoadPanel>;
  return (
    <Scheduler
      timeZone="America/Los_Angeles"
      dataSource={data}
      views={views}
      defaultCurrentView="month"
      defaultCurrentDate={currentDate}
      height={600}
      startDayHour={9}
    />
  );
};

export default CalendarReservation;
