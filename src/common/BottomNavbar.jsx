import React, { useState } from "react";
import styles from "./BottomNavbar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { GiCampCookingPot } from "react-icons/gi";
import { TbTreadmill } from "react-icons/tb";
import { GrResources } from "react-icons/gr";
import { NavLink } from "react-router-dom";

function BottomNavbar() {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.bottomNavbarIconsContainer}>
      <NavLink
        to="/"
        style={{ textDecoration: "none" }}
        className={({ isActive }) =>
          isActive ? styles.activeIconContainer : styles.homeIconContainer
        }
        onClick={() => handleTabClick("home")}
      >
        <AiOutlineHome className={styles.homeIcon} />
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/recipes"
        style={{ textDecoration: "none" }}
        className={({ isActive }) =>
          isActive ? styles.activeIconContainer : styles.recipesIconContainer
        }
        onClick={() => handleTabClick("recipes")}
      >
        <GiCampCookingPot className={styles.recipesIcon} />
        <p>Recipes</p>
      </NavLink>
      <NavLink
        to="/exercise"
        style={{ textDecoration: "none" }}
        className={({ isActive }) =>
          isActive ? styles.activeIconContainer : styles.exerciseIconContainer
        }
        onClick={() => handleTabClick("exercise")}
      >
        <TbTreadmill className={styles.exerciseIcon} />
        <p>Exercise</p>
      </NavLink>
      <NavLink
        to="/resources"
        style={{ textDecoration: "none" }}
        className={({ isActive }) =>
          isActive ? styles.activeIconContainer : styles.resourceIconContainer
        }
        onClick={() => handleTabClick("consultancy")}
      >
        <GrResources className={styles.resourceIcon} />
        <p>Resources</p>
      </NavLink>
    </div>
  );
}

export default BottomNavbar;
