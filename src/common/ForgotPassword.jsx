import React from "react";
import styles from "./ForgotPassword.module.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className={styles.rememberMeAndForgotPasswordContainer}>
      <div className={styles.rememberMeContainer}>
        <input type="checkbox" />
        <label className={styles.rememberMe}>Remember me</label>
      </div>
      <Link to="/resetPassword" className={styles.forgotPassword}>
        <p>Forgot Password?</p>
      </Link>
    </div>
  );
};

export default ForgotPassword;
