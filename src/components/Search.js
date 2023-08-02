import React, {useState} from 'react';
import recipes from "../recipes.json";
import Recipes from "./Recipes";

const Search = ({ selectedOption }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const results = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSelectChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div className="flex flex-col items-center">
      <div className='relative'>
         <input
        type="text"
        placeholder="Search recipes"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-400 rounded-md py-2 px-4 mb-4 w-64"
      />
              {searchTerm && (
          <button
            className="absolute ml-3 top-[15%] right-2 text-gray-400"
            onClick={handleClearSearch}
          >
            X
          </button>
        )}
      </div>
      {searchResults.length > 0 && (
        <select className="border border-gray-400 rounded-md py-2 px-4 w-64 h-12 bg-white" onChange={handleSelectChange} value={selectedOption}>
          {searchResults.map((recipe) => (
          <option key={recipe.id} value={JSON.stringify(recipe)}>
          {recipe.name}
        </option>
          ))}
        </select>
      )}
      <Recipes selectedOption={searchValue} />
    </div>
  );
};

export default Search;