// RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.name}`}>
        <img src={recipe.image} alt={recipe.name} />
        <h2>{recipe.name}</h2>
      </Link>
    </div>
  );
};[]

export default RecipeCard;
