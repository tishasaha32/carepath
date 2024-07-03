import React from "react";
import styles from "./Onboarding.module.css";

const OnboardingStep1 = ({ finish, skip }) => {
  const imgURL =
    "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/Onboarding%2FOnboardingStep3.png?alt=media&token=3d3a7608-dde6-4a2c-a6ba-9294de880c6a";
  return (
    <div className={styles.onboardingContainer}>
      <p className={styles.onboardingSkip} onClick={skip}>
        Skip
      </p>
      <img src={imgURL} className={styles.onboardingImg} />
      <h2 className={styles.onboardingHeadline}>
        Set Your Routine as per Your Diseases!
      </h2>
      <p className={styles.onboardingText}>
        The best platform to manage your routine and cure the disease.
      </p>
      <button onClick={finish} className={styles.onboardingButton}>
        Get Started
      </button>
    </div>
  );
};

export default OnboardingStep1;
