import Head from "next/head";
import React, { ReactNode } from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import RootLayout from "../layout/RootLayout";
import { Card } from "@mui/material";
import { styled } from "@mui/system";
import { CountryList } from "../data/CountryList";
import { Grid } from "@mui/material";
import { homePartner } from "../data/homePartner";
import Link from "next/link";

export const CountryCard = styled(Card)`
  padding: 1rem 0.625rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>African market</title>
        <meta name="description" content="the african market web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Hero */}

        <section className="bg-herogreen flex min-h-screen  w-ful px-4  md:px-10 xl:px-0 overflow-hidden">
          {/*Content  Container */}

          <div className="flex w-full min-h-full max-w-6.5xl items-center m-auto my-0    relative">
            {/* SEARCH AND TEXTS CONTAINER */}

            <div className="flex flex-col z-10 gap-10 max-w-lg w-full">
              {/*TEXT CONTAINER  */}
              <div className="flex flex-col">
                <h1 className="text-white text-5xl lg:text-7xl font-bold md:text-maintxt">
                  Time for
                  <br /> something
                  <br /> new?
                </h1>
              </div>

              {/* Search Form  */}
              <div className="flex flex-col gap-3">
                <h3 className="text-white md:text-maintxt text-xl font-semibold">
                  Delivery address
                </h3>
                <div className="flex gap-4">
                  <div className="flex flex-col relative w-full search__container ">
                    <FmdGoodOutlinedIcon className="absolute left-4 top-3.5 stroke-1 stroke-#202125 search-icon" />
                    <input
                      type="text"
                      className="bg-white search__input  text-inputTxt font-normal text-medium w-full"
                      id="search-location "
                    />
                    <label
                      htmlFor="search-location"
                      className="text-medium font-normal search__label absolute text-placeholder"
                    >
                      Choose delivery address
                    </label>
                  </div>
                  <button className="bg-primaryBtn border-0 outline-0 text-white font-semibold rounded-lg py-[0.4rem] px-2  ">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <img
              src="https://cdn.wolt.com/frontpage-assets/hero-images/6_Saturday.jpg"
              alt="hero-banner"
              className=" hero-img "
            />
          </div>
        </section>

        {/* Countries */}

        <section className="flex flex-col px-4 py-10 md:py-24 md:px-10 xl:px-0 min-h-screen max-w-6.5xl justify-center m-auto my-0 gap-10">
          <h1 className="text-2xl md:text-5xl font-bold">
            Explore countries where you find Wolt
          </h1>

          {/* Country list */}
          <Grid container spacing={3}>
            {CountryList.map((country, id) => {
              return (
                <Grid item xs={12} key={id} sm={4} lg={3}>
                  <CountryCard variant="outlined">
                    <p className="text-medium font-normal">{country.name}</p>
                    <NavigateNextIcon fontSize="small" />
                  </CountryCard>
                </Grid>
              );
            })}
          </Grid>

          {/* Whats Africam Market */}
        </section>
        <section className="flex flex-col   bg-whatswolt  bg-mobWhats bg-whatswoltsiz  md:py-24  lg:pb-20 xl:px-0 lg:min-h-screen whatswolt">
          <div className="  flex flex-col justify-center bg-mobWhats bg-cover bg-whatswoltbg bg-no-repeat h-full w-full relative max-w-6.5xl m-auto my-0 gap-10 mt-24  lg:flex-row shadow-homewhats md:min-h-homewhats lg:bg-none lg:bg-white whatswolt__content">
            {/* text container */}
            <div className=" flex flex-col  py-8 px-6 text-left justify-center font-semibold lg:pt-20 lg:pr-24 lg:pb-9 lg:pl-28  lg:w-3/6 lg:relative">
              <div className="text-white lg:text-maintxt z-[2]">
                <p className="text-xl mb-20">What is Wolt?</p>
                <h2 className="text-2xl md:text-5xl font-bold mb-14">
                  Delivered.
                </h2>
                <p className="hidden lg:flex text-base font-normal mb-20">
                  Wolt makes it incredibly easy for you to discover and get what
                  you want. Delivered to you – quickly, reliably and affordably.
                </p>
                <div>
                  <span className="hidden text-primaryBtn md:flex">
                    Watch video
                  </span>
                </div>
              </div>
            </div>
            <div className="h-full w-full opacity-[0.4] bg-maintxt absolute top-0 -left-0 z-0 lg:hidden"></div>
            <div className="hidden lg:flex bg-cover  bg-whatswoltbg bg-no-repeat w-full bg-mobWhats  lg:w-3/6 "></div>
          </div>
        </section>

        {/* Di you know */}

        <section className="text-center max-w-6.5xl m-auto my-0 md:py-24 md:px-10 pt-28 pb-20 xl:px-0 ">
          <div className="lg:px-28">
            <p className="text-sm md:text-lg lg:text-3xl font-normal">
              Did you know?
            </p>
            <p className="text-sm md:text-lg lg:text-3xl font-normal">
              Getting home-delivered sushi is more than your life made easy.
              When you order with Wolt, you help thousands of hard-working
              restaurant and store owners and couriers make a living.
            </p>
          </div>
        </section>

        {/* Dowmload */}
        <section className="flex items-center min-h-screen bg-secondarybg w-full pt-10 px-4  md:px-10 xl:px-0 mb-20 overflow-hidden relative ">
          <div className="flex flex-col items-center h-full  w-full min-h-full max-w-6.5xl  m-auto my-0 md:flex-row gap-10">
            {/* Left text */}
            <div className="flex flex-col gap-10 z-2 download-textContainer">
              <h2 className="text-4xl font-bold md:text-5xl">
                Honey, we’re not cooking tonight
              </h2>
              <p className="text-base font-normal">
                Get the Apple-awarded Wolt app and choose from 40,000
                restaurants and hundreds of stores in 20+ countries. Discover
                and get what you want – our courier partners bring it to you.
              </p>
            </div>

            <div className=" md:absolute w-full h-full download__image-cont">
              <img
                src="https://cdn.wolt.com/frontpage-assets/front-cells.png"
                alt="hero-banner"
                className=" download-img object-cover md:absolute"
              />
            </div>
          </div>
        </section>

        {/* Patners */}
        
        <section className="flex flex-col px-4 py-20  pb-48 md:px-10 xl:px-0 min-h-screen max-w-6.5xl justify-center m-auto my-0 gap-10">
          <h1 className="text-2xl md:text-5xl font-bold text-center">
            Hungry for more than food?
          </h1>
          <div className="flex flex-col  gap-6 lg:flex-row  items-stretch">
            {homePartner.map((item, id) => {
              return (
                <div
                  className="flex flex-col max-w-640px w-full  h-full partner__card"
                  key={id}
                >
                  <div
                    style={{
                      width: "100%",
                      backgroundImage: `url(${item.bg})`,
                      backgroundPosition: "50% 0",
                      backgroundSize: "cover",
                      height: "300px",
                    }}
                  ></div>

                  <div className=" flex flex-col items-center h-full  p-9 md:px-10 py-9 bg-secondarybg  partner__text">
                    <h3 className="text-xl font-semibold text-center  pb-4 ">
                      {item.txt}
                    </h3>
                    <Link href={item.link}>
                      <span className="text-sm relative  font-semibold text-primaryBtn w-max-content  partner__link">
                        Apply now
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
