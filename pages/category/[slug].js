import ProductCard from '@/Components/ProductCard';
import Wrapper from '@/Components/Wrapper';
import { useRouter } from 'next/router'
import React from 'react'

function Category() {
    const router = useRouter()
    const {slug} = router.query;

  return (
    <div className="w-full md:py-20 relative">
        <Wrapper>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Running Shoes
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0" >
                <ProductCard/>
            </div>
        </Wrapper>
    </div>
  )
}

export default Category