import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import {
  clearUser,
  setError,
  setLoading,
  setUser,
} from "./redux/reducer/authSlice.js";
import { auth } from "./firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from "./component/ProtectedRoute.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/onboarding"
          element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          }
        />
        <Route
          path="/diseaseCategories"
          element={
            <ProtectedRoute>
              <DiseaseCategories />
            </ProtectedRoute>
          }
        />
        <Route
          path="/selectedDisease"
          element={
            <ProtectedRoute>
              <SelectedDisease />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes"
          element={
            <ProtectedRoute>
              <Recipe />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exercise"
          element={
            <ProtectedRoute>
              <Exercise />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consultancy"
          element={
            <ProtectedRoute>
              <Consultancy />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories/:id"
          element={
            <ProtectedRoute>
              <CategoryWiseRecipes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addRecipe"
          element={
            <ProtectedRoute>
              <AddRecipe />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <ProtectedRoute>
              <FullRecipeBody />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
