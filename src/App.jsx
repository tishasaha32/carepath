import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import Profile from "./pages/Profile.jsx";
import { useDispatch } from "react-redux";
import { clearUser, setUser, setLoading } from "./redux/reducer/authSlice.js";
import { auth } from "./firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from "./component/ProtectedRoute.jsx";

const App = () => {
  const dispatch = useDispatch();
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

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
        const onboarded = localStorage.getItem(`isOnboarded_${user.uid}`);
        setIsOnboarded(Boolean(onboarded));
      } else {
        dispatch(clearUser());
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleOnboardingComplete = (uid) => {
    localStorage.setItem(`isOnboarded_${uid}`, "true");
    setIsOnboarded(true);
  };

  if (!authChecked) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/onboarding"
          element={
            <ProtectedRoute>
              <Onboarding
                onComplete={() =>
                  handleOnboardingComplete(auth.currentUser.uid)
                }
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/diseaseCategories"
          element={
            <ProtectedRoute>
              {isOnboarded ? (
                <DiseaseCategories />
              ) : (
                <Navigate to="/onboarding" />
              )}
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
              {isOnboarded ? <Home /> : <Navigate to="/onboarding" />}
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
