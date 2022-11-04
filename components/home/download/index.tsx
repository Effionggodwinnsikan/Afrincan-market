import React from 'react'

export const DownloadSection = () => {
  return (
    <section className="flex items-center min-h-screen bg-secondarybg w-full px-4  md:px-10 xl:px-0 overflow-hidden relative ">
      <div className="flex items-center h-full  w-full min-h-full max-w-6.5xl  m-auto my-0 ">
        {/* Left text */}
        <div className="flex flex-col gap-10 z-2 download-textContainer">
          <h2 className="font-bold text-5xl">
            Honey, we’re not cooking tonight
          </h2>
          <p className="text-base font-normal">
            Get the Apple-awarded Wolt app and choose from 40,000 restaurants
            and hundreds of stores in 20+ countries. Discover and get what you
            want – our courier partners bring it to you.
          </p>
        </div>

        <div className="absolute lg:-right-600px w-full h-full">
          <img
            src="https://cdn.wolt.com/frontpage-assets/front-cells.png"
            alt="hero-banner"
            className=" download-img  h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
