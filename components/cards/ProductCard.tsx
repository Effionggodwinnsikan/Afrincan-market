import Link from "next/link";
import React from "react";
import { ProductProps } from "../../types";

interface Product {
  product: ProductProps;
}

const ProductCard = ({ product }: Product) => {
  return (
    <Link href="/">
      <div className="flex justify-between gap-10 border border-solid border-[transparent] border-b-[#e4e4e4] py-6 hover:rounded-lg  hover:border hover:border-[#e4e4e4] hover:shadow-md px-2 transition-[border]">
        <div className="flex flex-col gap-5 ">
          <h4 className="text-sm lg:text-lg font-semibold">{product.name}</h4>
          <p className="text-xs lg:text-sm">{product.desc}</p>
          <span className="text-sm text-[#1FA9E4] lg:text-base font-semibold">
            {product.price}
          </span>
        </div>

        <div className="h-20 w-[7.5rem] md:h-[8.125rem] md:w-[13.125rem] relative rounded-lg">
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
