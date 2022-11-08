import React from "react";
import { Hero } from "./hero";
import { Countries } from "./countries";
import { WhatsWolt } from "./whatsWolt";
import { DidYouKnow } from "./DidYouKnow";
import { DownloadSection } from "./download";
import { Partner } from "./partner";

export const HomeUi = () => {
  return (
    <>
      <Hero />
      <Countries/>
      <WhatsWolt />
      <DidYouKnow />
      <DownloadSection />
      <Partner/>
     
      
    </>
  );
};
