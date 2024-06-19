import React from "react";
import styles from "./Login.module.css";
import ForgotPassword from "../common/ForgotPassword";
import SignInWithGoogle from "../common/SignInWithGoogle";

function Login() {
  return (
    <form className={styles.loginContainer}>
      <img src="/images/Logo.png" alt="logo" />
      <h3 className={styles.heading}>Login to your Account!</h3>
      <input
        type="text"
        placeholder="Enter your Email"
        className={styles.input}
        required
      />
      <input
        type="password"
        placeholder="Enter your Password"
        className={styles.input}
        required
      />

      <ForgotPassword />
      <button className={styles.loginButton}>Login</button>
      <SignInWithGoogle />
    </form>
  );
}

export default Login;
