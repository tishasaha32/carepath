import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DiseaseCategories from "./pages/DiseaseCategories.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/diseaseCategories" element={<DiseaseCategories />} />
      </Routes>
    </div>
  );
};

export default App;
