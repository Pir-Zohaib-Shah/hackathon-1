import Image from 'next/image'
import React from 'react'
import { Inter } from '@next/font/google';
import { Button } from '@/components/ui/button';
import { BsCart3 } from 'react-icons/bs';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import Footer from '@/components/footer/Footer';

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
  {
    name: "Library stool chair",
    image: "/featured/image-5.png",
    price: "$39.99",
    link: "/products-pages/product1"
  },

];

const Product1 = () => {
  return (
    <div className='flex flex-col'>
    <div >
    <div className='flex justify-center mt-9'>
      <div className='w-[1321px] h-svh md:flex md:space-x-28'>
        <div className='p-8'>
          <Image src="/featured/Image-4.png" alt='product1' width={500} height={500}/>
        </div>
        <div className='md:w-[500px] flex justify-center'>
        <div className='md:text-[60px] md:mt-11 text-[30px] flex flex-col items-center md:items-start'>
          <div className={inter.className}>
          Library Stool Chair
          </div>
          <div className='p-4'>
          <span className='bg-secondary. md:text-lg text-white p-2 rounded-full text-[12px] '>
          $20.00 USD
          </span>
          <hr className='w-72 md:w-[500px] mt-4'/>
          <p className='text-sm text-center md:text-start p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        <Button className='bg-secondary. rounded-[6px]'><BsCart3/> Add to cart</Button>
        </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
    <div className='w-[1321px] h-[461px]'>
      <div className={inter.className}>
      <h1 className='md:text-[32px] text-2xl p-2 mt-6'>Featured Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-3 mt-6">
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
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Product1