import React from "react";
import Head from "next/head";
import { createTheme } from "react-data-table-component";
import "../assets/css/index.css";

createTheme("digiChangesThemeTable", {
  text: {
    primary: "#E1E8E8",
    secondary: "#D2D9D9",
  },

  background: {
    default: "#2d3748",
  },
  context: {
    background: "#9C00A1",
    text: "#FFFFFF",
  },
  divider: {
    default: "#a0aec0",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
  sortFocus: {
    default: "#a0aec0",
  },
  striped: {
    default: "#5E6A7D",
    text: "#E1E8E8",
  },
});

const MyApp = ({ Component, pageProps }) => (
  <React.Fragment>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <title>React Experience</title>
    </Head>
    <Component {...pageProps} />
  </React.Fragment>
);

export default MyApp;
