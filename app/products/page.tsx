'use client'
import React, { useEffect, useState } from 'react'
import { Inter } from "@next/font/google";
import { BsCart3 } from "react-icons/bs";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Product } from '@/types/products';
import { client } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const inter = Inter({
    subsets: ["latin"],
    weight: ["600"],
  });

const Product_page = () => {

   const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchData() {
      const fetchedProducts : Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchData();
  }, []);
  return (
    <div>
    <div className='flex justify-center'>
    <div className='w-[1321px] '>
        <div className={inter.className}>
      <h1 className='md:text-[32px] text-2xl p-2 mt-6'>All Products</h1>
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
    <Image src="/featured/image-5.png" alt='img' width={186} height={186}/>
    <Image src="/categories/Image-1.png" alt='img' width={186} height={186}/>
    </div>
    </div>
</div>
</div>
  )
}

export default Product_page