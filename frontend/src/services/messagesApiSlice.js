import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const messageApiSlice = createApi({
    reducerPath: "messagesApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getMessage: builder.mutation({
            query: (message) => ({
                url: "getMessage",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: message,
            }),
        }),
    }),
});

export const { useGetMessageMutation } = messageApiSlice;
