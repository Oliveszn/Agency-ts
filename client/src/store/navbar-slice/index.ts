import { createSlice } from "@reduxjs/toolkit";

type ColorTheme = "transparent" | "white" | "black";

interface ThemeState {
  navTheme: ColorTheme;
}

const initialState: ThemeState = {
  navTheme: "white",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setNavTheme: (state, action) => {
      state.navTheme = action.payload;
    },
  },
});

export const { setNavTheme } = themeSlice.actions;
export default themeSlice.reducer;
