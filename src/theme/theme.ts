"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const primary = {
  main: "#292E7D",
};

const secondary = {
  main: "#903A3E",
};

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: primary,
    secondary: secondary,
  },
});

export default theme;
