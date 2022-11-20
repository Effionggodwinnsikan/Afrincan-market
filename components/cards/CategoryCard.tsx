

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

      <CardContent>
        <h4 className="font-semibold text-xl">{title}</h4>
        <p className="text-sm font-normal">{num} places</p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
