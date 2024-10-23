import React, { useState } from 'react';
import { useAddRecipeMutation } from '../slices/recipesSlice'; // Adjust the path if needed
import { AiOutlineCheck, AiOutlineFileText, AiOutlinePicture, AiOutlineTag, AiOutlineClockCircle } from 'react-icons/ai'; // Importing specific icons from react-icons

function CreateRecipe() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        recipesImages: '',
        category: '',
        tags: '',
        preparationTime: '',
        cookingTime: '',
        servings: '',
        ingredients: '',
        instructions: '',
    });

    const [message, setMessage] = useState('');
    const [addRecipe] = useAddRecipeMutation();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert tags and ingredients to arrays
        const tagsArray = formData.tags.split(',').map(tag => tag.trim());
        const ingredientsArray = formData.ingredients.split(',').map(ingredient => ingredient.trim());

        const recipeData = {
            ...formData,
            tags: tagsArray,
            ingredients: ingredientsArray,
            recipesImages: formData.recipesImages.split(',').map(img => img.trim()), // Assuming image URLs are comma-separated
        };

        try {
            const response = await addRecipe(recipeData).unwrap(); // Using unwrap to handle the response
            setMessage(`Recipe created successfully: ${response.title}`);
            setFormData({
                title: '',
                description: '',
                image: '',
                recipesImages: '',
                category: '',
                tags: '',
                preparationTime: '',
                cookingTime: '',
                servings: '',
                ingredients: '',
                instructions: '',
            });
        } catch (error) {
            setMessage('Error creating the recipe');
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create a New Recipe</h2>
            {message && <p className="text-red-500">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Title:</label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <AiOutlineCheck className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full outline-none"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Description:</label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <AiOutlineFileText className="w-5 h-5 text-gray-500 mr-2" />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full outline-none"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Main Image URL:</label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <AiOutlinePicture className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full outline-none"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Additional Images (comma-separated URLs):</label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <AiOutlinePicture className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            name="recipesImages"
                            value={formData.recipesImages}
                            onChange={handleChange}
                            className="mt-1 block w-full outline-none"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Category:</label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <AiOutlineTag className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full outline-none"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Tags (comma-separated):</label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <AiOutlineTag className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            className="mt-1 block w-full outline-none"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Preparation Time:</label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <AiOutlineClockCircle className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            name="preparationTime"
                            value={formData.preparationTime}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full outline-none"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Cooking Time:</label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <AiOutlineClockCircle className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            name="cookingTime"
                            value={formData.cookingTime}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full outline-none"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Servings:</label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <AiOutlineCheck className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="number"
                            name="servings"
                            value={formData.servings}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full outline-none"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Ingredients (comma-separated):</label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <AiOutlineFileText className="w-5 h-5 text-gray-500 mr-2" />
                        <textarea
                            name="ingredients"
                            value={formData.ingredients}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full outline-none"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Instructions (use commas as needed):</label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <AiOutlineFileText className="w-5 h-5 text-gray-500 mr-2" />
                        <textarea
                            name="instructions"
                            value={formData.instructions}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
                >
                    Create Recipe
                </button>
            </form>
        </div>
    );
}

export default CreateRecipe;
