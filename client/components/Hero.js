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
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-col max-w-5xl w-full px-4 xl:px-0 py-20 lg:py-0">
        <h1 className="font-mono text-6xl text-white mb-6">Borrow An NFT</h1>
        <p className="font-mono text-lg md:text-xl text-white ">
          NFM (Non-Fungible Memberships) are a <br /> smarter way to lend & rent
          NFT’s!
        </p>
        <div className="flex flex-row space-x-8 py-8">
          <Link href="/explore">
            <Button className="mb-2 mr-4">Explore NFTs</Button>
          </Link>
          <Link href="/rent">
            <Button variant="outline" className="mb-2">
              Rent your NFT
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex w-full ">
        <NFTCard {...nftInfo} />
      </div>
    </div>
  );
}
