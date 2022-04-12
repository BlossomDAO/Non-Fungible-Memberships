import React from "react";
import Link from "next/link";
import NFTCard from "./nftCard";
import boredApp from "@images/bored-app.png";
import userIcon from "@images/userIcon.png";
import Button from "./button";

const nftInfo = {
  nftImage: boredApp,
  nftDesc: "Bored Ape Yacht Club #4291",
  owner: "unionPAC",
  ownerImg: userIcon,
};

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row px-0 sm:px-2 justify-between items-center w-full py-24">
      <div className="flex flex-col max-w-xl">
        <h1 className="font-mono text-6xl text-white mb-6">Rent An NFT</h1>
        <p className="font-mono text-xl text-white">
          NFM (Non-Fungible Memberships) are a smarter way to lend &amp; rent NFT’s!
        </p>
        <div className="flex flex-col sm:flex-row justify-start py-8">
          <Link href="/explore">
            <Button className="mb-2 mr-4">Explore NFTs</Button>
          </Link>
          <Link href="/rent">
            <Button variant="outline" className="mb-2">Rent your NFT</Button>
          </Link>
        </div>
      </div>
      <NFTCard {...nftInfo} />
    </div>
  );
}
