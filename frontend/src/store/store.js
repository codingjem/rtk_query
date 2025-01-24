import { configureStore } from "@reduxjs/toolkit";
import { messageApiSlice } from "../services/messagesApiSlice";

export default configureStore({
    reducer: {
        [messageApiSlice.reducerPath]: messageApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(messageApiSlice.middleware),
});
