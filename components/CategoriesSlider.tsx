import React,{useRef} from 'react'
import "swiper/css";
import "swiper/css/navigation";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import {FreeMode} from "swiper"
import { Categoryprops } from "../types"
import CategoryCard from "./cards/CategoryCard"
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";

interface SliderProps{
    categories: Categoryprops[];
}


const CategoriesSlider = ({categories}: SliderProps) => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <div className="flex w-full  ml-4 md:ml-10  relative rounded-xl border-2 bg-white shadow-xl  pl-3 md:pl-6  h-[240px] py-5 ">
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
        modules={[FreeMode]}
      >
        {categories.map((category, id) => {
          return (
            <SwiperSlide key={id}>
              <CategoryCard {...category} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoriesSlider