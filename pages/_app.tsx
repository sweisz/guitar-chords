import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
