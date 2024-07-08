import React, { useEffect, useState } from "react";
import styles from "./SwitchCategoryHomePage.module.css";
import { useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import useGetUserDisease from "../hooks/useGetUserDisease";

function SwitchCategoryHomePage() {
  const { disease } = useGetUserDisease();
  return (
    <div className={styles.switchCategoryContainer}>
      <select
        name="category"
        id="category"
        className={styles.selectOption}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden>
          Do you want to switch category?
        </option>
        {disease.map((d, index) => (
          <option key={index} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SwitchCategoryHomePage;
