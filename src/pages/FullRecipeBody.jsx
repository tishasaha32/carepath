import React, { useState } from "react";
import styles from "./FullRecipeBody.module.css";
import useGetRecipe from "../hooks/useGetRecipe";
import HeaderWithBackAndProfile from "../common/HeaderWithBackAndProfile";

function FullRecipeBody() {
  const pathname = window.location.pathname;
  const docId = pathname.split("/")[2];
  const [recipeDetailTab, setRecipeDetailTab] = useState("ingredients");
  const { recipe } = useGetRecipe({ docId });

  return (
    <div>
      <HeaderWithBackAndProfile />
      <div className={styles.recipeImageContainer}>
        <img
          src={recipe.imageURL}
          alt="recipe"
          className={styles.recipeImage}
        />
      </div>
      <div className={styles.recipeTitleAndDescriptionContainer}>
        <h2>{recipe.recipeName} Recipe</h2>
        <p>
          Indulge in the delightful flavors of {recipe.recipeName} as your
          perfect {recipe.mealTime} with your loved ones.
        </p>
      </div>
      <div className={styles.recipeDetailsContainer}>
        <h3
          className={recipeDetailTab === "ingredients" ? styles.activeTab : ""}
          onClick={() => setRecipeDetailTab("ingredients")}
        >
          Ingredients
        </h3>
        <h3
          className={recipeDetailTab === "recipe" ? styles.activeTab : ""}
          onClick={() => setRecipeDetailTab("recipe")}
        >
          Recipe
        </h3>
        <h3
          className={recipeDetailTab === "reviews" ? styles.activeTab : ""}
          onClick={() => setRecipeDetailTab("reviews")}
        >
          Reviews
        </h3>
      </div>
      <div className={styles.recipeDetails}>
        {recipeDetailTab === "ingredients" && (
          <p
            className={styles.ingredients}
            dangerouslySetInnerHTML={{ __html: recipe.ingredients }}
          />
        )}
        {recipeDetailTab === "recipe" && (
          <p
            className={styles.recipe}
            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
          />
        )}
        {recipeDetailTab === "reviews" && (
          <div className={styles.reviewsContainer}>
            {recipe.reviews ? (
              <p
                className={styles.reviews}
                dangerouslySetInnerHTML={{ __html: recipe.reviews }}
              />
            ) : (
              <p className={styles.noReviews}>No reviews yet</p>
            )}

            <div className={styles.reviewInputContainer}>
              <input
                type="text"
                placeholder="Share the details of your experience here"
                className={styles.reviewInput}
              />
              <button className={styles.submitButton}>Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FullRecipeBody;
