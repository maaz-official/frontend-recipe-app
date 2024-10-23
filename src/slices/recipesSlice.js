import { apiSlice } from './apiSlice';
import { RECIPE_URL } from '../utils/constant';

// Inject endpoints for recipes
export const recipesSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => `${RECIPE_URL}`, // Use RECIPE_URL here
            providesTags: ['Recipe'],
        }),
        getRecipeById: builder.query({
            query: (id) => `${RECIPE_URL}/${id}`, // Use RECIPE_URL here
            providesTags: (result, error, id) => [{ type: 'Recipe', id }],
        }),
        addRecipe: builder.mutation({
            query: (newRecipe) => ({
                url: `${RECIPE_URL}`, // Use RECIPE_URL here
                method: 'POST',
                body: newRecipe,
            }),
            invalidatesTags: ['Recipe'],
        }),
        updateRecipe: builder.mutation({
            query: ({ id, updatedRecipe }) => ({
                url: `${RECIPE_URL}/${id}`, // Use RECIPE_URL here
                method: 'PUT',
                body: updatedRecipe,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Recipe', id }],
        }),
        deleteRecipe: builder.mutation({
            query: (id) => ({
                url: `${RECIPE_URL}/${id}`, // Use RECIPE_URL here
                method: 'DELETE',
            }),
            invalidatesTags: ['Recipe'],
        }),
    }),
});

// Export hooks for the defined queries and mutations
export const {
    useGetRecipesQuery,
    useGetRecipeByIdQuery,
    useAddRecipeMutation,
    useUpdateRecipeMutation,
    useDeleteRecipeMutation,
} = recipesSlice;

// Export the reducer to be included in the store
export default recipesSlice.reducer;
