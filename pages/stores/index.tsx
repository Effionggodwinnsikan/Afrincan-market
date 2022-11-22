import React, { ReactNode, useRef } from "react";
import Restaurantstab from "../../components/tabs/RestaurantsTab";
import RootLayout from "../../layout/RootLayout";
import TuneIcon from "@mui/icons-material/Tune";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import { resCategories } from "../../data/restaurantsData";
import { CategoryCard } from "../../components";
import { StoreCard } from "../../components";
import { stores } from "../../data/stores";
import "swiper/css";
import "swiper/css/navigation";

const Stores = () => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="flex flex-col mt-10  w-full my-0 gap-10 min-h-screen ">
      <div className="flex justify-between items-center mb-4 px-4 md:px-10 max-w-[1600px] w-full m-auto">
        <h2 className="text-4xl md:text-5xl  font-bold">Stores near me</h2>
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

      <section className="flex flex-col gap-4  max-w-[1600px] w-full m-auto">
        <div className="flex justify-between items-center  px-4 md:px-10">
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
        <div className="flex   pl-4 w-full md:pl-10 h-[220px] md:min-h-[250px] xl:h-full xl:min-h-[310px]">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              1024: {
                slidesPerView: 6.5,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 4.2,
                spaceBetween: 10,
              },
              320: {
                slidesPerView: 3.2,
                spaceBetween: 10,
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
      <section className="flex flex-col gap-4 w-full mb-10 px-4 md:px-10 max-w-[1600px]  m-auto">
        <div className="flex justify-between items-center">
          <h4 className="text-[1.75rem] font-semibold">All stores</h4>
        </div>
        <Grid container spacing={2}>
          {stores.map((store, id) => {
            return (
              <Grid item xs={12} key={id} sm={6} lg={4}>
                <StoreCard
                  title={store.name}
                  src={store.img}
                  desc={store.desc}
                  min={store.min}
                  open={store.open}
                  category={store.category}
                />
              </Grid>
            );
          })}
        </Grid>
      </section>
    </div>
  );
};

Stores.getLayout = function getLayout(page: ReactNode) {
  return (
    <RootLayout>
      <Restaurantstab>{page}</Restaurantstab>
    </RootLayout>
  );
};

export default Stores;
