import React, { useState } from 'react';
import recipes from '../recipes.json';

const Recipes = () => {
  const [recipeIndex, setRecipeIndex] = useState(0);
  const recipe = recipes[recipeIndex];

  const handleShuffleClick = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    setRecipeIndex(randomIndex);
  };

  return (
    <>
          <button
        className="py-2 px-3 bg-emerald-500 rounded-md text-white mt-2 w-fit m-auto"
        onClick={handleShuffleClick}
      >
        Shuffle
      </button>
    <div className='border border-gray rounded-lg p-4 w-10/12 md:w-3/12 m-4 gap-4 flex flex-col m-auto'>
      <h2 className='font-bold text-xl'>{recipe.name}</h2>
      <p className='text-xs text-gray-400 font-bold'>{recipe.description}</p>
      <ul className='pl-6'>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className='list-disc'>{ingredient}</li>
        ))}
      </ul>
      {recipe.recipeLink && <a href={recipe.recipeLink} className='w-fit m-auto py-2 px-3 bg-emerald-500 rounded-md text-white'>Recette</a>}
      <div className='flex flex-wrap'>
        {recipe.filters.map((filter, index) => (
          <button
            key={index}
            className="py-2 px-3 bg-gray-200 rounded-md text-xs mr-2 mb-2"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Recipes;