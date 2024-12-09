import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

const Footer = () => {
  return (
    <div className="">
      <div className="md:hidden">
        <Accordion type="single" collapsible className="w-full px-3">
          <AccordionItem value="item-1">
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3">
                <li>
                  <Link href="#">Sofa</Link>
                </li>
                <li>
                  <Link href="#">Arm Chair</Link>
                </li>
                <li>
                  <Link href="#">Wing Chair</Link>
                </li>
                <li>
                  <Link href="#">Desk Chair</Link>
                </li>
                <li>
                  <Link href="#">Wooden Chair</Link>
                </li>
                <li>
                  <Link href="#">Park Bench</Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Support</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3">
                <li>
                  <Link href="#"> Help & Support</Link>
                </li>
                <li>
                  <Link href="#">Tearms & Conditions</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Help.</Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Newsletter</AccordionTrigger>
            <AccordionContent>
              <div className="flex space-x-3">
                <Input placeholder="Your Email" />{" "}
                <Button className="bg-secondary. rounded-[8px]">
                  Subscribe
                </Button>
              </div>
              <div className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt erat enim.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="hidden md:block">
        <div className="border-t-2 border-b-2 border-gray-200 border-solid w-full h-[343px] mt-16 flex flex-col justify-center">
          <div className="flex justify-evenly">
          <div className="flex flex-col">
          <div className="text-[26px] flex space-x-1 p-2">
          <Image src="/Logo-Icon.png" alt="logo" width={40} height={40} className="mr-1"/> 
          <div className={inter.className}>Comforty</div>
          </div>
          <div className="w-[340px] px-2">
          Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
          Cras egestas purus 
          </div>
          <div className="text-xl flex space-x-5 ml-2 mt-4">
          <FaFacebook className="hover:text-secondary."/>
          <FaTwitter className="hover:text-secondary."/>
          <FaInstagram className="hover:text-secondary."/>
          <FaPinterest className="hover:text-secondary."/>
          <FaYoutube className="hover:text-secondary."/>
          </div>
          </div>
          
          <div>
            <ul className="space-y-2">
              <li className="text-gray-400 mb-5">CATEGORY</li>
              <li className="hover:text-secondary."><Link href="#"> Sofa</Link></li>
              <li className="hover:text-secondary."><Link href="#"> Arm Chair</Link></li>
              <li className="hover:text-secondary."><Link href="#"> Wing Chair</Link></li>
              <li className="hover:text-secondary."><Link href="#"> Desk Chair</Link></li>
              <li className="hover:text-secondary."><Link href="#"> Wooden Chair</Link></li>
              <li className="hover:text-secondary."><Link href="#"> Park Bench</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="text-gray-400 mb-5">SUPPORT</li>
              <li className="hover:text-secondary."><Link href="#"> Help & Support</Link></li>
              <li className="hover:text-secondary."><Link href="#">Terms & Conditions</Link></li>
              <li className="hover:text-secondary."><Link href="#"> Privacy Policy</Link></li>
              <li className="hover:text-secondary."><Link href="#"> Help</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="text-gray-400 mb-5">NEWS LETTER</li>
              <div className="flex space-x-3 w-[424px]">
                <Input placeholder="Your Email" />{" "}
                <Button className="bg-secondary. rounded-[8px]">
                  Subscribe
                </Button>
              </div>
              <div className="mt-2 w-[424px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt erat enim.
              </div>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-full h-[70px] flex flex-col md:flex-row items-center text-gray-400 justify-between">
          <div className="flex space-x-2 text-xs mt-4 md:mt-3 p-2 ">
          <div>@ 2021 - Blogy - Designed & Develop by <strong className="text-black">Zakirsoft</strong></div>{" "}
          </div>
          <div className="mb-3 md:mt-3 p-2">
            <Image src="/payments.png" alt="payments" width={150} height={10}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
