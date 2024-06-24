import React from "react";
import BottomNavbar from "../common/BottomNavbar";
import HomePageHeader from "../component/HomePageHeader";
import MealCategories from "../component/MealCategories";

function Recipe() {
  return (
    <div>
      <HomePageHeader />
      <MealCategories />
      <BottomNavbar />
    </div>
  );
}

export default Recipe;
