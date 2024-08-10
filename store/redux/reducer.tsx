import { createSlice } from "@reduxjs/toolkit";
const reducersSlice = createSlice({
  name: "reducers",
  initialState: {
    ids: [] as any,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.slice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = reducersSlice.actions.addFavorite;
export const removeFavorite = reducersSlice.actions.removeFavorite;
export default reducersSlice.reducer;
