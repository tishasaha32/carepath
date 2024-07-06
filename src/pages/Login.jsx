import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import ForgotPassword from "../common/ForgotPassword";
import SignInWithGoogle from "../common/SignInWithGoogle";
import { LuUserCheck2 } from "react-icons/lu";
import { MdLockOpen } from "react-icons/md";
import { emailSignin } from "../redux/reducer/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailSignin({ email, password }));
  };

  useEffect(() => {
    if (user) {
      navigate("/onboarding");
    }
  }, [user]);

  return (
    <div className={styles.loginContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/logo%2FLogo.png?alt=media&token=d55d4366-a4f2-4d7d-891f-62061ac50e72"
          alt="logo"
        />
        <h3 className={styles.heading}>Login to your Account!</h3>
        <div className={styles.inputContainer}>
          <LuUserCheck2 className={styles.icon} />
          <input
            type="text"
            placeholder="Enter your Email"
            className={styles.input}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <MdLockOpen className={styles.icon} />
          <input
            type="password"
            placeholder="Enter your Password"
            className={styles.input}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <ForgotPassword />
        <button className={styles.loginButton}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      <SignInWithGoogle />
    </div>
  );
}

export default Login;
