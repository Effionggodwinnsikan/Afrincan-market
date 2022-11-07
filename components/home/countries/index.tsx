import {  Grid } from "@mui/material";
import { CountryCard } from "./CountryStyles";
import React from "react";
import { CountryList } from '../../../data/CountryList'
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const Countries = () => {
  return (
      <section className="flex flex-col px-4 py-10 md:py-24 md:px-10 xl:px-0 min-h-screen max-w-6.5xl justify-center m-auto my-0 gap-10">
          
      <h1 className="text-2xl md:text-5xl font-bold">
        Explore countries where you find Wolt
      </h1>
      {/* Country list */}
      <Grid container spacing={3}>
        {CountryList.map((country, id) => {
          return (
            <Grid item xs={12} key={id} sm={4} lg={3}>
              <CountryCard variant="outlined" 
              >
                <p className="text-medium font-normal">{country.name}</p>
                <NavigateNextIcon fontSize='small' />
              </CountryCard>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};
