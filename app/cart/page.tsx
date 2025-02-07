'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FiTrash2 } from 'react-icons/fi';
import { Button } from '@/components/ui/button';


interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  description: string;
  size: string;
}

const Cart: React.FC = () => {

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Library Stool Chair',
      description: "Ashen Slate/Cobalt Bliss",
      price: 99,
      imageUrl: '/featured/Image-2.png',
      quantity: 1,
      size: "L"
    },
    {
    id: 2,
      name: 'Library Stool Chair',
      description: "Ashen Slate/Cobalt Bliss",
      price: 99,
      imageUrl: '/featured/Image-1.png',
      quantity: 1,
      size: "L"
    },
   
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='flex justify-center'>
    <div className='md:w-[1321px]'>
    <div className="container mx-auto px-4 mt-11 md:pl-20">
     <h1 className="text-2xl font-bold mb-4">Bag</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='md:flex md:space-x-96'>
            <div className='w-[300px]'>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4 md:w-[500px]">
              <div className="flex items-center">
                <Image src={item.imageUrl} alt={item.name} width={100} height={100} className="mr-4" />
                <div>
                    <div className='md:flex md:space-x-44'>
                  <h1 className="font-semibold w-36">{item.name}</h1>
                  <p>MRP:${item.price.toFixed(2)}</p>
                  </div>
                  <p className='mt-2 text-gray-400'>{item.description}</p>
                  <div className='flex space-x-6 text-sm'>
                  <p>Size: {item.size}</p>
                  <p>Quantity {item.quantity}</p>
                  </div>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 mt-16">
                <FiTrash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          </div>
          <div className='md:w-96'>
            <div>
                <h1 className='font-bold text-[21px] mt-5'>Summary</h1>
            </div>
          <div className="flex justify-between  mt-4 ">
            <span>Subtotal:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className='flex justify-between mt-4'>
          <span>Estimated Delivery & Handling</span>
          <span>Free</span>
          </div>
          <div className="flex justify-between font-bold mt-4 border-t border-b border-solid border-gray-300 py-5">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <Button className='bg-secondary. rounded-full w-full p-6 mt-4'>
            Member to Checkout
          </Button>
        </div>
        </div>
      )}
    </div>
      </div>
      </div>
  );
};

export default Cart;