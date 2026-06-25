"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export default function PriceRange() {
  const [price, setPrice] = useState([100]);

  return (
    <div className="flex items-center gap-3 mt-10">
      <input type="text" value="$ 1.00" readOnly className="h-11 w-20 rounded-md border border-gray-300 bg-white text-center text-gray-500 outline-none" />

      <div className="w-40">
        <Slider value={price} onValueChange={setPrice} min={1} max={1000} step={1} />
      </div>

      <input type="text" value={`$ ${price}.00`} readOnly className="h-11 w-24 rounded-md border border-gray-300 bg-white text-center text-gray-500 outline-none" />

      <button className="text-[#6A8D43] transition hover:scale-110">
        <ArrowUpDown size={36} strokeWidth={1.8} />
      </button>
    </div>
  );
}
