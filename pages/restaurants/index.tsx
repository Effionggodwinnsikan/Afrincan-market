import React, { ReactNode, useRef, useState } from "react";
import RootLayout from "../../layout/RootLayout";
import TuneIcon from "@mui/icons-material/Tune";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import { resCategories, restaurants } from "../../data/restaurantsData";
import { CategoryCard, FilterModal, Helmet } from "../../components";
import { RestaurantCard } from "../../components";
import "swiper/css";
import "swiper/css/navigation";
import Restaurantstab from "../../components/tabs/RestaurantsTab";

const Restaurants = () => {
  const swiperRef = useRef<SwiperCore>();
  const [openFilter, setOpenFilter] = useState(false);
  
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

        <div className="flex w-full  ml-4 md:ml-10  relative rounded-xl border-2 bg-white shadow-xl   pl-3 md:pl-6 py-4  min-h-[220px] md:h-full ">
          <div className="flex justify-between items-center gap-2 absolute top-[35%] left-0 px-3 md:pl-4 pr-10 z-10 w-full">
            <button
              className="rounded-[100%] p-2 bg-white  border shadow-2xl text-primary"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <WestIcon />
            </button>
            <button
              className="rounded-[100%] p-2  bg-white border shadow-2xl text-primary"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <EastIcon />
            </button>
            <FilterModal
              open={openFilter}
              onClose={handleFilter}
              categories={resCategories}
            />
          </div>
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              1024: {
                slidesPerView: 6.5,
                spaceBetween: 13,
              },
              640: {
                slidesPerView: 3.8,
                spaceBetween: 10,
              },
              320: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
            }}
          >
            {resCategories.map((category, id) => {
              return (
                <SwiperSlide key={id}>
                  <CategoryCard {...category} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className="flex flex-col gap-4 px-4 md:px-10 max-w-[1600px] w-full m-auto 2xl:px-0 2xl:pl-10">
        <div className="flex justify-between items-center">
          <h4 className="text-[1.75rem] font-semibold">All restaurants</h4>
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
