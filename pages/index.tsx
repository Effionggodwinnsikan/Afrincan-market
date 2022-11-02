import React, { ReactNode } from "react";

import Head from "next/head";
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
        <h1 className="bg-yellow-300 font-semibold text-2xl">African market</h1>
      </main>
    </div>
  );
}
Home.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
