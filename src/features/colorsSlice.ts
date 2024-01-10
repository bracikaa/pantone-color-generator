import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const colorsSlice = createSlice({
  name: "colors",
  initialState: { colors: [] as string[] },
  reducers: {
    setColors: (state, action: PayloadAction<string[]>) => {
      state.colors.push(...action.payload);
    },
  },
});

export const selectColors = (state: { colors: string[] }) => state.colors;

export const { setColors } = colorsSlice.actions;

export default colorsSlice.reducer;
