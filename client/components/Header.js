import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";

import MobileNav from "./MobileNav"

export default function Header() {
  const handleWalletConnect = () => {
    // Do wallet stuff here
    console.log("Clicked");
  };
  return (
    <div className="flex flex-row justify-between items-center py-4 px-1 md:px-2 lg:px-0">
      <Link href="/">
        <div className="relative h-20 w-40">
        <Image src={Logo} alt="NFM Logo" layout="fill"/>
        </div>
      </Link>
      <div className="hidden md:flex items-center w-full justify-end">
        <Link href="#howItWorks">
          <a className="ml-8 text-white text-xl"> How It Works</a>
        </Link>
        <Link href="/explore">
          <a className="ml-8 text-white text-xl">Explore</a>
        </Link>
        <Link href="/rent">
          <a className="ml-8 text-white text-xl">Rent</a>
        </Link>
        <button
          onClick={handleWalletConnect}
          className="border border-gray-500 text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-grd-blue rounded-full py-2 px-4 ml-8"
        >
          Connect Wallet
        </button>
      </div>
      <MobileNav handleWalletConnect={handleWalletConnect}/>
    </div>
  );
}
