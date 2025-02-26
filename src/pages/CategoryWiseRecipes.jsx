import React from "react";
import HeaderWithBackAndProfile from "../common/HeaderWithBackAndProfile";
import styles from "./CategoryWiseRecipes.module.css";
import { Link } from "react-router-dom";
import useGetCategoryWiseRecipes from "../hooks/useGetCategoryWiseRecipes";

function CategoryWiseRecipes() {
  const pathname = window.location.pathname;
  const mealTime = pathname.split("/")[2];

  const { recipes, handleMealCategory, mealCategory } =
    useGetCategoryWiseRecipes({
      pathname,
      mealTime,
    });
  return (
    <div>
      <HeaderWithBackAndProfile />
      <div className={styles.mealCategoriesContainer}>
        <p
          onClick={() => handleMealCategory("veg")}
          className={mealCategory === "veg" ? styles.activeCategory : ""}
        >
          Vegetarian
        </p>
        <p
          onClick={() => handleMealCategory("vegan")}
          className={mealCategory === "vegan" ? styles.activeCategory : ""}
        >
          Vegan
        </p>
        <p
          onClick={() => handleMealCategory("nonveg")}
          className={mealCategory === "nonveg" ? styles.activeCategory : ""}
        >
          Non-Vegetarian
        </p>
      </div>

      <div className={styles.recipesContainer}>
        {recipes?.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className={styles.recipeContainer}>
              <img
                src={recipe.imageURL}
                alt={recipe.recipeName}
                className={styles.recipeImage}
              />
              <div className={styles.overlay}> </div>
              <p className={styles.recipeName}>{recipe.recipeName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryWiseRecipes;
