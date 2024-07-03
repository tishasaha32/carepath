import React from "react";
import styles from "./Onboarding.module.css";

const OnboardingStep1 = ({ next, skip }) => {
  const imgURL =
    "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/Onboarding%2FOnboardingStep1.png?alt=media&token=f8f6d437-1345-4fac-9302-b59bcdd39f5c";
  return (
    <div className={styles.onboardingContainer}>
      <p className={styles.onboardingSkip} onClick={skip}>
        Skip
      </p>
      <img src={imgURL} className={styles.onboardingImg} />
      <h2 className={styles.onboardingHeadline}>Choose Healthy Food!</h2>
      <p className={styles.onboardingText}>
        Vegetarian Meal/Vegan/Non-vegetarian Meal/Salads/Desserts/Quick Bites.
      </p>
      <button onClick={next} className={styles.onboardingButton}>
        Next
      </button>
    </div>
  );
};

export default OnboardingStep1;
