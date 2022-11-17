

import React from "react";

import { Card, CardMedia, CardContent, Box } from "@mui/material";

interface StoreCardProps {
  src: string;
  title: string;
  num: string;
}

export const CatergoryCard = ({ src, title, num }: StoreCardProps) => {
  return (
    <Card
      elevation={2}
      // variant="string"
      sx={{
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "scale 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.08)",
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      <CardMedia component="img" height="300" image={src} alt={title} />
      <CardContent>
        <h4 className="font-semibold text-xl">{title}</h4>
        <p className="text-sm font-normal">{num} places</p>
      </CardContent>
    </Card>
  );
};
