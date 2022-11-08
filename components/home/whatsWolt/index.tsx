import React from "react";

export const WhatsWolt = () => {
  return (
    <section className="flex flex-col   bg-whatswolt  bg-mobWhats bg-whatswoltsiz  md:py-24  lg:pb-20 xl:px-0 lg:min-h-screen whatswolt">
      <div className="  flex flex-col justify-center bg-mobWhats bg-cover bg-whatswoltbg bg-no-repeat h-full w-full relative max-w-6.5xl m-auto my-0 gap-10 mt-24  lg:flex-row shadow-homewhats md:min-h-homewhats lg:bg-none lg:bg-white whatswolt__content">
        {/* text container */}
        <div className=" flex flex-col  py-8 px-6 text-left justify-center font-semibold lg:pt-20 lg:pr-24 lg:pb-9 lg:pl-28  lg:w-3/6 lg:relative">
          <div className="text-white lg:text-maintxt z-[2]">
            <p className="text-xl mb-20">What is Wolt?</p>
            <h2 className="text-2xl md:text-5xl font-bold mb-14">Delivered.</h2>
            <p className="hidden lg:flex text-base font-normal mb-20">
              Wolt makes it incredibly easy for you to discover and get what you
              want. Delivered to you – quickly, reliably and affordably.
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
  );
};
