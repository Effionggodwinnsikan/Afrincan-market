import React from "react";
import { Hero } from "./hero";
import { Countries } from "./countries";
import { WhatsWolt } from "./whatsWolt";
import { DidYouKnow } from "./DidYouKnow";

export const HomeUi = () => {
  return (
    <>
      <Hero />
      <Countries/>
      <WhatsWolt />
      <DidYouKnow/>
     
      {/* <h1>African market glpat-4Hp6_6VrcaALxNM_zXCF</h1> */}
    </>
  );
};
