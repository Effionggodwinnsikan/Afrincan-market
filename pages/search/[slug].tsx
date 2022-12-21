import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Restaurantstab from "../../components/tabs/RestaurantsTab";
import RootLayout from "../../layout/RootLayout";
import TuneIcon from "@mui/icons-material/Tune";
import { Helmet, RestaurantCard } from "../../components";
import { Grid } from "@mui/material";
import { allPlaces } from "../../data/allPlaces";

const SearchUI = () => {
  const router = useRouter();
  const { slug } = router.query;

  const filteredPlaces = allPlaces.filter(
    (place) =>
      // @ts-ignore
      place.name.toLowerCase().includes(String(slug).toLowerCase()) ||
      place.desc.toLowerCase().includes(String(slug).toLowerCase()) ||
      place.category.includes(String(slug).toLowerCase()) ||
      place.type.includes(String(slug).toLowerCase())
  );

  return (
    <div className="flex flex-col mt-10  w-full  gap-10 ">
      <Helmet
        title={`search result ${slug}  African market`}
        desc="the african market web app"
      />
      <div className="flex justify-between items-center mb-4 px-4 md:px-10 max-w-[1600px] w-full m-auto">
        <h2 className="text-4xl md:text-5xl font-bold capitalize">
           Search results
        </h2>
        <div className="flex items-center gap-3">
          <p className="hidden md:flex md:text-base text-primaryBtn font-medium">
            Sorted by Recommended
          </p>
          <div className="rounded-[100%] bg-lightblue p-2 cursor-pointer">
            <TuneIcon className="text-primaryBtn" />
          </div>
        </div>
      </div>
      <section className="flex flex-col gap-4 px-4 md:px-10 max-w-[1600px] w-full m-auto 2xl:px-0 2xl:pl-10">
        {filteredPlaces.length >= 1 ? (
          <Grid container spacing={2}>
            {filteredPlaces.map((place, id) => {
              return (
                <Grid item xs={12} key={id} sm={6} lg={4}>
                  <RestaurantCard {...place} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
            <h1 className="text-5xl font-bold">No results found</h1>
          </div>
        )}
      </section>
    </div>
  );
};

SearchUI.getLayout = function getLayout(page: ReactNode) {
  return (
    <RootLayout>
      <Restaurantstab>{page}</Restaurantstab>
    </RootLayout>
  );
};

export default SearchUI;
