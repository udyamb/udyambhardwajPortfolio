import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import Header from "@/Components/Header";
import ThemeContext from "@/Providers/ThemeContext";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',

    },
  },
});

export default function App({ Component, pageProps }) {
  return(
    <ThemeContext>
      <Header/>
     <Component {...pageProps} />
    </ThemeContext>
    );
}
