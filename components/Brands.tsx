import React from "react";
import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";

interface Props {
    images: StaticImageData[]
}

const Brands = ({images}: Props) => {
  return (
    <div className="mt-12">
        <div className="relative flex items-center justify-center max-md:w-[calc(100%-5rem)] w-[calc(100%-20rem)] mx-auto">
            <div className="w-full h-px bg-gray-300 absolute "></div>
            <h2 className="relative bg-white px-6 max-md:px-1 text-2xl md:text-3xl font-semibold text-gray-800 text-center"> الماركات </h2>
        </div>
        <div className="max-w-7xl mx-auto py-2 rounded-full shadow-sm">
            <Marquee speed={30} className="rounded-full">
                {
                    images.map((image, index) => (
                        <div key={index} className="mx-6 rounded-full flex items-center">
                            <Image src={image} alt="image" width={100} height={60} className="object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    </div>
  );
};

export default Brands;
