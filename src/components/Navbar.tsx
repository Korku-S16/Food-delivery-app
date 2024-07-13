import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user=false
  return (
    <div className='h-12 text-red-600 flex items-center justify-between px-4 border-b-2 border-red-500 uppercase md:h-20 lg:px-20'>
      {/* Left Links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/" >HomePage</Link>
        <Link href="/menu" >Menu</Link>
        <Link href="/" >Contact</Link>

      </div>
      {/* LOGO */}
      
      <div className='text-xl flex-1 md:text-center md:font-bold'>
      <Link href={"/"}>Massimo</Link>

      </div>
    
      {/* Mobile Menu */}
      <div className='md:hidden' >
        <Menu />
      </div>
      {/* Right Links */}
      <div className='hidden md:flex gap-4 items-center lg:gap-6 flex-1 md:justify-end'>
       
        <div className='flex items-center bg-amber-500 p-1 rounded cursor-pointer gap-2' >
          <Image src="/phone.png" alt="phone" width={20} height={20}/>
          <span>2222-4444</span>
        </div>
        {!user ? (<Link href="login" >Login</Link>):
        (<Link href="/orders" >orders</Link>)}
        <CartIcon />

      </div>

    </div>
  )
}

export default Navbar
