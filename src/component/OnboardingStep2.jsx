import React from "react";
import styles from "./Onboarding.module.css";

const OnboardingStep1 = ({ next, skip }) => {
  const imgURL =
    "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/Onboarding%2FOnboardingStep2.png?alt=media&token=26d11610-d93c-464a-943c-5b44b308849f";
  return (
    <div className={styles.onboardingContainer}>
      <p className={styles.onboardingSkip} onClick={skip}>
        Skip
      </p>
      <img src={imgURL} className={styles.onboardingImg} />
      <h2 className={styles.onboardingHeadline}>
        Your Personalized Path to Healthier Living!
      </h2>
      <p className={styles.onboardingText}>
        Plan your diet according to your preference
      </p>
      <button onClick={next} className={styles.onboardingButton}>
        Next
      </button>
    </div>
  );
};

export default OnboardingStep1;
