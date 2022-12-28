import React from 'react'
import { AllPlaceProps } from '../../types'
import Link from "next/link";

export const SearchPlaceCard = (place:AllPlaceProps) => {
  return (
    <Link href={""} className="border-b last:border-0  w-full">
      <div className="flex items-center gap-5 p-4 md:p-5 ">
        <div className="w-[7.5rem] h-[5.25rem] object-cover relative rounded-md">
          <img
            src={place.img}
            alt={place.name}
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full truncate">
          <h4 className="text-lg font-normal">{place.name}</h4>
          <p className="text-base font-normal  text-[#202125a3]  h-[1.5rem] overflow-hidden text-ellipsis">
            {place.desc}
          </p>
        </div>
      </div>
    </Link>
  );
}
