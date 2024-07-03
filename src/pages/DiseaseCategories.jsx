import React, { useEffect, useState } from "react";
import styles from "./DiseaseCategories.module.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function DiseaseCategories() {
  const diseaseCategoriesArray = [
    {
      id: 1,
      name: "PCOD-PCOS",
      selected: false,
      img: "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/diseaseCatgories%2FPCOD-PCOS.png?alt=media&token=b1cef4f1-2729-41cb-b757-8c5e33c2076d",
    },
    {
      id: 2,
      name: "THYROID",
      selected: false,
      img: "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/diseaseCatgories%2FTHYROID.png?alt=media&token=98588012-0856-4fe6-b0a2-c0cc5023a5d5",
    },
    {
      id: 3,
      name: "OBESITY",
      selected: false,
      img: "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/diseaseCatgories%2FOBESITY.png?alt=media&token=7d1f6cb0-8315-4263-ba73-864efab11711",
    },
    {
      id: 4,
      name: "DEPRESSION",
      selected: false,
      img: "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/diseaseCatgories%2FDEPRESSION.png?alt=media&token=865470ab-b2ec-4f7d-b0c2-95a9487813d7",
    },
    {
      id: 5,
      name: "DIABETES",
      selected: false,
      img: "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/diseaseCatgories%2FDIABETES.png?alt=media&token=fe9af6ca-a365-432f-97da-3b846644c257",
    },
    {
      id: 6,
      name: "UNDERWEIGHT",
      selected: false,
      img: "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/diseaseCatgories%2FUNDERWEIGHT.png?alt=media&token=06d67eea-213e-4ac7-b4d8-5ddecce92fb9",
    },
  ];

  const [diseaseCategories, setDiseaseCategories] = useState(
    diseaseCategoriesArray
  );
  const [selectedDisease, setSelectedDisease] = useState([]);

  const toggleCategorySelection = (id) => {
    setDiseaseCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id
          ? { ...category, selected: !category.selected }
          : category
      )
    );
    const selectedCategories = diseaseCategories
      .filter((category) => category.selected)
      .map((category) => category.name);

    setSelectedDisease(selectedCategories);
  };

  const handleDiseaseUpdate = () => {
    console.log(selectedDisease);
  };

  return (
    <div className={styles.diseaseCategoriesContainer}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/logo%2FLogo.png?alt=media&token=d55d4366-a4f2-4d7d-891f-62061ac50e72"
        alt="logo"
        className={styles.diseaseCategoriesLogo}
      />
      <h3 className={styles.diseaseCategoriesHeading}>
        Choose your Categories
      </h3>
      <div className={styles.categoriesWrapper}>
        <div className={styles.categoriesContainer}>
          {diseaseCategories.map((category) => (
            <div key={category.id} className={styles.categoryContainer}>
              <img
                src={category.img}
                alt={category.name}
                className={styles.selectedCategoryImg}
                onClick={() => toggleCategorySelection(category.id)}
              />
              <IoIosCheckmarkCircle
                className={
                  category.selected ? styles.selected : styles.notSelected
                }
              />
            </div>
          ))}
        </div>
      </div>
      {/* <Link to="/"> */}
      <button className={styles.getStartedButton}>Get Started</button>
      {/* </Link> */}
    </div>
  );
}

export default DiseaseCategories;
