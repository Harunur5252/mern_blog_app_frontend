import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 0,
};

export const blogSlice = createSlice({
  name: "blogPost",
  initialState,
  reducers: {
    credentials: (state) => {
      state.user += 1;
    },
  },
});

export const { credentials } = blogSlice.actions;
export default blogSlice.reducer;
