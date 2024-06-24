import React from "react";
import styles from "./BottomNavbar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { GiCampCookingPot } from "react-icons/gi";
import { TbTreadmill } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BottomNavbar() {
  return (
    <div className={styles.bottomNavbarIconsContainer}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.homeIconContainer}>
          <AiOutlineHome className={styles.homeIcon} />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/recipes" style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.recipesIconContainer}>
          <GiCampCookingPot className={styles.recipesIcon} />
          <p>Recipes</p>
        </div>
      </Link>
      <Link to="/exercise" style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.exerciseIconContainer}>
          <TbTreadmill className={styles.exerciseIcon} />
          <p>Exercise</p>
        </div>
      </Link>
      <Link
        to="/consultancy"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={styles.consultancyIconContainer}>
          <FaUserDoctor className={styles.consultancyIcon} />
          <p>Consult</p>
        </div>
      </Link>
    </div>
  );
}

export default BottomNavbar;
