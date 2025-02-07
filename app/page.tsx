'use client'
import Hero_pic from '@/components/hero-pic';
import Hero_sec from '@/components/hero-sec';
import React, { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client";
import { BsCart3 } from "react-icons/bs";
import { Button } from '@/components/ui/button';
import { Inter } from "@next/font/google";
import { Product } from '@/types/products';
import {featuredProducts } from '@/sanity/lib/queries';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);
useEffect(() => {
  async function fetchData() {
    const fetchedProducts : Product[] = await client.fetch(featuredProducts);
    setProducts(fetchedProducts);
  }
  fetchData();
}, []);

  return(
  <>
    <Hero_pic />
    <div className='flex justify-center'>
      <div className='w-auto md:w-[1321px]'>
    <div className={inter.className}>
         <h1 className='md:text-[32px] text-2xl p-2 mt-6 mb-7'>Featured Products</h1>
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
    <Hero_sec />  
  </>
  )
}
