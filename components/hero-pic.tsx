import React from "react";
import { Inter } from "@next/font/google";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

const Hero_pic = () => {
  return (
    <div className="flex md:justify-center">
      <div className="w-[1150px] lg:w[1321px] h-[800px] bg-back flex rounded-bl-[50px]  md:items-center justify-between flex-col md:flex-row">
        <div className="h-80 md:w-[500px] p-4">
          <div className="text-center md:text-start text-xs md:text-base">Welcome to chairy</div>
          <div className="md:text-[60px] text-[36px] text-center md:text-start">
            <h1 className={inter.className}>
              Best Furniture Collection for your interior.
            </h1>
          </div>
          <div className="flex justify-center md:justify-start mt-5">
          <Button className="bg-secondary. rounded-[6px]">Shop Now <FaArrowRightLong /></Button>
          </div>
        </div>
        <div className="p-4">
        <Image
          src="/Product-Image.png"
          alt="Product1"
          width={434}
          height={584}
        />
        </div>
      </div>
    </div>
  );
};

export default Hero_pic;
