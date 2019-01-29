import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import App, { Container } from "next/app";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = url => {
  NProgress.done();
};
Router.onRouteChangeError = () => NProgress.done();

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
