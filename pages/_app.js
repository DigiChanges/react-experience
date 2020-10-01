import React from "react";
import Head from 'next/head';
import "../assets/css/index.css";

const MyApp = ({ Component, pageProps }) => (
    <React.Fragment>
        <Head>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <title>React Experience</title>
        </Head>
        <Component {...pageProps} />
    </React.Fragment>
)

export default MyApp;
