import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Restaurantstab from "../../components/tabs/RestaurantsTab";
import RootLayout from "../../layout/RootLayout";
import TuneIcon from "@mui/icons-material/Tune";
import { restaurants } from "../../data/restaurantsData";
import { Helmet, RestaurantCard } from "../../components";
import { Grid } from "@mui/material";

const RestaurantCategoryUi = () => {
  const router = useRouter();
  const { category } = router.query;


  const resturantsList = restaurants.filter((resturant) =>
    resturant.category.includes(String(category))
  ); 


  
  return (
    <div className="flex flex-col mt-10  w-full  gap-10 ">
      <Helmet title={`${category}  African market`} desc="the african market web app" />
      <div className="flex justify-between items-center mb-4 px-4 md:px-10 max-w-[1600px] w-full m-auto">
        <h2 className="text-4xl md:text-5xl font-bold capitalize">
          {category} near me
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
        <Grid container spacing={2}>
          {resturantsList.map((item, id) => {
            return (
              <Grid item xs={12} key={id} sm={6} lg={4}>
                <RestaurantCard
                  title={item.name}
                  src={item.img}
                  desc={item.desc}
                  min={item.min}
                  isClosed={item.open}
                />
              </Grid>
            );
          })}
        </Grid>
      </section>
    </div>
  );
};

RestaurantCategoryUi.getLayout = function getLayout(page: ReactNode) {
  return (
    <RootLayout>
      <Restaurantstab>{page}</Restaurantstab>
    </RootLayout>
  );
};

export default RestaurantCategoryUi;
