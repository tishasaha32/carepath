import React from "react";
import styles from "./SwitchCategoryHomePage.module.css";

function SwitchCategoryHomePage() {
  return (
    <div className={styles.switchCategoryContainer}>
      <select name="category" id="category" className={styles.selectOption}>
        <option value="0" disabled selected hidden>
          Do you want to switch category?
        </option>
        <option value="1">PCOD-PCOS</option>
        <option value="2">THYROID</option>
      </select>
    </div>
  );
}

export default SwitchCategoryHomePage;
