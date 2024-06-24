import React from "react";
import { IoManOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./HomePageHeader.module.css";

function HomePageHeader() {
  return (
    <div className={styles.homePage}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/logo%2FLogo.png?alt=media&token=d55d4366-a4f2-4d7d-891f-62061ac50e72"
        className={styles.logo}
      />
      <div className={styles.resoucesAndUserContainer}>
        <div className={styles.resourcesContainer}>
          <IoManOutline className={styles.resourceIcon} />
          <p className={styles.resourcesText}>Resources</p>
        </div>
        <FaRegUserCircle className={styles.userIcon} />
      </div>
    </div>
  );
}

export default HomePageHeader;
