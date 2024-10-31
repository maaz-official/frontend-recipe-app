import { apiSlice } from './apiSlice';
import { TAG_URL } from '../utils/constant'; // Ensure TAG_URL points to the base endpoint for tags

// Inject endpoints for tags
export const tagsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTags: builder.query({
            query: () => `${TAG_URL}`, // Fetch all tags
            providesTags: ['Tag'],
        }),
        getTagById: builder.query({
            query: (id) => `${TAG_URL}/${id}`, // Fetch a single tag by ID
            providesTags: (result, error, id) => [{ type: 'Tag', id }],
        }),
        addTag: builder.mutation({
            query: (newTag) => ({
                url: `${TAG_URL}`, // Create a new tag
                method: 'POST',
                body: newTag,
            }),
            invalidatesTags: ['Tag'],
        }),
        updateTag: builder.mutation({
            query: ({ id, updatedTag }) => ({
                url: `${TAG_URL}/${id}`, // Update a tag by ID
                method: 'PUT',
                body: updatedTag,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Tag', id }],
        }),
        deleteTag: builder.mutation({
            query: (id) => ({
                url: `${TAG_URL}/${id}`, // Delete a tag by ID
                method: 'DELETE',
            }),
            invalidatesTags: ['Tag'],
        }),
    }),
});

// Export hooks for the defined queries and mutations
export const {
    useGetTagsQuery,
    useGetTagByIdQuery,
    useAddTagMutation,
    useUpdateTagMutation,
    useDeleteTagMutation,
} = tagsSlice;

// Export the reducer to be included in the store
export default tagsSlice.reducer;
