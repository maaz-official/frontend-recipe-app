// src/slices/recipesSlice.js
import { apiSlice } from './apiSlice';

// Inject endpoints for recipes
export const recipesSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => '/recipes',
            providesTags: ['Recipe'],
        }),
        getRecipeById: builder.query({
            query: (id) => `/recipes/${id}`,
            providesTags: (result, error, id) => [{ type: 'Recipe', id }],
        }),
        addRecipe: builder.mutation({
            query: (newRecipe) => ({
                url: '/recipes',
                method: 'POST',
                body: newRecipe,
            }),
            invalidatesTags: ['Recipe'],
        }),
        updateRecipe: builder.mutation({
            query: ({ id, updatedRecipe }) => ({
                url: `/recipes/${id}`,
                method: 'PUT',
                body: updatedRecipe,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Recipe', id }],
        }),
        deleteRecipe: builder.mutation({
            query: (id) => ({
                url: `/recipes/${id}`,
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
