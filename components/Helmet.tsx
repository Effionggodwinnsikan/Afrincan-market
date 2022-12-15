import Head from 'next/head';
import React from 'react'
interface HeadProps{
    title: string;
    desc: string
}
// This components consist of meta data and could be reusable across pages 
const Helmet = ({ title, desc }: HeadProps) => {
   
  return (
    <Head>
          <title>{ title}</title>
      <meta name="description" content={desc} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Helmet