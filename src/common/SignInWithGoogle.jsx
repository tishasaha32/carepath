import React from "react";
import styles from "./SignInWithGoogle.module.css";

function SignInWithGoogle() {
  return (
    <div className={styles.signInWithGoogleContainer}>
      <p className={styles.orContainer}>
        <span className={styles.orSpan}>or</span>
      </p>
      <button className={styles.googleButton}>Login with Google</button>
      <p className={styles.signUpContainer}>
        Don't have an account? <span className={styles.signUp}> Sign Up </span>
      </p>
    </div>
  );
}

export default SignInWithGoogle;
