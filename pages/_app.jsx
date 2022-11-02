import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/MuiTheme";
import "../styles/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";

export default function App({ Component, pageProps }) {
  NProgress.configure({
    showSpinner: false,
  });
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
  const getLayout = Component.getLayout || ((page) => page);


  return (
    <ThemeProvider theme={theme}>
         {getLayout(<Component {...pageProps} />)}

    </ThemeProvider>
  );
}
