import React from "react";
import Link from "next/link";
import NFTCard from "./nftCard";
import boredApp from "@images/bored-app.png";
import userIcon from "@images/userIcon.png";

const nftInfo = {
  nftImage: boredApp,
  nftDesc: "Bored Ape Yacht Club #4291",
  owner: "unionPAC",
  ownerImg: userIcon,
};

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row px-0 sm:px-2 justify-between items-center w-full py-24">
      <div className="flex flex-col pr-16 max-w-xl">
        <h1 className="font-mono text-6xl text-white mb-6">Rent An NFT</h1>
        <p className="font-mono text-xl text-white">
          NFM (Non-Fungible Memberships) are a smarter way to lend & rent NFT’s!
        </p>
        <div className="flex flex-row justify-between py-8">
          <Link href="/explore">
            <button className=" bg-gradient-to-r from-grd-ltBlue to-grd-blue text-gray-800 font-mono text-2xl px-4 py-2 rounded-full">
              Explore NFTs
            </button>
          </Link>

          <button className=" text-white font-mono text-2xl px-4 py-2 rounded-full border border-grd-ltBlue hover:border-grd-blue ">
            Rent your NFT
          </button>
        </div>
      </div>
      <NFTCard {...nftInfo} />
    </div>
  );
}
