import Link from "next/link";
import React from "react";
import { ProductProps } from "../../types";


const ProductCard = (product: ProductProps) => {
  return (
    <Link
      href="/"
      className=" px-4 md:px-10  lg:px-5  rounded-lg border border-[transparent]  hover:border-[#e4e4e4] border-solid  transition-[border] hover:shadow-sm "
    >
      <div className="flex justify-between gap-5 border border-solid border-[transparent]  border-b-[#e4e4e4] py-6 hover:border-transparent">
        <div className="flex flex-col gap-6 ">
          <h4 className="text-sm lg:text-lg font-semibold">{product.name}</h4>
          <p className="text-xs lg:text-sm">{product.desc}</p>
          <span className="text-sm text-[#1FA9E4] lg:text-base font-semibold">
            {product.price}
          </span>
        </div>

        <div className="h-20 w-[7.5rem] md:h-[8.125rem] md:w-[13.125rem] relative ">
          <img
            src={product.img}
            alt={product.name}
            className="object-cover h-full w-full absolute left-0 top-0 rounded-lg"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;