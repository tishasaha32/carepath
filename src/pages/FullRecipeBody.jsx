import React, { useState } from "react";
import styles from "./FullRecipeBody.module.css";
import useGetRecipe from "../hooks/useGetRecipe";
import HeaderWithBackAndProfile from "../common/HeaderWithBackAndProfile";
import RecipeImageTitleDescription from "../common/RecipeImageTitleDescription";
import ReviewsContainer from "../common/ReviewsContainer";
import RecipeDetailsContainer from "../common/RecipeDetailsContainer";
import { useParams } from "react-router-dom";

function FullRecipeBody() {
  const { id } = useParams();
  const [recipeDetailTab, setRecipeDetailTab] = useState("ingredients");
  const { recipe } = useGetRecipe({ docId: id });

  return (
    <div>
      <HeaderWithBackAndProfile />
      <RecipeImageTitleDescription recipe={recipe} />
      <RecipeDetailsContainer
        setRecipeDetailTab={setRecipeDetailTab}
        recipeDetailTab={recipeDetailTab}
      />
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
        {recipeDetailTab === "reviews" && <ReviewsContainer docId={id} />}
      </div>
    </div>
  );
}

export default FullRecipeBody;
