import React from 'react'

export const DownloadSection = () => {
  return (
    <section className="flex items-center min-h-screen bg-secondarybg w-full pt-10 px-4  md:px-10 xl:px-0 mb-20 overflow-hidden relative ">
      <div className="flex flex-col items-center h-full  w-full min-h-full max-w-6.5xl  m-auto my-0 md:flex-row gap-10">
        {/* Left text */}
        <div className="flex flex-col gap-10 z-2 download-textContainer">
          <h2 className="text-4xl font-bold md:text-5xl">
            Honey, we’re not cooking tonight
          </h2>
          <p className="text-base font-normal">
            Get the Apple-awarded Wolt app and choose from 40,000 restaurants
            and hundreds of stores in 20+ countries. Discover and get what you
            want – our courier partners bring it to you.
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
  );
}
