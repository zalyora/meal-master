import React, { useState } from "react";
import RecipeDetailsContainer from "./RecipeDetailsContainer";

const Recipe = ({ recipe }) => {
  const [openModal, setOpenModal] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={() => setOpenModal(true)}>Ingredients</button>
      <RecipeDetailsContainer open={openModal} ingredients={ingredients} label={label} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Recipe;