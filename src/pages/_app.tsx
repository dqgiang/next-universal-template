import React, { useEffect } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import ErrorPage from 'next/error';
import TagManager from 'react-gtm-module';
import { DefaultSeo } from 'next-seo';

import '../styles/style.css';
import { getGlobalData } from '@utils/api';

const gtmArgs = {
  gtmId: process.env.GTM_ID || '',
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { global } = pageProps;
  if (global == null) {
    return <ErrorPage statusCode={404} />;
  }
  const { metadata } = global;

  useEffect(() => {
    /*
     * Initialize GTM and only trigger when page load.
     * It does not trigger when change route in SPA.
     * Therefore, must set trigger in GTM console as (History Change or Page View) instead of just (Page View)
     */
    if (gtmArgs.gtmId) {
      TagManager.initialize(gtmArgs);
    }
  }, []);

  return (
    <>
      <DefaultSeo {...metadata} />
      <Component {...pageProps} />
    </>
  );
};

/*
 * Fetch global data from external CMS source.
 * getInitialProps disables automatic static optimization for pages that don't
 * have getStaticProps. Any page that has getStaticProps still gets SSG.
 */
MyApp.getInitialProps = async (appCtx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appCtx);
  // Fetch global site settings from CMS
  const global = await getGlobalData();
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global, path: appCtx.ctx.pathname } };
};

export default MyApp;
