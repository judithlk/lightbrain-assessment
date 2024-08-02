
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useForm } from "react-hook-form";

export default function Header() {
  return (
    <div className="w-[100%] md:flex justify-between items-center py-1 px-5 bg-yellow-500 z-50">
      <div className="md:w-[50%] flex justify-evenly md:justify-between items-center">
      <div>
        <Image src="/logo.png" alt="Organization logo" width={100} height={100} />
      </div>
      <div className="flex flex-row space-x-7">
        <Link href="#" className="block text-base">
          <h1>Home</h1>
        </Link>
        <Link href="/" className="block text-base">
          <h1>Listings</h1>
        </Link>
      </div>
      </div>
      <div>
        <form action="" method="get">
            <input type="text" placeholder="Search..." />
        </form>
      </div>
    </div>
  );
}
