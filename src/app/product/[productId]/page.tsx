import { singleProduct } from '@/data'
import React from 'react'
import Image from 'next/image'
import Price from '@/components/Price'



function page() {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row gap-5'>
      {/* Image conta */}

      {singleProduct.img && (
        <div className='relative h-1/2 w-full'>
          <Image src={singleProduct.img} alt="" fill className="object-contain"/>
        </div>
      )}
      {/* TExt conta */}

      <div className='h-1/2 flex flex-col gap-4'>
        <h1 className='text-xl font-bold uppercase'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      
        
      </div>
    </div>
  )
}

export default page
