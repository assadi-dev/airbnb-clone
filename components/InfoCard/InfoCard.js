import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, title, location, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b  pr-4cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-in first:border-t ">
      <div
        className="relative h-24
       w-40 md:h-52 md:w-80 flex-shrink-0"
      >
        <Image
          className="rounded-2xl"
          src={img}
          alt="info-image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between text-xs md:text-md">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-sm md:text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-xs md:text-sm text-gray-500 flex-grow">
          {description}
        </p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center text-xs md:text-lg">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-sm md:text-lg lg:text-2xl font-semibold pb-2">
              {price}
            </p>
            <p className="text-xs md:text-lg text-right font-extralight">
              {total}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
