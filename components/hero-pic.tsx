import React from "react";
import { Inter } from "@next/font/google";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

interface Brand{
  image: string,
  id:string,
}

const brand: Brand[] = [
  {
    id: "1",
    image: "/brand/Logo-1.png"
  },
  {
    id: "2",
    image: "/brand/Logo-2.png"
  },
  {
    id: "3",
    image: "/brand/Logo-3.png"
  },
  {
    id: "4",
    image: "/brand/Logo-4.png"
  },
  {
    id: "5",
    image: "/brand/Logo-5.png"
  },
  {
    id: "6",
    image: "/brand/Logo-6.png"
  },
  {
    id: "7",
    image: "/brand/Logo-7.png"
  }
]

const Hero_pic = () => {
  return (
    <div className="flex md:items-center flex-col">
      <div className="w-auto md:w-[1150px] lg:w[1321px] h-[800px] bg-back flex rounded-bl-[50px]  md:items-center justify-between flex-col md:flex-row">
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
      <div className='w-auto md:w-[1250px] md:h-[139px] grid grid-cols-3 sm:grid-cols-1 md:grid-cols-7 lg:grid-cols-7 items-center md:gap-24 gap-10 p-2'>
      {brand.map((brand) => (
    <Image src={brand.image} alt={brand.id} key={brand.id} width={85} height={87} className='transform hover:scale-125 transition-all duration-200'/>
  ))}
    </div>
    </div>
  );
};

export default Hero_pic;
