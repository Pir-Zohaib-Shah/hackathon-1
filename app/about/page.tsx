import Image from 'next/image'
import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { CiCreditCard2 } from "react-icons/ci";
import { PiPlantFill } from "react-icons/pi";
import { Url } from 'next/dist/shared/lib/router/router';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BsCart3 } from 'react-icons/bs';
import Footer from '@/components/footer/Footer';

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


const About = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1321px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
        <Image src="/Text-Block.png" alt='text-block' width={600} height={650}/>
        <Image src="/Image-block.png" alt='text-block' width={600} height={570}/>
        </div>
        <h1 className='text-[36px] text-center font-bold mt-14'>
        What makes our Brand Different
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-4 p-3'>
        <div className='w-[300px] h-[245px] bg-back text-secondary. flex justify-center items-center p-12'>
          <div>
        <TbTruckDelivery className='text-4xl' />
        <h3 className='text-xl font-semibold'>Next day as standard</h3>
        <p>Order before 3pm and get your order the next day as standard</p>
        </div>
        </div>
        <div className='w-[300px] h-[245px] bg-back text-secondary. flex justify-center items-center p-12'>
          <div>
        <CiCircleCheck className='text-4xl' />
        <h3 className='text-xl font-semibold'>Made by true artisans</h3>
        <p>Handmade crafted goods made with real passion and craftmanship</p>
        </div>
        </div>
        <div className='w-[300px] h-[245px] bg-back text-secondary. flex justify-center items-center p-12'>
          <div>
        <CiCreditCard2 className='text-4xl' />
        <h3 className='text-xl font-semibold'>Unbeatable prices</h3>
        <p>For our materials and quality you won’t find better prices anywhere</p>
        </div>
        </div>
        <div className='w-[300px] h-[245px] bg-back text-secondary. flex justify-center items-center p-12'>
          <div>
        <PiPlantFill className='text-4xl' />
        <h3 className='text-xl font-semibold'>Recycled packaging</h3>
        <p>We use 100% recycled to ensure our footprint is more manageable</p>
        </div>
        </div>
      </div>
          <div className='p-3'>
          <h1 className='text-[36px] font-bold mt-14'>Our Popular Products </h1>
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
      <Footer/>
      </div>
    </div>
  )
}

export default About