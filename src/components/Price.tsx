"use client";
import React, { useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [Quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* Options COnatiner */}
      <div className="flex gap-4">
        {options?.map((option,index) => (
          <button
            className=" min-w-[6rem] text-red rounded-md p-2 ring-1 ring-red-300 "
            style={{
                background:selected === index ? "rgb(252 68 68)" : "White",
                color:selected === index ? "white": "red"

            }}
            key={option.title}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quanitty conati */}
      <div className="flex justify-between items-center ">
        <div className="flex justify-between items-center w-full p-3 ring-1 ring-red-500 ">
          <span className=" ">Quantity</span>
          <div className="flex gap-2">
            <button>{"<"}</button>
            <span>{Quantity}</span>
            <button>{">"}</button>
          </div>
        </div>
        {/* CArt button */}
        <button className="bg-red-500 w-56 text-white  p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
