import React from "react";
import { Hero } from "./hero";
import { Countries } from "./countries";
import { WhatsWolt } from "./whatsWolt";
import { DidYouKnow } from "./DidYouKnow";
import { DownloadSection } from "./download";

export const HomeUi = () => {
  return (
    <>
      <Hero />
      <Countries/>
      <WhatsWolt />
      <DidYouKnow />
      <DownloadSection/>
     
      {/* <h1>African market glpat-4Hp6_6VrcaALxNM_zXCF</h1> */}
    </>
  );
};
