// Recipe.js
import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../components/data.js';
const Recipe = () => {
  const { recipeName } = useParams();
  const recipe = recipes.find((r) => r.name === recipeName);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className='sigle-recipe'>
      <h1>{recipe.name}</h1>
      <img className='recipeImage' src={recipe.image} alt={recipe.name} />
      <h2 className='ingredients'>Ingredients</h2>
      <ul className='itemList'>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className='ingredients'>Instructions</h2>
      <ul className='itemList'>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
