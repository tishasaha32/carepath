import React, { useState } from "react";
import styles from "./MealCategories.module.css";
import { Link } from "react-router-dom";

function Mealcategories() {
  const [mealCategories, setMealCategories] = useState([
    {
      id: 1,
      name: "Breakfast",
      image:
        "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/recipe%20Page%2Faloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent.jpg?alt=media&token=75cb5284-ebf2-4e52-8f83-000e54507242",
      message:
        "A healthy breakfast includes a balance of protein to provide sustained energy.",
    },
    {
      id: 2,
      name: "Lunch",
      image:
        "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/recipe%20Page%2Findian-butter-chicken-black-bowl-wooden-table.jpg?alt=media&token=b1021e2b-2f6c-4146-8f04-9577cf859867",
      message:
        "A balanced lunch includes protein, healthy fats to support energy and well-being.",
    },
    {
      id: 3,
      name: "Dinner",
      image:
        "https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/recipe%20Page%2Ffresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg?alt=media&token=9b0d3908-34a1-4e61-8945-549339c6a912",
      message:
        "Eating a nutritious dinner can support improve digestion and promote restful sleep.",
    },
  ]);
  return (
    <div className={styles.recipeMealCategoriesContainer}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/carepath-medhack.appspot.com/o/recipe%20Page%2FRectangle%2083.png?alt=media&token=19f83d8c-1145-41d8-b7a1-0d966d040096"
        className={styles.recipePageImage}
      />
      {mealCategories.map((mealCategory) => (
        <Link
          to={`/categories/${mealCategory.name}`}
          key={mealCategory.id}
          style={{ textDecoration: "none", color: "inherit" }}
          className={styles.mealCategoriesContainer}
        >
          <div className={styles.mealContainer}>
            <img src={mealCategory.image} className={styles.mealImage} />
            <div>
              <h3 className={styles.mealName}>{mealCategory.name}</h3>
              <p className={styles.message}>{mealCategory.message}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Mealcategories;
