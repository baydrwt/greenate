"use client";

import Link from "next/link";
import { UserRound, Heart, House, ShoppingBag, Menu } from "lucide-react";

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full">
      <div className="relative h-20 bg-white shadow-[0_-5px_25px_rgba(0,0,0,.08)] px-10">
        <div className="absolute left-1/2 -top-5 h-16 w-36 -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-white" />

        <div className="relative flex h-full items-center justify-between">
          <Link href="/">
            <UserRound size={34} strokeWidth={1.7} />
          </Link>

          <Link href="/wishlist">
            <Heart size={34} strokeWidth={1.7} />
          </Link>

          <Link href="/" className="-mt-14 flex h-22 w-22 items-center justify-center rounded-full bg-[#103E36] shadow-xl">
            <House size={42} strokeWidth={2} className="text-white" />
          </Link>

          <Link href="/cart" className="relative">
            <ShoppingBag size={34} strokeWidth={1.7} />

            <span className="absolute -left-2 top-5 flex h-6 w-6 items-center justify-center rounded-md bg-[#FF8614] text-xs font-semibold text-white">3</span>
          </Link>

          <button>
            <Menu size={38} strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </nav>
  );
}
