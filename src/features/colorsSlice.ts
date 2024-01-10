import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const colorsSlice = createSlice({
  name: "colors",
  initialState: { colors: [] as string[] },
  reducers: {
    setColors: (state, action: PayloadAction<string>) => {
      const colorIndexIfExisting = state.colors.indexOf(action.payload);

      if (colorIndexIfExisting > -1) {
        state.colors.splice(colorIndexIfExisting, 1);
        return;
      }

      if (state.colors.length < 2) {
        state.colors.push(action.payload);
      }
    },
    clearColors: (state) => {
      state.colors = [];
    },
  },
});

export const selectColors = (state: { colors: { colors: string[] } }) => {
  return state.colors.colors;
};

export const { setColors, clearColors } = colorsSlice.actions;

export default colorsSlice.reducer;
