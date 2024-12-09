import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-[1321px] h-[74px] flex justify-between items-center'>
            <div>
              <ul className='flex space-x-6 p-2 md:justify-start md:space-x-5'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/faqs">Shop</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/about">About</Link></li>
              </ul>
            </div>
            <div className='hidden md:block p-2'>Contact:
            (808) 555-0111</div>
        </div>
    </div>
  )
}

export default Navbar