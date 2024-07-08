import React from "react";
import styles from "./HeaderWithBackAndProfile.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

function HeaderWithBackAndProfile() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <div className={styles.headerWithBackAndProfileContainer}>
      <Link to="/recipes" style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.backButton}>
          <IoIosArrowRoundBack className={styles.backIcon} />
          <p className={styles.recipesText}>Back</p>
        </div>
      </Link>
      <div className={styles.profile}>
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt="profile"
            className={styles.profileImage}
          />
        ) : (
          <FaRegUserCircle />
        )}
      </div>
    </div>
  );
}

export default HeaderWithBackAndProfile;
