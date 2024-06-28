import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { LuUserCheck2 } from "react-icons/lu";
import { MdLockOpen } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import useHandleRegister from "../hooks/useHandleRegister";

function Register() {
  const handleRegister = useHandleRegister({});

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister(email, password, fullName, phoneNumber);
  };
  return (
    <form className={styles.registerContainer} onSubmit={handleSubmit}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/logo%2FLogo.png?alt=media&token=d55d4366-a4f2-4d7d-891f-62061ac50e72"
        alt="logo"
      />
      <h3 className={styles.heading}>Create your Account!</h3>
      <div className={styles.inputContainer}>
        <LuUserCheck2 className={styles.icon} />
        <input
          type="text"
          placeholder="Enter your Full Name"
          className={styles.input}
          required
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>

      <div className={styles.inputContainer}>
        <IoMailOpenOutline className={styles.icon} />
        <input
          type="text"
          placeholder="Enter your Email"
          className={styles.input}
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className={styles.inputContainer}>
        <IoIosPhonePortrait className={styles.icon} />
        <input
          type="number"
          placeholder="Enter your Phone Number"
          className={styles.input}
          required
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
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
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <button className={styles.registerButton}>Register</button>
      <p className={styles.loginContainer}>
        Already have an account?{" "}
        <Link to="/login" className={styles.login}>
          Login
        </Link>
      </p>
    </form>
  );
}

export default Register;
