import React from "react";
import Head from "next/head";
import { createTheme } from "react-data-table-component";
import "../assets/css/index.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

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

toast.configure();

import App, {AppInitialProps, AppContext} from 'next/app';
import {END} from 'redux-saga';
import wrapper from '../redux/store';
import { appState } from '../redux/reducers';
import GeneralLayout from '../templates/layout/GeneralLayout';

class WrappedApp extends App<AppInitialProps>
{
    public static getInitialProps = async ({Component, ctx}: AppContext) =>
    {
        // 1. Wait for all page actions to dispatch
        const pageProps = {
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        };

        // 2. Stop the saga if on server
        if (ctx.req) {
            ctx.store.dispatch(END);
            await (ctx.store as appState).sagaTask.toPromise();
        }

        // 3. Return props
        return {
            pageProps,
        };
    };

    public render() {
        const {Component, pageProps} = this.props;
        return(
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
            <GeneralLayout>
              <Component {...pageProps} />
            </GeneralLayout>
        </>
        )
    }
}

export default wrapper.withRedux(WrappedApp);