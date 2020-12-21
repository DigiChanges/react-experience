import React from "react";
import Head from "next/head";
import { createTheme } from "react-data-table-component";
import "../assets/css/index.css";
import { Provider } from 'react-redux'
import {configureStore} from "../redux/store";
import ContentLayout from "../templates/layout/ContentLayout";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CookiesProvider } from 'react-cookie'
import AuthProvider from '../auth/AuthProvider'

createTheme("DGDarkTheme", {
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

toast.configure()

const MyApp = ({ Component, pageProps }: any): any => (
  <>
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

    <Provider store={configureStore({})}>
      <CookiesProvider>
        <ContentLayout>
          <AuthProvider>
            <Component {...pageProps} />  
          </AuthProvider>
        </ContentLayout>
      </CookiesProvider>
    </Provider>
  </>
);

export default MyApp;
