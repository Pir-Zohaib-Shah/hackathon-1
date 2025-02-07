"use client"
import { useEffect, useState } from 'react';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '@/types/products';
import { client } from "@/sanity/lib/client";
import Image from 'next/image';
import { Inter } from "@next/font/google";
import { Button } from './ui/button';
import { BsCart3 } from "react-icons/bs";
import { allCategories, eight } from '@/sanity/lib/queries';
import { Categories } from '@/types/categories';
import Link from 'next/link';

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

const  Hero_sec = () => {

  const [categories, setCategories] = useState<Categories[]>([]);
  useEffect(() => {
    async function fetchData() {
      const fetchedProducts : Categories[] = await client.fetch(allCategories);
      setCategories(fetchedProducts);
    }
    fetchData();
  }, []);

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchData() {
      const fetchedProducts : Product[] = await client.fetch(eight);
      setProducts(fetchedProducts);
    }
    fetchData();
  }, []);

  return (
      <div className='flex justify-center'>
        <div className='w-auto md:w[1321px]'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 mt-6">
          </div>
          <div className={inter.className}>
            <h1 className='md:text-[32px] text-2xl p-2 my-6'>Top categories</h1>
          </div>
          <div className=' items-center '>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 place-items-center">
              {categories.map((category) => (
                <div key={category._id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-95 transition-all duration-200">
                  <div>
                  <Link href='/products' passHref> 
                    {category.image && (
                      <Image 
                        src={urlFor(category.image).url()}
                        alt={category.title}
                        width={200}
                        height={200}
                        className='w-full h-96 object-cover' 
                      />
                    )}
                    <div className="p-4 bg-[rgba(0,0,0,0.7)]">
                      <h3 className="text-sm md:text-lg font-semibold text-white">{category.title}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-200">{category.products} Products available</p>
                      </div>
                    </div>
                  </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex space-x-3 flex-col md:flex-row p-5'>
            <h1 className='text-center md:-rotate-90 md:h-0 md:mt-52 md:text-[34px] md:hidden'>EXPLORE NEW AND POPULAR STYLES</h1>
            <div className='hidden md:block'>
              <div className='w-5 h-[648px] flex items-center'>
                <Image src="/side.png" alt='text' width={20} height={18}/>
              </div>
            </div>
            <div className='flex items-center'>
              <Image src="/featured/Image-3.png" alt='img1' width={648} height={648}/>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-4'>
              <Image src="/featured/Image-2.png" alt='img1' width={312} height={312}/>
              <Image src="/featured/Image-1.png" alt='img1' width={312} height={312}/>
              <Image src="/featured/Image-4.png" alt='img1' width={312} height={312}/>
              <Image src="/featured/image-5.png" alt='img1' width={312} height={312}/>
            </div>
          </div>
          <div className={inter.className}>
            <h1 className='md:text-[32px] text-2xl p-2 my-6'>Our Products</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2'>
            {products.map((products) => (
              <div key={products._id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-95  transition-all duration-200"> 
                <Link href={`/products/${products._id}`} passHref> 
                <div>
                  {products.image && (
                    <Image src={urlFor(products.image).url()}
                    alt={products.title}
                    width={200}
                    height={200} 
                    className='w-full h-64 object-cover rounded-md' 
                    ></Image>
                  )}
                  <div className='p-4'>
                    <div className="text-base font-semibold">{products.title}</div>
                    <div className=" flex justify-between items-center">
                      <span className="text-xl font-bold">${products.price}</span>
                      <Button className='bg-secondary. rounded-xl'><BsCart3/></Button>
                    </div>
                  </div>
                </div>  
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Hero_sec;
