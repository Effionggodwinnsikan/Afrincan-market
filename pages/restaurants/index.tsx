import React, { ReactNode, useRef } from "react";
import RootLayout from "../../layout/RootLayout";
import TuneIcon from "@mui/icons-material/Tune";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import { resCategories, restaurants } from "../../data/restaurantsData";
import { CategoryCard } from "../../components";
import { RestaurantCard } from "../../components";
import "swiper/css";
import "swiper/css/navigation";
import Restaurantstab from "../../components/tabs/RestaurantsTab";

const Resturants = () => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="flex flex-col mt-10  px-4 md:px-10 xl:px-0 w-full max-w-6.5xl  m-auto my-0 gap-10 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold">Restaurants near me</h2>
        <div className="flex items-center gap-3">
          <p className="hidden md:flex md:text-base text-primaryBtn font-medium">
            Sorted by Recommended
          </p>
          <div className="rounded-[100%] bg-lightblue p-2 cursor-pointer">
            <TuneIcon className="text-primaryBtn" />
          </div>
        </div>
      </div>
      {/* categories */}

      <section className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <h4 className="text-[1.75rem] font-semibold">Categories</h4>
          <div className="flex items-center gap-2">
            <button
              className="rounded-[100%] p-2 bg-[#D6EFFA] text-primaryBtn"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <WestIcon />
            </button>
            <button
              className="rounded-[100%] p-2 bg-[#D6EFFA] text-primaryBtn"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <EastIcon />
            </button>
          </div>
        </div>
        <div className="flex w-screen min-h-[50vh]">
          <Swiper
            spaceBetween={20}
            // slidesPerView={6}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                width: 0,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 5,
              },
              1200: {
                width: 1200,
                slidesPerView: 5.5,
              },
            }}
          >
            {resCategories.map((category, id) => {
              return (
                <SwiperSlide key={id}>
                  <CategoryCard
                    src={category.img}
                    title={category.name}
                    num={category.numPlaces}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className="flex flex-col gap-4 w-full mb-10">
        <div className="flex justify-between items-center">
          <h4 className="text-[1.75rem] font-semibold">
            All restaurants
          </h4>
        </div>
        <Grid container spacing={2}>
          {restaurants.map((item, id) => {
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
Resturants.getLayout = function getLayout(page: ReactNode) {
  return (
    <RootLayout>
      <Restaurantstab>{page}</Restaurantstab>
    </RootLayout>
  );
};

export default Resturants;
