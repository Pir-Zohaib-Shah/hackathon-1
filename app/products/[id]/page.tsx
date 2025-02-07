"use client";
import { Inter } from '@next/font/google';
import { CartContext } from "@/app/context/CartContext";
import { useEffect, useState, useContext} from 'react';
import { useParams } from 'next/navigation'; // import useParams from next/navigation
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '@/types/products'; // Assuming you have a Product type defined
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BsCart3 } from 'react-icons/bs';

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

const ProductDetail = () => {
  const { id } = useParams(); // This will fetch the dynamic ID from the URL
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext is undefined");
  }
  const { addToCart } = cartContext;
  const [product, setProduct] = useState<Product | null>(null); // Use a single product state instead of an array

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Fetch the product details based on the dynamic id
  const fetchProduct = async () => {
    // Modify the query to fetch the specific product by its id
    const fetchedProduct = await client.fetch(`*[_id == "${id}"][0]`); // Fetch the product by id
    setProduct(fetchedProduct); // Set the single product
  };

  if (!product) return <div>Loading...</div>; // Loading state while fetching the product data

  return (
    <>
    <div className='flex justify-center mt-9'>
      <div className='w-[1321px] md:flex md:space-x-28'>
        <div className='p-8'>
          <Image 
            src={product.image ? urlFor(product.image).url() : '/placeholder-image.png'}
            alt={product.title}
            width={500} 
            height={500}/>
        </div>
        <div className='md:w-[500px] flex mt-16'>
        <div className='md:text-[60px] md:mt-11 text-[30px] flex flex-col items-center md:items-start'>
          <div className={inter.className}>
          {product.title}
          </div>
          <div className='my-6'>
            <div className='flex justify-center md:justify-start'>
          <span className='bg-secondary. md:text-lg text-white p-2 rounded-[6px] text-[12px] '>
          ${product.price}.00 USD
          </span></div>
          <hr className='w-72 md:w-[500px] my-6'/>
          <p className='text-sm text-center md:text-start'>{product.description}</p>
          </div>
        <Button className='bg-secondary. rounded-[6px]' onClick={() => addToCart({ id: product._id, title: product.title, image: product.image ? urlFor(product.image).url() : '', price: product.price })}><BsCart3/> Add to cart</Button>
        </div>
        </div>
      </div>
    </div>

    </>
        
  );
};

export default ProductDetail;
