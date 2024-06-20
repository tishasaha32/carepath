import React from "react";
import styles from "./DiseaseCategories.module.css";

function DiseaseCategories() {
  return (
    <div className={styles.diseaseCategoriesContainer}>
      <img
        src="/images/Logo.png"
        alt="logo"
        className={styles.diseaseCategoriesLogo}
      />
      <h3 className={styles.diseaseCategoriesHeading}>
        Choose your Categories
      </h3>
      <div className={styles.categoriesContainer}>
        <img src="/images/PCOD-PCOS.png" className={styles.categoryImg} />
        <img src="/images/THYROID.png" className={styles.categoryImg} />
        <img src="/images/OBESITY.png" className={styles.categoryImg} />
        <img src="/images/DEPRESSION.png" className={styles.categoryImg} />
        <img src="/images/DIABETES.png" className={styles.categoryImg} />
        <img src="/images/UNDERWEIGHT.png" className={styles.categoryImg} />
      </div>
      <button className={styles.getStartedButton}>Get Started</button>
    </div>
  );
}

export default DiseaseCategories;
