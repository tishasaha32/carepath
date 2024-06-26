import React, { useEffect, useState } from "react";
import HeaderWithBackAndProfile from "../common/HeaderWithBackAndProfile";
import styles from "./CategoryWiseRecipes.module.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";

function CategoryWiseRecipes() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const pathname = window.location.pathname;
  const mealTime = pathname.split("/")[2];
  //get recipes collection from firestore
  useEffect(() => {
    const getRecipes = async () => {
      const recipesCollection = collection(db, "recipes");
      const recipesSnapshot = await getDocs(recipesCollection);
      const recipesList = recipesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllRecipes(recipesList);
      const filteredRecipes = recipesList.filter((recipe) => {
        return recipe.mealCategory === "veg" && recipe.mealTime === mealTime;
      });
      setRecipes(filteredRecipes);
    };
    getRecipes();
  }, []);

  const handleMealCategory = (category) => {
    const filteredRecipes = allRecipes.filter((recipe) => {
      return recipe.mealCategory === category && recipe.mealTime === mealTime;
    });
    setRecipes(filteredRecipes);
  };

  return (
    <div>
      <HeaderWithBackAndProfile />
      <div className={styles.mealCategoriesContainer}>
        <p onClick={() => handleMealCategory("veg")}>Vegetarian</p>
        <p onClick={() => handleMealCategory("vegan")}>Vegan</p>
        <p onClick={() => handleMealCategory("nonveg")}>Non-Vegetarian</p>
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
