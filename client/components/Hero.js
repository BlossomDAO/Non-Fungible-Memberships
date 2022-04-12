import React from "react";
import Image from "next/image";
import DummyNFT from "../public/dummyNFT.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-col max-w-5xl w-full">
        <h1 className="font-mono text-6xl text-white mb-6">Borrow An NFT</h1>
        <p className="font-mono text-xl text-white ">
          NFM (Non-Fungible Memberships) are a <br/> smarter way to lend & rent NFT’s!
        </p>
        <div className="flex flex-row space-x-8 py-8">
          <Link href="/explore">
            <button className=" bg-gradient-to-r from-grd-ltBlue to-grd-blue text-gray-800 font-mono text-2xl px-4 py-2 rounded-full">
              Explore NFTs
            </button>
          </Link>

          <button className=" text-white font-mono text-2xl px-4 py-2 rounded-full border border-grd-ltBlue hover:border-grd-blue ">
            Borrow your NFT
          </button>
        </div>
      </div>
      <div className="flex w-full">
      <Image src={DummyNFT} alt="Picture of an NFT" height={600} width={700} />
      </div>
    </div>
  );
}
