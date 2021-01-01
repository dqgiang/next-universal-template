import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

import { Card } from '@components/card';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br />
          <span className="text-green-600">
            The Universal <a href="https://nextjs.org/blog/next-10">Next.js 10</a> Template!
          </span>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Card
            url="https://nextjs.org/docs"
            title="Documentation"
            text="Find in-depth information about Next.js features and API."
          />

          <Card
            url="https://nextjs.org/learn"
            title="Learn"
            text="Learn about Next.js in an interactive course with quizzes!"
          />

          <Card
            url="https://github.com/vercel/next.js/tree/master/examples"
            title="Examples"
            text="Discover and deploy boilerplate example Next.js projects."
          />

          <Card
            url="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy"
            text="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Template by Platformerie</p>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
