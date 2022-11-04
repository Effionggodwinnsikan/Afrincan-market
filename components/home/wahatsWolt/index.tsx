import React from "react";

export const WhatsWolt = () => {
  return (
    <section className="flex flex-col bg-no-repeat bg-whatswolt bg-whatswoltsiz bg-whatswoltPos px-4  md:py-24 md:px-10 pb-20xl:px-0 min-h-screen">
      <div className="flex flex-col bg-white h-full w-full  max-w-6.5xl m-auto my-0 gap-10 mt-24  lg:flex-row shadow-homewhats min-h-homewhats">
        {/* text container */}
        <div className=" flex flex-col text-left justify-center lg:pt-20 lg:pr-24 lg:pb-9 lg:pl-28 font-semibold lg:w-3/6">
          <div>
            <p className="text-xl mb-20">What is Wolt?</p>
            <h2 className="text-5xl font-bold mb-14">Delivered.</h2>
            <p className="text-base font-normal mb-20">
              Wolt makes it incredibly easy for you to discover and get what you
              want. Delivered to you – quickly, reliably and affordably.
            </p>
            <div>
              <span className="text-primaryBtn ">Watch video</span>
            </div>
          </div>
        </div>
        <div className="bg-cover bg-no-repeat bg-center lg:w-3/6 bg-whatswoltbg"></div>
      </div>
    </section>
  );
};
