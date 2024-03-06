// Recipes.js
import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard'; // Adjust the path based on your project structure
import recipes from '../components/data.js';
const Recipes = () => {
  return (
    <div className='recipes'>
      <div className="recipe-container">
        {recipes.map((recipe, index) => (
          <Link key={index} to={`/recipe/${recipe.name}`}>
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
