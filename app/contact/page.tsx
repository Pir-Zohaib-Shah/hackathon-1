import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='flex items-center flex-col'>
      <div className='md:w-[1200px] text-center md:mt-28 mt-12 items-center flex flex-col'>
        <div className='md:text-[54px] text-4xl font-bold '>
      Get In Touch With Us
      </div>
      <div className='px-3 md:w-[600px]  text-gray-400 md:mt-5 md:mb-24 w-[350px]'>
      For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </div>
      <div className='flex flex-col md:flex-row md:space-x-44'>
      <div>
      <div>
        <div className='w-48 text-start mt-7'>
        <div className='flex space-x-2'>
        <FaLocationDot className='text-xl'/><div className='font-bold text-2xl '>Address</div>
        </div>
        <div>236 5th SE Avenue, New York NY10000, United States</div>
        </div>
      </div>
      <div >
        <div className='w-48 text-start mt-7'>
        <div className='flex space-x-2'>
        <FaPhoneAlt className='text-xl' /><div className='font-bold text-2xl'>Phone</div>
        </div>
        <div>Mobile: +(84) 546-6789
        Hotline: +(84) 456-6789</div>
        </div>
      </div>
      <div    >
        <div className='w-48 text-start mt-7'>
        <div className='flex space-x-2'>
        <MdWatchLater className='text-xl'/><div className='font-bold text-2xl'>Working Time</div>
        </div>
        <div>Monday-Friday: 9:00 - 22:00</div>
        <div>Saturday-Sunday: 9:00 - 21:00</div>
        </div>
      </div>
      </div>
      <div>
      <div className='text-start mt-7 md:w-[500px]'>
        Your name
        <Input className='mt-2 p-8 rounded-xl' placeholder='Abc'/>
      </div>
      <div className='text-start mt-7'>
        Email address
        <Input className='mt-2 p-8 rounded-xl' placeholder='Abc@def.com'/>
      </div>
      <div className='text-start mt-7'>
      Subject
        <Input className='mt-2 p-8 rounded-xl' placeholder='This is an optional'/>
      </div>
      <div className='text-start mt-7'>
      Message
        <div>
        <textarea placeholder='Hi! i’d like to ask about' className='md:w-[500px] mt-2 w-[350px] rounded-xl p-2'/></div>
      </div>
      </div>
    </div>
    </div>
    <div className='md:h-[270px] h-96 bg-back w-full flex justify-center items-center'>
    <div className=' grid grid-cols-1 md:grid-cols-3 gap-14'>
    <Image src="/quality-2.png" alt="?" width={300} height={300} className='w-52 md:w-[300px]'/>
    <Image src="/quality-3.png" alt="?" width={300} height={300} className='w-52 md:w-[300px]'/>
    <Image src="/quality-1.png" alt="?" width={300} height={300} className='w-52 md:w-[300px]'/>
    </div>
    </div>
    </div>
  )
}

export default Contact