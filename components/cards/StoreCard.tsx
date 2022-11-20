import React from "react";
import { Card, CardMedia, CardContent } from "@mui/material";


interface CategoryCardProps {
  src: string;
  title: string;
  desc: string;
    min: string;
    isClosed?: boolean;
}

 const StoreCard = ({ src, title, desc, min, isClosed }: CategoryCardProps) => {
  return (
    <Card
      elevation={2}
      // variant="string"
      sx={{
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "scale 0.3s linear",
        "&:hover": {
          transform: "scale(1.04)",
          transition: "all 0.3s linear",
        },
      }}
    >
      <div className="relative">
        <CardMedia component="img" height="142" image={src} alt={title} />
        {isClosed && (
          <div className="absolute top-0 left-0 h-full w-full bg-lightdark flex items-center justify-center">
            <p className="text-white text-xl font-semibold">Closed</p>
          </div>
        )}
      </div>
      <CardContent>
        <div className="flex justify-between items-center md:gap-4 border-b-2 border-dashed border-[#F8F8F8] pb-3">
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl text-ellipsis">{title}</h4>
            <p className="text-sm font-normal texe-[#B3B3B5] text-ellipsis">
              {desc} places
            </p>
          </div>
          <div className="flex flex-col bg-[#EBF7FD] text-primaryBtn text-xs font-normal md:text-sm rounded-xl p-2 items-center">
            {min}
            <span>min</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoreCard; 
