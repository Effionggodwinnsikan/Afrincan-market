import React, { ReactNode, useEffect, useRef } from "react";
import AltLayout from "../../../layout/AltLayout";
import MopedOutlinedIcon from "@mui/icons-material/MopedOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchInput from "../../../components/SearchInput";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { restaurantsProducts } from "../../../data/products";
import { Link as Scroll } from "react-scroll";
import { OpeningTab, ProductCard } from "../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Restaurant = () => {
  const menuSet = new Set(restaurantsProducts.map((item) => item.menu));
  const allMenu = Array.from(menuSet);


  const imageUrl =
    "https://imageproxy.wolt.com/venue/5e8b3016a9c0943ec072a9d0/94a97d5a-8b52-11ec-8fe4-ae3fbf502e8c_chequers_joel_gueller___1_.jpg?w=600";

  const stickyRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const selectRef = stickyRef.current;

  //   if (stickyRef.current !== null) {
  //   stickyRef.current.focus();
  // }

  //   function onScroll() {
  //     selectRef.style.background = "#fff";
  //     selectRef.style.color = "#202125";
  //   }
  //   selectRef.addEventListener("scroll", onScroll);
  // }, [stickyRef]);

  return (
    <>
      <div className=" relative top-0 left-0 z-10 ">
        <div
          className="hidden lg:flex w-full text-white min-h-[4.375rem] items-center  px-4 py-3 md:px-10 xl:px-0 border-b-0"
          ref={stickyRef}
        >
          <div className="flex gap-28 items-center  w-full max-w-6.5xl  mx-auto my-0 ">
            <button className="flex items-center gap-3 border-0 outline-0 bg-none">
              <MopedOutlinedIcon />
              <p className="text-base flex items-center gap-2">
                The average delivery time is{" "}
                <strong className="font-semibold text-sm">20–40 min</strong>
              </p>
              <div className="font-normal">
                <NavigateNextIcon fontSize="small" className="font-normal" />
              </div>
            </button>
            <div className="flex items-center gap-2 border-0 outline-0 bg-none">
              <p className="text-base flex items-center gap-1">
                Open today:
                <strong className="font-semibold text-base">00.00–24.00</strong>
              </p>
              <div className="font-normal">
                <NavigateNextIcon fontSize="small" className="font-normal" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full basis-[30rem] md:basis-[43vw] lg:basis-[30vw] relative flex flex-col pb-[1.5rem] md:pb-[7vw] lg:pb-[5vw] justify-end min-h-[70vh] lg:min-h-[60vh]">
        <div className="absolute top-[-75%] left-0   right-0 bottom-0 h-[180%] w-screen z-[-1]">
          <div className="absolute  top-0 w-screen h-full bg-[#2120254d]"></div>
          <img
            src={imageUrl}
            alt="resturant_background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="  flex flex-col gap-10 px-4 py-3 md:px-10 xl:px-0 w-full max-w-6.5xl  mx-auto my-0  text-white  justify-center">
          <div className="flex flex-col">
            {/*  Retaurant title */}
            <h2 className="font-bold text-[2.5rem] md:text-[2.75rem] lg:text-[3.5rem] leading-[120%] md:leading-[140%]">
              Chequers Creperie
            </h2>
            {/*  Retaurant short desc */}
            <p className="font-semibold text-sm md:text-base">
              Delicate savoury and original sweet crepes, and now even pizzeria!
            </p>
          </div>
          <div className="flex items-center rounded-lg bg-white p-2 text-maintxt w-[max-content] text-[0.625rem]">
            MIN. ORDER: €10.00
          </div>
        </div>
      </div>
      <section className=" px-4 md:px-[1.875rem] lg:py-4 xl:px-0 w-full mt-5 lg:mt-[-5vh]">
        <div className="lg:bg-white  my-0 flex flex-col gap-4 lg:shadow py-8 max-w-[1200px] lg:flex-row lg:justify-between lg:px-[1.875rem] w-full lg:m-auto lg:rounded-lg lg:border lg:border-[#2021251f]">
          {/* Rating */}
          <div className="flex justify-between gap-4">
            <div className="flex items-center gap-3">
              <p className="flex items-center text-xs font-normal lg:text-lg lg:font-bold lg:hidden gap-2">
                Excellent,
                <span className="lg:text-xs font-normal"> 9.0</span>
              </p>
              <p className="hidden lg:flex items-center lg:text-[2rem] lg:font-bold gap-2">
                9.0
                <span className="lg:text-xs font-normal"> out of 10</span>
              </p>
            </div>
            <Button
              variant="outlined"
              sx={{
                // backgroundColor: "#F6F6F6",
                borderColor: "rgba(32,33,37,0.12)",
                gap: "10px",

                "&:hover": {
                  backgound: "rgba(32,33,37,0.3)",
                  borderColor: "rgba(32,33,37,0.12)",
                },
              }}
              size="medium"
              // xs='small'
            >
              <FavoriteBorderOutlinedIcon />
              <span className="hidden lg:flex"> Favourite</span>
            </Button>
          </div>

          <div className="flex lg:hidden w-full  items-center justify-between">
            <div className="flex items-center gap-3 border-0 outline-0 bg-none">
              <AccessTimeOutlinedIcon />
              <p className="text-xs ">00.00-24.00</p>
            </div>

            <Button variant="contained" disableElevation>
              More info
            </Button>
          </div>
          <div className="flex lg:hidden w-full  items-center justify-between">
            <div className="flex items-center gap-3 border-0 outline-0 bg-none">
              <MopedOutlinedIcon />
              <p className="text-xs flex items-center gap-1">
                The average delivery time is{" "}
                <strong className="font-semibold text-xs">20–40 min</strong>
              </p>
            </div>
            <Button variant="contained" disableElevation>
              Change
            </Button>
          </div>
          <SearchInput store placeholder="Search .." />
        </div>
      </section>
      {/* Mobile Category slider */}
      <div className="sticky top-0 left-0 flex items-center bg-white shadow-sm lg:hidden z-10 h-[60px]  w-full px-4  md:pl-10 xl:pl-0">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 5.5,
              spaceBetween: 15,
            },
            320: {
              slidesPerView: 2.1,
              spaceBetween: 5,
            },
          }}
        >
          {allMenu.map((menu, id) => {
            return (
              <SwiperSlide
                key={id}
                className="overflow-hidden h-[20px] text-overflow w-[max-content]"
              >
                <Scroll
                  to={`${menu}`}
                  spy={true}
                  smooth={true}
                  // offset={10}
                  duration={200}
                  className="text-sm font-semibold cursor-pointer w-full whitespace-nowrap text-overflow"
                >
                  {menu}
                </Scroll>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <section className="flex flex-col gap-6 lg:flex-row lg:px-10 xl:px-0 w-full max-w-6.5xl  xl:mx-auto  min-h-screen my-20 ">
        <div className="  relative ">
          {/* Category/Menu */}

          <div className="sticky top-[5rem] left-0 hidden lg:flex flex-col gap-5 ">
            {allMenu.map((menu, id) => {
              return (
                <Scroll
                  key={id}
                  to={`${menu}`}
                  spy={true}
                  smooth={true}
                  activeClass="text-sm font-semibold cursor-pointer sideMenu-active"
                  // offset={10}
                  duration={200}
                  className="text-sm font-semibold cursor-pointer sideMenu"
                >
                  {menu}
                </Scroll>
              );
            })}
          </div>
        </div>

        {/* Products */}

        <div className="flex flex-col gap-[2.5rem]  ">
          {allMenu.map((menu, index) => {
            return (
              <div className="flex flex-col gap-5 " key={index} id={menu}>
                <h4 className="text-3xl font-semibold px-4  md:px-8 lg:px-5 capitalize">
                  {menu}
                </h4>
                {restaurantsProducts
                  .filter((item) => item.menu === menu)
                  .map((product, id) => {
                    return <ProductCard key={id} {...product} />;
                  })}
              </div>
            );
          })}
        </div>

        {/* Restaurant information */}
        <div className="flex flex-col gap-10">
          <h2 className="text-xl font-semibold hidden lg:flex">
            Restaurant information
          </h2>
          {/* ADDRESS */}
          <div className="hidden lg:flex flex-col gap-3">
            <h4 className="text-lg font-semibold">Address</h4>
            <div className="flex flex-col gap-1">
              {/* Primary address */}
              <p className="text-sm ">The Strand 100, Sliema</p>

              {/* Secondary adrress */}
              <span className="text-sm opacity-[0.8] ">SLM 3033 Malta</span>
            </div>
            <Button
              variant="text"
              size="small"
              sx={{
                textAlign: "left",
                justifyContent: "flex-start",
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              See map
            </Button>
          </div>

          {/* compliant mobile */}
          <div className="flex lg:hidden flex-col gap-3 px-4 md:px-10 xl:px-0">
            <p className="text-sm  ">
              If you have allergies or other dietary restrictions, please
              contact the restaurant. The restaurant will provide food-specific
              information upon request.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Phone Number</p>
              <a href="tel" className="text-sm font-semibold text-[#1FA9E4]">
                +35627222882
              </a>
            </div>
          </div>

          {/* Opening times */}
          <div className="hidden lg:flex flex-col gap-3">
            <h4 className="text-lg font-semibold">Opening times</h4>
            
              <OpeningTab
                label1='Resturant'
                label2="Delivery"
                days="Monday-Sunday"
                time1="00.00–24.00"
                time2="00.00-24.00"
              />
           
            <div className="flex flex-col gap-1">
              {/* complaint */}
              <p className="text-sm max-w-[260px] ">
                If you have allergies or other dietary restrictions, please
                contact the restaurant. The restaurant will provide
                food-specific information upon request.
              </p>
            </div>
            <a href="tel" className="text-sm font-semibold text-[#1FA9E4]">
              +35627222882
            </a>
            <Button
              variant="text"
              size="small"
              sx={{
                textAlign: "left",
                justifyContent: "flex-start",
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              See more information
            </Button>
          </div>
          {/*Categories */}
          <div className="hidden lg:flex flex-col gap-3">
            <h4 className="text-lg font-semibold">Categories</h4>

            <p className="text-base font-semibold text-[#1FA9E4]">
              Crepe, Dessert, Pizza, Sweets, Italian
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

Restaurant.getLayout = function getLayout(page: ReactNode) {
  return <AltLayout>{page}</AltLayout>;
};
export default Restaurant;
