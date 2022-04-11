import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";

export default function Header() {
  const handleWalletConnect = () => {
    // Do wallet stuff here
    console.log("Clicked");
  };
  return (
    <div className="flex flex-row justify-between items-center m-4">
      <Link href="/">
        <Image src={Logo} alt="NFM Logo" height={100} />
      </Link>
      <div>
        <Link href="/HowItWorks">
          <a className="ml-8 text-white text-xl"> How It Works</a>
        </Link>
        <Link href="/explore">
          <a className="ml-8 text-white text-xl"> Explore</a>
        </Link>
        <Link href="/borrow">
          <a className="ml-8 text-white text-xl"> Borrow</a>
        </Link>
        <button
          onClick={handleWalletConnect}
          className="border border-gray-500 text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-grd-blue rounded-full py-2 px-4 ml-8"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
