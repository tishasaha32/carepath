import React, { useEffect, useState } from "react";

function useGetLastFiveDates() {
  const [dates, setDates] = useState([]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const daysArray = [];
    const today = new Date();

    for (let i = 0; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      daysArray.push(date.toISOString().split("T")[0]);
    }
    daysArray.reverse();

    for (let i = 0; i < daysArray.length; i++) {
      const date = new Date(daysArray[i]);
      const day = date.getDate();
      const month = months[date.getMonth()];
      daysArray[i] = `${day} ${month}`;
    }

    setDates(daysArray);
  }, []);
  return { dates };
}

export default useGetLastFiveDates;
