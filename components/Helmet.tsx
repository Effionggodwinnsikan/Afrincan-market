import Head from 'next/head';
import React from 'react'
interface HeadProps{
    title: string;
    desc: string
}

const Helmet = ({ title, desc }: HeadProps) => {
    // African market
    // the african market web app
  return (
    <Head>
          <title>{ title}</title>
      <meta name="description" content={desc} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Helmet