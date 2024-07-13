import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-12 text-red-600 flex items-center justify-between align-baseline px-4 border-b-2 border-red-500 uppercase md:h-20 lg:px-20 a'>
      <Link href={"/"}>MASSIMO</Link>
      <p>@All Right Reserved</p>
    </div>
  )
}

export default Footer
