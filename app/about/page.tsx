'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { urlFor } from '@/sanity/lib/image';
import {featuredProducts } from '@/sanity/lib/queries';
import { Product } from '@/types/products';
import { client } from "@/sanity/lib/client";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { CiCreditCard2 } from "react-icons/ci";
import { PiPlantFill } from "react-icons/pi";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BsCart3 } from 'react-icons/bs';


const About = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchData() {
      const fetchedProducts : Product[] = await client.fetch(featuredProducts);
      setProducts(fetchedProducts);
    }
    fetchData();
  }, []);
  return (
    <div className='flex justify-center'>
      <div className='w-[1321px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 p-2'>
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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2'>
       {products.map((products) => (
        <div key={products._id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-95  transition-all duration-200">
           <Link href={`/products/${products._id}`} passHref> 
        <div >
          {products.image && (
            <Image src={urlFor(products.image).url()}
            alt={products.title}
            width={200}
            height={200} 
            className='w-full h-64 object-cover rounded-md mb-4' 
            ></Image>
          )}
          <div className='p-4'>
          <div className="text-base font-semibold">{products.title}</div>
          <div className="mt-4 flex justify-between items-center">
                        <span className="text-xl font-bold">${products.price}</span>
                        <Button className='bg-secondary. rounded-xl'><BsCart3/></Button>
                      </div>
        </div>
        </div>  
        </Link>
        </div>
       )
       )}
       </div>
       </div>
       </div>
  )
}

export default About