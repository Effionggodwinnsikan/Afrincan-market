import React from "react";
import { Card, CardMedia, CardContent } from "@mui/material";


interface CategoryCardProps {
  img: string;
  name: string;
  desc: string;
  min: string;
  category: string[];
  open?: boolean;
}

 const StoreCard = (store: CategoryCardProps) => {
   const newcategory = store.category.shift();
   return (
     <Card
       elevation={1}
       // variant="string"
       sx={{
         backgroundColor: "#fff",
         cursor: "pointer",
         transition: "scale 0.3s linear",
         boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
         "&:hover": {
           transform: "scale(1.02)",
           transition: "all 0.3s linear",
         },
       }}
     >
       <div className="relative">
         <CardMedia component="img" height="142" image={store.img} alt={store.name} />
         <div className="absolute bg-white p-1 rounded-lg top-3 left-3 text-xs">
           {newcategory}
         </div>
         {!open && (
           <div className="absolute top-0 left-0 h-full w-full bg-lightdark flex items-center justify-center">
             <p className="text-white text-xl font-semibold">Closed</p>
           </div>
         )}
       </div>
       <CardContent>
         <div className="flex justify-between items-center md:gap-4 border-b-2 border-dashed border-[#F8F8F8] pb-3">
           <div className="flex flex-col">
             <h4 className="font-semibold text-xl text-ellipsis">{store.name}</h4>
             <p className="text-sm font-normal text-[#B3B3B5] max-h-[18px]  max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap">
               {store.desc} places
             </p>
           </div>
           <div className="flex flex-col bg-[#EBF7FD] text-primaryBtn text-xs font-normal md:text-sm rounded-xl p-2 items-center">
             {store.min}
             <span>min</span>
           </div>
         </div>
       </CardContent>
     </Card>
   );
 };

export default StoreCard; 
