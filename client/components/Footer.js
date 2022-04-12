import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <section className="mt-20">
      <hr className="mt-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 py-10 text-gray-300">
        <div className="space-y-4 text-xs text-gray-300">
          <div className="relative w-24 h-20">
            <Image src="/logo.svg" layout="fill" />
          </div>
          <p className="text-base">Smarter way to lend & rent NFT’s!</p>
        </div>

        <div className="space-y-4 text-sm text-gray-300">
          <h5 className="font-bold">CATEGORIES</h5>
          <div className="flex flex-col space-y-3">
            <Link href="/explore">Arts</Link>
            <Link href="/explore">Music</Link>
            <Link href="/explore">Virtual World</Link>
          </div>
        </div>

        <div className="space-y-4 text-sm text-gray-300">
          <h5 className="font-bold">MARKETPLACE</h5>
          <p>List</p>
          <p>Borrow</p>
          <p>Explore</p>
          <p>F.A.Q</p>
        </div>
      </div>
      <hr className="mb-6" />
      <div className="text-center text-white text-xl text-bold p-6">
      Made with ❤️ by BlossomDAO
    </div>
    </section>
  );
}

export default Footer;
