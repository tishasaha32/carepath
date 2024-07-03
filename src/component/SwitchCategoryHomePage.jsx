import React from "react";
import styles from "./SwitchCategoryHomePage.module.css";
import { useSelector } from "react-redux";

function SwitchCategoryHomePage() {
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
        <option value="1">PCOD-PCOS</option>
        <option value="2">THYROID</option>
      </select>
    </div>
  );
}

export default SwitchCategoryHomePage;
