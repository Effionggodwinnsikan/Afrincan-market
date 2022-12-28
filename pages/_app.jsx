import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/MuiTheme";
import "../styles/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";
import Head from "next/head";

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
      <Head>

      <title>African Market</title>
      <meta
        name="description"
        content="African Market WebApp"
      />
        <link
          rel="preload"
          href="/fonts/OmnesBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/OmnesBlack.ttf"
          as="font"
          crossOrigin=""
        />
        <link
        rel="preload"
        href="/fonts/OmnesExtraLight.ttf"
        as="font"
        crossOrigin=""
        />
        <link
        rel="preload"
        href="/fonts/OmnesLight.ttf"
        as="font"
        crossOrigin=""
        />
        <link
        rel="preload"
        href="/fonts/OmnesRegular.ttf"
        as="font"
        crossOrigin=""
        />
        <link
        rel="preload"
        href="/fonts/OmnesSemiboldRegular.ttf"
        as="font"
        crossOrigin=""
      />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
