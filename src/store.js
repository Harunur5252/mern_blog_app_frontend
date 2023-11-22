import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blogPost/blogSlice";
import { blogApiSlice } from "./features/api/blogApiSlices";

export const store = configureStore({
  reducer: {
    auth: blogReducer,
    [blogApiSlice.reducerPath]: blogApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApiSlice.middleware),
  devTools: true,
});
