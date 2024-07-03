import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DiseaseCategories from "./pages/DiseaseCategories.jsx";
import SelectedDisease from "./pages/SelectedDisease.jsx";
import Home from "./pages/Home.jsx";
import Recipe from "./pages/Recipe.jsx";
import Exercise from "./pages/Exercise.jsx";
import Consultancy from "./pages/Consultancy.jsx";
import CategoryWiseRecipes from "./pages/CategoryWiseRecipes.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";
import FullRecipeBody from "./pages/FullRecipeBody.jsx";
import Onboarding from "./pages/Onboarding.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/diseaseCategories" element={<DiseaseCategories />} />
        <Route path="/selectedDisease" element={<SelectedDisease />} />
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/categories/:id" element={<CategoryWiseRecipes />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<FullRecipeBody />} />
      </Routes>
    </div>
  );
};

export default App;
