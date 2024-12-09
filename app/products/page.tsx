import React from 'react'
import { Inter } from "@next/font/google";

import { BsCart3 } from "react-icons/bs";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/components/footer/Footer';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

const inter = Inter({
    subsets: ["latin"],
    weight: ["600"],
  });

interface All_Products{
    name: string,
    image: string,
    price: string,
    link: Url,

}

const all_Products: All_Products[] = [
    {
      name: "library stool chair",
      image: "/featured/Image-1.png",
      price: "$20",
      link: "/products-pages/product1"
    },
    {
      name: "Library chair",
      image: "/featured/Image-4.png",
      price: "$29.99",
      link: "/products-pages/product1"
    },
    {
      name: "Library stool chair",
      image: "/featured/Image-3.png",
      price: "$39.99",
      link: "/products-pages/product1"
    },
    {
      name: "Library stool chair",
      image: "/featured/Image-2.png",
      price: "$30",
      link: "/products-pages/product1"
    },
    {
      name: "Library stool chair",
      image: "/featured/Image-5.png",
      price: "$30",
      link: "/products-pages/product1"
    },
    {
      name: "Library stool chair",
      image: "/categories/Image-1.png",
      price: "$30",
      link: "/products-pages/product1"
    },
    {
      name: "Library stool chair",
      image: "/categories/Image-2.png",
      price: "$30",
      link: "/products-pages/product1"
    },
    {
      name: "Library stool chair",
      image: "/categories/Image-3.png",
      price: "$30",
      link: "/products-pages/product1"
    },
    {
        name: "library stool chair",
        image: "/featured/Image-1.png",
        price: "$20",
        link: "/products-pages/product1"
      },
      {
        name: "Library chair",
        image: "/featured/Image-4.png",
        price: "$29.99",
        link: "/products-pages/product1"
      },
      {
        name: "Library stool chair",
        image: "/featured/Image-3.png",
        price: "$39.99",
        link: "/products-pages/product1"
      },
      {
        name: "Library stool chair",
        image: "/categories/Image-1.png",
        price: "$30",
        link: "/products-pages/product1"
      },
  
  ];
const Product_page = () => {
  return (
    <div>
    <div className='flex justify-center'>
    <div className='w-[1321px] '>
        <div className={inter.className}>
      <h1 className='md:text-[32px] text-2xl p-2 mt-6'>All Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 mt-6">
      {all_Products.map((all_Products, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-95  transition-all duration-200">
         <Link href={all_Products.link}> <Image 
            src={all_Products.image} 
            alt={all_Products.name} 
            width={200} 
            height={200} 
            className="w-full h-60 object-cover"
          /> </Link>
          <div className="p-4">
            <h3 className="text-sm font-semibold">{all_Products.name}</h3>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold">{all_Products.price}</span>
              <Button className='bg-secondary. rounded-xl'><BsCart3/></Button>
            </div>
          </div>
        </div>
      ))}
    </div>
</div>

    
</div>
<div className='w-full h-[754px] bg-back pt-12 md:pt-24 mt-8'>
    <div className='flex flex-col items-center justify-center'>
    <div className={inter.className}><div className='text-[30px] md:text-[45px] text-center'>Or Subscribe To The Newsletter</div></div>
    <div className='p-3 md:w-[900px] w-full flex md:flex-row flex-col justify-center space-x-3 mt-8 items-center'>
        <Input placeholder='Email Address...'/><Button className='bg-secondary. rounded-[4px] md:w-28 w-full mt-2 md:mt-0'>Submit</Button>
    </div>
    <div className={inter.className}><div className='text-[30px] md:text-[45px] text-center mt-11'>Follow Products And Discounts On Instagram</div></div>
    <div className='grid md:grid-cols-6 grid-cols-2 gap-2 px-2 mt-7'>
    <Image src="/featured/Image-1.png" alt='img' width={186} height={186}/>
    <Image src="/featured/Image-2.png" alt='img' width={186} height={186}/>
    <Image src="/categories/Image-3.png" alt='img' width={186} height={186}/>
    <Image src="/featured/Image-4.png" alt='img' width={186} height={186}/>
    <Image src="/featured/Image-5.png" alt='img' width={186} height={186}/>
    <Image src="/categories/Image-1.png" alt='img' width={186} height={186}/>
    </div>
    </div>
    <div className='md:mt-[171px]'>
<Footer/>
</div>
</div>
</div>
  )
}

export default Product_page