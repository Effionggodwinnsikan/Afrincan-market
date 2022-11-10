import React from "react";
import { MapPin } from "react-feather";

{/* <svg
  className="w-6 h-6"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  />
</svg>; */}

export const Hero = () => {
  return (
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
                <MapPin className="absolute left-4 top-3.5 stroke-1 stroke-#202125 search-icon" />
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
              <button className="bg-primaryBtn border-0 outline-0 text-white font-semibold rounded-lg py-0.4rem px-2 ">
                Search
              </button>
            </div>
          </div>
        </div>
        {/* Image Container */}

        <img
          src="https://cdn.wolt.com/frontpage-assets/hero-images/6_Saturday.jpg"
          alt="hero-banner"
          className=" hero-img " 
        />
      </div>
    </section>
  );
};
