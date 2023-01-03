

import React from "react";

import { Card} from "@mui/material";
import Link from "next/link";


interface CategoryCardProps {
  img: string;
  name: string;
  numPlaces: string;
}

const CategoryCard = (category: CategoryCardProps) => {
  return (
    <Link href={`/category/${category.name}`} passHref>
      <Card
      // className="w-full flex flex-col "
        // elevation={3}
        // variant="string"
        sx={{
          // backgroundColor: "transparent!important",
          // background: "none!important",
          cursor: "pointer",
          transition: "scale 0.3s ease-in-out",
          borderRadius: "8px",
          boxShadow: "none!important",
          maxHeight: "180px!important",
          height:"100%!important",

          "&:hover": {
            boxShadow: "1px 5px 5px rgba(0, 0, 0, 0.1)!important",
            transform: "scale(1.03)",
            transition: "all 0.3s ease-in-out",
            position: "relative",
          },
          "&:hover img": {
            transform: "scale(1.03)",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        <div className="relative h-[120px] w-full object-cover">
          <img
            src={category.img}
            alt={category.name}
            className="object-cover  h-full absolute right-0 top-0 left-0 w-full "
          />
        </div>

        <div className="px-4 py-2">
          <h4 className="font-semibold  text-base md:text-lg capitalize">
            {category.name}
          </h4>
          <p className="text-xs md:text-sm font-normal">
            {category.numPlaces} places
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
