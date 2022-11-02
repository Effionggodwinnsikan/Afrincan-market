import Head from 'next/head'
import React, { ReactNode } from "react";

import RootLayout from "../layout/RootLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>African market</title>
        <meta name="description" content="the african market web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          African market
          glpat-4Hp6_6VrcaALxNM_zXCF
     </h1>
      </main>
    </div>
  );
}
Home.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
