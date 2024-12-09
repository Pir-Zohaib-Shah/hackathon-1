import React from "react";
import { Inter } from "@next/font/google";
import Image from "next/image";
import { Button } from "./ui/button";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

const Header = () => {
  return (
    <div className={inter.className}>
      <div className="bg-back text-primary. h-[84px] w-full flex items-center justify-center text-[26px] font-inter px-2">
        <div className="flex justify-between w-[1321px] ">
          <div className="flex">
            <Image
              src="/Logo-Icon.png"
              alt="logo"
              width={40}
              height={40}
              className="mr-1"
            />
            Comforty
          </div>
          <div className=""></div>
          <div>
            <Link href="/cart">
            <Button className="shadow-none bg-white rounded-[8px] md:flex text-black">
              <BsCart3 /> cart{" "}
              <div className="bg-[#007580] w-4 h-4 rounded-full flex justify-center items-center text-back text-[10px]">
                2
              </div>
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
