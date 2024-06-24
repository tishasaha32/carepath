import React, { useState } from "react";
import { Link } from "react-router-dom";

function Mealcategories() {
  const [mealCategories, setMealCategories] = useState([
    { id: 1, name: "Breakfast" },
    { id: 2, name: "Lunch" },
    { id: 3, name: "Dinner" },
  ]);
  return (
    <div>
      {mealCategories.map((mealCategory) => (
        <Link to={`/categories/${mealCategory.name}`} key={mealCategory.id}>
          <h1>{mealCategory.name}</h1>
        </Link>
      ))}
    </div>
  );
}

export default Mealcategories;
