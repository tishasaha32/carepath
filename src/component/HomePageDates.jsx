import React, { useEffect, useState } from "react";
import styles from "./HomePageDates.module.css";
import useGetLastFiveDates from "../hooks/useGetLastFiveDates";

function HomePageDates() {
  const { dates } = useGetLastFiveDates();

  return (
    <div className={styles.datesContainer}>
      {dates.map((date, index) => (
        <p
          key={index}
          className={
            dates.length - 1 === index ? styles.activeDate : styles.date
          }
        >
          {date}
        </p>
      ))}
    </div>
  );
}

export default HomePageDates;
