import React, { ReactNode,  useState } from "react";
import RootLayout from "../../layout/RootLayout";
import TuneIcon from "@mui/icons-material/Tune";
import { Divider, Grid } from "@mui/material";



import { resCategories, restaurants } from "../../data/restaurantsData";
import { FilterModal, Helmet } from "../../components";
import { RestaurantCard } from "../../components";

import Restaurantstab from "../../components/tabs/RestaurantsTab";
import CategoriesSlider from "../../components/CategoriesSlider";

const Restaurants = () => {
  // const swiperRef = useRef<SwiperCore>();
  const [openFilter, setOpenFilter] = useState(false);
  // const categories= resCategories
  
  const handleFilter = () => setOpenFilter(!openFilter)

  return (
    <div className="flex flex-col mt-10  w-full  gap-10 min-h-screen">
      <Helmet
        title="Resturant African market"
        desc="the african market web app"
      />
      <div className="flex justify-between items-center mb-4 px-4 md:px-10 max-w-[1600px] w-full m-auto">
        <h2 className="text-4xl md:text-5xl font-bold">Restaurants near me</h2>
        <div className="flex items-center gap-3">
          <p className="hidden md:flex md:text-base text-primary font-medium">
            Sorted by Recommended
          </p>
          <div
            className="rounded-[100%] bg-primaryLi p-2 cursor-pointer "
            onClick={handleFilter}
          >
            <TuneIcon className="text-primary" />
          </div>
        </div>
      </div>
      {/* categories */}

      <section className="flex flex-col gap-4 max-w-[1600px]  w-full m-auto overflow-x-hidden ">
        <div className="flex justify-between items-center px-4 md:px-10 ">
          <h4 className="text-[1.75rem] font-semibold">Categories</h4>
        </div>
        <CategoriesSlider categories={resCategories} />
        <FilterModal
          open={openFilter}
          onClose={handleFilter}
          categories={resCategories}
        />

      </section>
      <section className="flex flex-col gap-4 px-4 md:px-10 max-w-[1600px] w-full m-auto 2xl:px-0 2xl:pl-10">
        <div className=" justify-between items-center">
          <h4 className="text-[1.75rem] font-semibold">All restaurants</h4>
          <Divider />
        </div>
        <Grid container spacing={2}>
          {restaurants.map((restaurant, id) => {
            return (
              <Grid item xs={12} key={id} sm={6} lg={4}>
                <RestaurantCard {...restaurant} />
              </Grid>
            );
          })}
        </Grid>
      </section>
    </div>
  );
};
Restaurants.getLayout = function getLayout(page: ReactNode) {
  return (
    <RootLayout>
      <Restaurantstab>{page}</Restaurantstab>
    </RootLayout>
  );
};

export default Restaurants;
