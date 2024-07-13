import React from "react";
import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50" href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
          )}
          {/* Text xontainer */}
          <div className="flex justify-between uppercase items-center group">
            <h1 className="font-bold ">{item.title}</h1>
            <h1 className="group-hover:hidden">${item.price}</h1>
            <button className= " hidden group-hover:block bg-red-500 text-white p-2 rounded">Add to cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;


// Maan lo ki aapke paas ek card hai aur aap chahte ho ki jab aap uspar hover karo, toh card ke andar ka text bhi change ho jaye.