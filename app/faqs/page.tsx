import Footer from '@/components/footer/Footer'
import React from 'react'

const Faqs = () => {
  return (
    <div>
        <div>
        <h1 className='text-[48px] font-bold text-center'>Questions Looks Here</h1>
        <p className='text-center text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
        </div>
        <div className='flex justify-center mt-10 p-4'>
        <div className='w-[1321px] grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div className='md:w-[610px] flex flex-col justify-center space-y-4 bg-back p-2 md:h-[170px] h-[200px]'>
                <div className='flex justify-between'>
                <div className='font-bold md:text-xl text-lg'>What types of chairs do you offer?</div>
                <div className='text-2xl'>+</div>
                </div>
                <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                </div>
            </div>
            <div className='md:w-[610px] flex flex-col justify-center space-y-4 bg-back p-2 md:h-[170px] h-[200px]'>
                <div className='flex justify-between'>
                <div className='font-bold md:text-xl text-lg'>How can we get in touch with you?</div>
                <div className='text-2xl'>+</div>
                </div>
                <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                </div>
            </div>
            <div className='md:w-[610px] flex flex-col justify-center space-y-4 bg-back p-2 md:h-[170px] h-[200px]'>
                <div className='flex justify-between'>
                <div className='font-bold md:text-xl text-lg'>What will be delivered? And When?</div>
                <div className='text-2xl'>+</div>
                </div>
                <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                </div>
            </div>
            <div className='md:w-[610px] flex flex-col justify-center space-y-4 bg-back p-2 md:h-[170px] h-[200px]'>
                <div className='flex justify-between'>
                <div className='font-bold md:text-xl text-lg'>Do your chairs come with a warranty?</div>
                <div className='text-2xl'>+</div>
                </div>
                <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                </div>
            </div>
            <div className='md:w-[610px] flex flex-col justify-center space-y-4 bg-back p-2 md:h-[170px] h-[200px]'>
                <div className='flex justify-between'>
                <div className='font-bold md:text-xl text-lg'>Can I try a chair before purchasing?</div>
                <div className='text-2xl'>+</div>
                </div>
                <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                </div>
            </div>
            <div className='md:w-[610px] flex flex-col justify-center space-y-4 bg-back p-2 md:h-[170px] h-[200px]'>
                <div className='flex justify-between'>
                <div className='font-bold md:text-xl text-lg'>How do I clean and maintain my Comforty chair?</div>
                <div className='text-2xl'>+</div>
                </div>
                <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Faqs