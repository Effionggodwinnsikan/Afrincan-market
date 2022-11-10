import Link from "next/link";
import { homePartner } from "../../../data/homePartner";

export const Partner = () => {
  return (
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
  );
    
};
// border-bborder-b-primaryBtn
