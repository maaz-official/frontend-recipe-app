import React from 'react';
import { useGetRecipesQuery } from '../slices/recipesSlice';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ListAllRecipes() {
  const navigate = useNavigate(); // Initialize navigate
  const { data: recipes = [], error, isLoading } = useGetRecipesQuery();

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error fetching recipes: {error.message}</div>;
  }

  // Function to handle editing a recipe
  const handleEdit = (id) => {
    navigate(`/edit-recipe/${id}`); // Navigate to the EditRecipe page with the recipe ID
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Recipes</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <li key={recipe._id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <button 
                  className="text-blue-500 hover:text-blue-700" 
                  onClick={() => handleEdit(recipe._id)} // Call handleEdit with the recipe ID
                >
                  <FaEdit size={20} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListAllRecipes;
