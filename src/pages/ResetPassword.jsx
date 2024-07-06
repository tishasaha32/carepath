import React, { useState } from "react";
import styles from "./ResetPassword.module.css";
import { Link } from "react-router-dom";
import useHandleResetPassword from "../hooks/useHandleResetPassword";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const { handleResetPassword } = useHandleResetPassword(email);
  return (
    <div className={styles.resetPasswordPageContainer}>
      <div className={styles.logoContainer}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/logo%2FLogo.png?alt=media&token=d55d4366-a4f2-4d7d-891f-62061ac50e72"
          alt="logo"
          className={styles.logo}
        />
      </div>

      <form
        className={styles.resetPasswordContainer}
        onSubmit={handleResetPassword}
      >
        <input
          type="text"
          placeholder="Enter Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className={styles.sendResetLinkButton}>SEND RESET LINK</button>
      </form>

      <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
        <p className={styles.goBack}>GO BACK</p>
      </Link>
    </div>
  );
}

export default ResetPassword;
