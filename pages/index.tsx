import React, { ReactNode } from "react";

import Head from "next/head";
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

      <main className="mb-[300px]">
        <h1 className="bg-yellow-300 font-semibold text-2xl">African market</h1>
        <Button>this is a</Button>
      </main>
    </div>
  );
}
Home.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
