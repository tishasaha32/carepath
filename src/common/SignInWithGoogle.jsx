import React from "react";
import styles from "./SignInWithGoogle.module.css";
import { Link } from "react-router-dom";
import useHandleGoogleLogin from "../hooks/useHandleGoogleLogin";

function SignInWithGoogle() {
  const { googleLogin } = useHandleGoogleLogin();
  return (
    <div className={styles.signInWithGoogleContainer}>
      <p className={styles.orContainer}>
        <span className={styles.orSpan}>or</span>
      </p>
      <button className={styles.googleButton} onClick={googleLogin}>
        Login with Google
      </button>
      <p className={styles.signUpContainer}>
        Don't have an account?{" "}
        <Link to="/register" className={styles.signUp}>
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default SignInWithGoogle;
