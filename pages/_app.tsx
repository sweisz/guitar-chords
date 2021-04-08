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
        <script src="https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/alphaTab.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
