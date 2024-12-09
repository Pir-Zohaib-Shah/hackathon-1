import React from "react";
import { Inter } from "@next/font/google";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100"],
});
const Top = () => {
  return (
    <div className={inter.className}>
      <div className="bg-primary. text-back h-[45px] w-full flex items-center justify-center text-[13px] px-2">
        <div className="w-[1321px] h-[45px] flex items-center justify-center md:justify-between">
          <div className="flex items-center ">
            <FaCheck className="mr-1" /> Free shipping on all orders over $50
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <Link href="#" className="flex items-center">
                Eng
                <RiArrowDropDownLine className="text-xl" />
              </Link>
              <Link href="/faqs">Faqs</Link>
              <Link href="#" className="flex items-center">
                <IoIosHelpCircleOutline className="text-xl" />
                Need Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
