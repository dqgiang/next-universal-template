import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

/* Use custom _document page to specify lang attribute for Html tag */
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
