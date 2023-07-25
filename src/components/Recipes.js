import React, { useState } from "react";
import recipes from "../recipes.json";

const Recipes = () => {
  const [recipeIndex, setRecipeIndex] = useState(0);
  const recipe = recipes[recipeIndex];
  const duration = recipes.flatMap((recipe) => recipe.duration);
  const uniqueFilters = [...new Set(duration)];
  const [recipesFilters, setRecipesFilters] = useState([]);

    const handleFilterClick = (filter) => {
      const selectedFilter = filter.target.innerText;

      if (recipesFilters.includes(selectedFilter)) {
        setRecipesFilters([]);
      } else {
        setRecipesFilters([selectedFilter]);
      }
    };

  const handleShuffleClick = () => {
    if (recipesFilters.length > 0) {
      console.log("RECIPES ", recipes.duration)
      const filteredRecipes = recipes.filter((recipe) =>
        recipesFilters.includes(recipe.duration)
      );
      const filteredRecipesIndex = filteredRecipes.map((recipe) =>
        recipes.indexOf(recipe)
      );
      const randomIndex = filteredRecipesIndex[
        Math.floor(Math.random() * filteredRecipesIndex.length)
      ];
      console.log("FILTERED RECIPES ", filteredRecipesIndex)
      setRecipeIndex(randomIndex);
    } 
    else {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setRecipeIndex(randomIndex);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center mb-0 md:mb-4 w-full md:w-5/12 m-auto">
{uniqueFilters.map((filter, index) => (
  <button
    key={index}
    onClick={handleFilterClick}
    className={`py-2 px-3 text-black rounded-md mt-2 m-auto border border-grey-400 w-[9rem] md:w-fit ${
      recipesFilters.includes(filter) ? 'bg-emerald-500 text-white' : ''
    }`}
  >
    {filter}
  </button>
))}
      </div>
      <button
        className="py-2 px-3 bg-emerald-500 rounded-md text-white mt-2 w-fit m-auto"
        onClick={handleShuffleClick}
      >
        Shuffle
      </button>
      <div className="border border-gray rounded-lg p-4 w-10/12 md:w-3/12 m-4 gap-4 flex flex-col m-auto">
        <h2 className="font-bold text-xl">{recipe.name}</h2>
        <p className="text-xs text-gray-400 font-bold">{recipe.description}</p>
        <ul className="pl-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="list-disc">
              {ingredient}
            </li>
          ))}
        </ul>
        {recipe.recipeLink && (
          <a
            href={recipe.recipeLink}
            className="w-fit m-auto py-2 px-3 bg-emerald-500 rounded-md text-white"
            target="_blank"
            rel="noreferrer"
          >
            Recette
          </a>
        )}
        <div className="flex flex-wrap">
          {recipe.filter && recipe.filters.map((filter, index) => (
            <button
              key={index}
              className="py-2 px-3 bg-gray-200 rounded-md text-xs mr-2 mb-2"
            >
              {filter}
            </button>
          ))}
          {recipe.duration && 
            <p
              className="py-2 px-3 bg-gray-200 rounded-md text-xs mr-2 mb-2"
            >
              {recipe.duration}
            </p>
          }
        </div>
      </div>
    </>
  );
};

export default Recipes;
