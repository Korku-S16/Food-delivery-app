"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setopen] = useState(false);
  const user =false
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="open"
          width={20}
          height={20}
          onClick={() => setopen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="open"
          width={20}
          height={20}
          onClick={() => setopen(false)}
        />
      )}
      {open &&<div className="bg-red-500 text-white absolute left-0 top-23 h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-8 w-full z-10">
        {links.map((items) => (
          <Link href={items.url} key={items.id} onClick={() => setopen(false)}>
            {items.title}
          </Link>
        ))}
        {!user ?(<Link href="/login" onClick={() => setopen(false)} > Login</Link>):(
        <Link href="/orders"onClick={() => setopen(false)}  > orders</Link>)}
        <Link href="/cart" onClick={() => setopen(false)}>
          <CartIcon />
        </Link>

      </div>}
    </div>
  );
}; 

export default Menu;
