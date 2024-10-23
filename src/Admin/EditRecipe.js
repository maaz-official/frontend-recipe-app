import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetRecipeByIdQuery, useUpdateRecipeMutation } from '../slices/recipesSlice';

function EditRecipe() {
  const { id } = useParams(); // Get the recipe ID from URL params
  const navigate = useNavigate();

  // Fetch the existing recipe data using the ID
  const { data: recipe, error, isLoading } = useGetRecipeByIdQuery(id);
  
  // Hook to update recipe
  const [updateRecipe] = useUpdateRecipeMutation();

  // State for form data
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    recipesImages: [],
    category: '',
    tags: '',
    preparationTime: '',
    cookingTime: '',
    servings: '',
    ingredients: '',
    instructions: '',
  });

  // Populate the form when recipe data is fetched
  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title,
        description: recipe.description,
        image: recipe.image,
        recipesImages: recipe.recipesImages || [],
        category: recipe.category,
        tags: recipe.tags || '',
        preparationTime: recipe.preparationTime || '',
        cookingTime: recipe.cookingTime || '',
        servings: recipe.servings || '',
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
      });
    }
  }, [recipe]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateRecipe({ id, ...formData }).unwrap();
      navigate('/'); // Redirect to the recipes list after updating
    } catch (err) {
      console.error('Failed to update the recipe: ', err);
    }
  };

  // Loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching recipe: {error.message}</div>;
  if (!recipe) return <div>No recipe found with this ID.</div>; // Handle null case

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            rows="2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="recipesImages" className="block text-sm font-medium text-gray-700">Recipe Images (comma-separated URLs)</label>
          <input
            type="text"
            name="recipesImages"
            value={formData.recipesImages.join(', ')} // Join array for display
            onChange={(e) => handleChange({ target: { name: 'recipesImages', value: e.target.value.split(', ') } })}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="preparationTime" className="block text-sm font-medium text-gray-700">Preparation Time (minutes)</label>
          <input
            type="number"
            name="preparationTime"
            value={formData.preparationTime}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cookingTime" className="block text-sm font-medium text-gray-700">Cooking Time (minutes)</label>
          <input
            type="number"
            name="cookingTime"
            value={formData.cookingTime}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="servings" className="block text-sm font-medium text-gray-700">Servings</label>
          <input
            type="number"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            rows="4"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Update Recipe</button>
      </form>
    </div>
  );
}

export default EditRecipe;
