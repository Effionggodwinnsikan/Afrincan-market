import React from "react";

export const Hero = () => {
  return (
    <section className="bg-herogreen flex min-h-screen  w-ful px-4  lg:px-28 xl:px-0 overflow-hidden">
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
            <h3 className="text-white md:etext-maintxt text-xl font-semibold">
              Delivery address
            </h3>
            <div className="flex gap-4">
              <div className="flex flex-col relative w-full search__container cursor-pointer ">
                <input
                  type="text"
                  className="bg-white search__input  text-inputTxt font-normal text-medium w-full cursor-pointer"
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
          className=" hero-img"
        />
      </div>
    </section>
  );
};
