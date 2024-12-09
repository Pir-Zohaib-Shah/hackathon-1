import Image from 'next/image';
import React from 'react';
import { Inter } from "@next/font/google";
import { Button } from './ui/button';
import { BsCart3 } from "react-icons/bs";
import Footer from './footer/Footer';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

interface Product {
  name: string;
  image: string;
  price: string;
  link: Url;
}

const products: Product[] = [
  {
    name: "library stool chair",
    image: "/featured/Image-1.png",
    price: "$20",
    link: "/products-pages/product1"
  },
  {
    name: "Library stool chair",
    image: "/featured/Image-2.png",
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
    image: "/featured/Image-4.png",
    price: "$39.99",
    link: "/products-pages/product1"
  },

];

interface Categories {
  name: string;
  image: string;
  description: string;
  link: Url
}

const categories: Categories[] = [
  {
    name: "Wing chair",
    image: "/categories/Image-1.png",
    description: "3,584 Products",
    link: "/products-pages/product1"
  },
  {
    name: "Wooden chair",
    image: "/categories/Image-2.png",
    description: "157 Products",
    link: "/products-pages/product1"
  },
  {
    name: "Desk chair",
    image: "/categories/Image-3.png",
    description: "154 Products",
    link: "/products-pages/product1"
  },
]

interface Our_Products {
  name: string;
  image: string;
  price: string;
  link: Url;
}

const our_Products: Our_Products[] = [
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

];

const Hero_sec = () => {
  return (
    <div>
    <div className='flex justify-center'>
    <div className='flex items-center'>
    <div className='w-full md:h-[139px] grid grid-cols-3 sm:grid-cols-1 md:grid-cols-7 lg:grid-cols-7 items-center md:gap-24 gap-10'>
    <Image src="/brand-logos/logo-1.png" alt='logo1' width={85} height={87} className='transform hover:scale-125 transition-all duration-200'/>
    <Image src="/brand-logos/logo-2.png" alt='logo2' width={85} height={87} className='transform hover:scale-125 transition-all duration-200'/>
    <Image src="/brand-logos/logo-3.png" alt='logo3' width={85} height={87} className='transform hover:scale-125 transition-all duration-200'/>
    <Image src="/brand-logos/logo-4.png" alt='logo4' width={85} height={87} className='transform hover:scale-125 transition-all duration-200'/>
    <Image src="/brand-logos/logo-5.png" alt='logo5' width={85} height={87} className='transform hover:scale-125 transition-all duration-200'/>
    <Image src="/brand-logos/logo-6.png" alt='logo6' width={85} height={87} className='transform hover:scale-125 transition-all duration-200'/>
    <Image src="/brand-logos/logo-7.png" alt='logo7' width={85} height={87} className='transform hover:scale-125 transition-all duration-200 hidden md:block'/>
</div>
    </div>
    </div>
      <div className='flex justify-center'>
    <div className='w-[1321px] h-[461px]'>
      <div className={inter.className}>
      <h1 className='md:text-[32px] text-2xl p-2 mt-6'>Featured Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 mt-6">
      {products.map((product, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-95  transition-all duration-200">
        <Link href={product.link}><Image 
            src={product.image} 
            alt={product.name} 
            width={200} 
            height={200} 
            className="w-full h-60 object-cover"
          /></Link>
          <div className="p-4">
            <h3 className="text-sm font-semibold">{product.name}</h3>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold">{product.price}</span>
              <Button className='bg-secondary. rounded-xl'><BsCart3/></Button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className={inter.className}>
      <h1 className='md:text-[32px] text-2xl p-2 mt-6'>Top categories</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-3 mt-6">
      {categories.map((categories, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-95  transition-all duration-200">
          <Link href={categories.link}><Image 
            src={categories.image} 
            alt={categories.name} 
            width={150} 
            height={150} 
            className="w-full h-96 object-cover"
          /></Link>
          
          <div className="p-4 bg-[rgba(0,0,0,0.7)]">
            <h3 className="text-sm md:text-lg font-semibold text-white">{categories.name}</h3>
            <div className="flex justify-between items-center">
            <p className="text-gray-200">{categories.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className='flex space-x-3 flex-col md:flex-row p-5'>
    <h1 className='text-center md:-rotate-90 md:h-0 md:mt-52 md:text-[34px] md:hidden'>EXPLORE NEW AND POPULAR STYLES</h1>
    <div className='hidden md:block'>
    <div className='w-5 h-[648px] flex items-center'>
    <Image src="/side.png" alt='text' width={20} height={18}/>
    </div>
    </div>
    <div className='flex items-center'>
      <Image src="/featured/image-3.png" alt='img1' width={648} height={648}/>
    </div>
    <div className='grid grid-cols-2 gap-3 mt-4'>
    <Image src="/featured/image-2.png" alt='img1' width={312} height={312}/>
    <Image src="/featured/image-1.png" alt='img1' width={312} height={312}/>
    <Image src="/featured/image-4.png" alt='img1' width={312} height={312}/>
    <Image src="/featured/image-5.png" alt='img1' width={312} height={312}/>
    </div>
    </div>
    <div className={inter.className}>
      <h1 className='md:text-[32px] text-2xl p-2 mt-6'>Our Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 mt-6">
      {our_Products.map((our_Products, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-95  transition-all duration-200">
        <Link href={our_Products.link}><Image 
            src={our_Products.image} 
            alt={our_Products.name} 
            width={200} 
            height={200} 
            className="w-full h-60 object-cover"
          /></Link>
          <div className="p-4">
            <h3 className="text-sm font-semibold">{our_Products.name}</h3>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold">{our_Products.price}</span>
              <Button className='bg-secondary. rounded-xl'><BsCart3/></Button>
            </div>
          </div>
        </div>
      ))}
      </div>
    <Footer/>
    </div>
    </div>
    </div>
  )
}

export default Hero_sec