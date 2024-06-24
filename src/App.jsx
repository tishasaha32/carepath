import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DiseaseCategories from "./pages/DiseaseCategories.jsx";
import SelectedDisease from "./pages/SelectedDisease.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/diseaseCategories" element={<DiseaseCategories />} />
        <Route path="/selectedDisease" element={<SelectedDisease />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
