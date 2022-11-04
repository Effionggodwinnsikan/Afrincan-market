import Head from 'next/head'
import React, { ReactNode } from "react";
import { HomeUi } from '../components';

import RootLayout from "../layout/RootLayout";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Head>
        <title>African market</title>
        <meta name="description" content="the african market web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <HomeUi/>
      </main>
    </div>
  );
}
Home.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
