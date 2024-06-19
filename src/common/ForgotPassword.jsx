import React from "react";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  return (
    <div className={styles.rememberMeAndForgotPasswordContainer}>
      <div className={styles.rememberMeContainer}>
        <input type="checkbox" />
        <label className={styles.rememberMe}>Remember me</label>
      </div>
      <p className={styles.forgotPassword}>Forgot Password?</p>
    </div>
  );
};

export default ForgotPassword;
