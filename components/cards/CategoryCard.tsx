

import React from "react";

import { Card, CardMedia, CardContent, Box } from "@mui/material";

interface StoreCardProps {
  src: string;
  title: string;
  num: string;
}

const CategoryCard = ({ src, title, num}: StoreCardProps) => {
  return (
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
        src={src}
        alt={title}
        className="object-contain  w-full "
      />

      <div className="p-4">
        <h4 className="font-semibold  text-base md:text-lg">{title}</h4>
        <p className="text-xs md:text-sm font-normal">{num} places</p>
      </div>
    </Card>
  );
};

export default CategoryCard;
