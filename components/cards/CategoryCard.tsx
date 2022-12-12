

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
        elevation={3}
        // variant="string"
        sx={{
          backgroundColor: "#fff",
          cursor: "pointer",
          transition: "scale 0.3s ease-in-out",
          borderRadius: "8px",
          boxShadow: "1px 5px 5px rgba(0, 0, 0, 0.1)",

          "&:hover": {
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
        <img
          src={category.img}
          alt={category.name}
          className="object-contain  w-full "
        />

        <div className="p-4">
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
