import React from "react";
import styles from "./Login.module.css";
import ForgotPassword from "../common/ForgotPassword";
import SignInWithGoogle from "../common/SignInWithGoogle";
import { LuUserCheck2 } from "react-icons/lu";
import { MdLockOpen } from "react-icons/md";

function Login() {
  return (
    <form className={styles.loginContainer}>
      <img src="/images/Logo.png" alt="logo" />
      <h3 className={styles.heading}>Login to your Account!</h3>
      <div className={styles.inputContainer}>
        <LuUserCheck2 className={styles.icon} />
        <input
          type="text"
          placeholder="Enter your Email"
          className={styles.input}
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <MdLockOpen className={styles.icon} />
        <input
          type="password"
          placeholder="Enter your Password"
          className={styles.input}
          required
        />
      </div>

      <ForgotPassword />
      <button className={styles.loginButton}>Login</button>
      <SignInWithGoogle />
    </form>
  );
}

export default Login;
