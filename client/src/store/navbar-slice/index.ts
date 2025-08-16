import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ColorTheme = "transparent" | "white" | "black";

interface ThemeState {
  navTheme: ColorTheme;
  footerTheme: ColorTheme;
}

const initialState: ThemeState = {
  navTheme: "white",
  footerTheme: "white",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setNavTheme: (
      state,
      action: PayloadAction<{ navTheme: ColorTheme; footerTheme: ColorTheme }>
    ) => {
      state.navTheme = action.payload.navTheme;
      state.footerTheme = action.payload.footerTheme;
    },
  },
});

export const { setNavTheme } = themeSlice.actions;
export default themeSlice.reducer;
