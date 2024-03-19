import Image from 'next/image'
import React from 'react'

import {RiDeleteBin6Line} from "react-icons/ri"

function CartItem() {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
        <div className='shrink-0 aspect-square w=[50px] md:w-[120px]'>
            <img
            src={'p1.webp'}
            alt={'sahil'}
            width={120}
            height={120}
            />
        </div>
        <div className='w-full flex flex-col'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='text-lg md:text-2xl font-semibold text-black'>
                    Jordan retro
                </div>
                <div className='text-sm md:text-md font-medium text-black/[0.5] block md:hidden'>
                    Men's Golf shoes
                </div>
                <div className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>
                    MRP : 19 695.00
                </div>
            </div>

            <div className='text-sm md:text-md font-medium text-black/[0.5] block md:block'>
                Men's Golf shoes
            </div>

            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
                    <div className='flex items-center gap-1'>
                        <div className='font-semibold'>Size:</div>
                        <select className='hover:text-black cursor-pointer'>
                            <option>UK 6</option>
                            <option>UK 6</option>
                            <option>UK 6</option>
                            <option>UK 6</option>
                            <option>UK 6</option>
                            <option>UK 6</option>
                            <option>UK 6</option>
                        </select>
                    </div>

                    <div className='flex items-center gap-1'>
                        <div className='font-semibold'>Quantity:</div>
                        <select className='hover:text-black cursor-pointer'>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                        </select>
                    </div>
                </div>
                <RiDeleteBin6Line className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]' />
            </div>
        </div>
    </div>
  )
}

export default CartItem