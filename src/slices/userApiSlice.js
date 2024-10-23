// src/slices/userSlice.js
import { apiSlice } from './apiSlice';

// Inject endpoints for user actions
export const userSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['User'],
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
        getUserProfile: builder.query({
            query: () => '/auth/profile',
            providesTags: ['User'],
        }),
    }),
});

// Export hooks for the defined queries and mutations
export const {
    useLoginUserMutation,
    useLogoutUserMutation,
    useGetUserProfileQuery,
} = userSlice;

// Export the reducer to be included in the store
export default userSlice.reducer;
