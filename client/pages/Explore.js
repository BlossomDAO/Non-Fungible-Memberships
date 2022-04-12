import React, { useState } from "react";
import Layout from "../components/Layout";
import randomNess from "/public/images/randomness.png";
import doodle from "/public/images/doodle.png";
import cryptoPunk from "/public//images/cryptopunk.png";
import NFTCard from "../components/nftCard";
import boredApp from "/public/images/bored-app.png";
import userIcon from "/public/images/userIcon.png";

export default function Explore() {
  const dummyData = [
    {
      id: 0,
      category: "random",
      nftImage: randomNess,
      nftDesc: "Structured Randomness",
      owner: "0xc9b8....6837",
      rentBtn: true,
      ownerImg: userIcon,
    },
    {
      id: 1,
      category: "doodles",
      nftImage: doodle,
      nftDesc: "Doodle #7568",
      owner: "Dooking",
      rentBtn: true,
      ownerImg: userIcon,
    },
    {
      id: 3,
      category: "punks",
      nftImage: cryptoPunk,
      nftDesc: "CryptoPunk #6764",
      owner: "jesterboxboy.eth",
      rentBtn: true,
      ownerImg: userIcon,
    },
    {
      id: 4,
      category: "punks",
      nftImage: cryptoPunk,
      nftDesc: "CryptoPunk #6765",
      owner: "jesterboxboy.eth",
      rentBtn: true,
      ownerImg: userIcon,
    },
    {
      id: 5,
      category: "punks",
      nftImage: cryptoPunk,
      nftDesc: "CryptoPunk #6764",
      owner: "jesterboxboy.eth",
      rentBtn: true,
      ownerImg: userIcon,
    },
    {
      id: 6,
      category: "apes",
      nftImage: boredApp,
      nftDesc: "Bored Ape Yacht Club #4291",
      owner: "unionPAC",
      rentBtn: true,
      ownerImg: userIcon,
    },
    {
      id: 7,
      category: "apes",
      nftImage: boredApp,
      nftDesc: "Bored Ape Yacht Club #7291",
      owner: "unionPAC",
      rentBtn: true,
      ownerImg: userIcon,
    },
    {
      id: 8,
      category: "apes",
      nftImage: boredApp,
      nftDesc: "Bored Ape Yacht Club #1291",
      owner: "unionPAC",
      rentBtn: true,
      ownerImg: userIcon,
    },
  ];
  const categories = ["apes", "punks", "doodles", "toadz", "random"];

  const [filterBy, setFilterBy] = useState("");
  const [nftData, setNFTData] = useState(dummyData);

  const handleFilter = (filterTerm) => {
    if (filterTerm === filterBy) {
      setNFTData(dummyData);
      setFilterBy("");
    } else {
      setFilterBy(filterTerm);
      const filteredData = dummyData.filter((c) => c.category === filterTerm);
      setNFTData(filteredData);
    }
  };

  const nftsForRent = true;
  return (
    <Layout>
      {nftsForRent && (
        <div className="min-w-full min-h-full flex flex-col">
          <h1 className="text-center text-white text-3xl my-16">
            Wanna see some of these in your wallet?
          </h1>
          <div className="flex justify-center py-8">
            {categories.map((c) => (
              <button
                onClick={() => handleFilter(c)}
                className={
                  filterBy === c
                    ? "bg-gradient-to-r from-grd-ltBlue to-grd-blue text-gray-800 font-mono text-2xl px-4 py-2 rounded-full"
                    : " text-white font-mono text-2xl px-4 py-2 rounded-full border border-grd-ltBlue hover:border-grd-blue mx-2"
                }
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap mx-auto justify-center">
            {nftData.length === 0 && (
              <h1 className="text-center text-white text-3xl mb-16">
                Ooops... There is nothing here. Please try another category
              </h1>
            )}
            {nftData.map((nft) => (
              <div key={nft.id} className="mx-3">
                <NFTCard {...nft} />
              </div>
            ))}
          </div>
        </div>
      )}
      {!nftsForRent && (
        <div className="min-w-full min-h-full flex flex-col justify-center">
          <h1 className="text-center text-white text-3xl mb-16">
            Ooops... Looks like there are no NFTs available to rent. Please
            check back later or consider listing your NFT for others.
          </h1>
          <button className=" bg-gradient-to-r from-grd-ltBlue to-grd-blue text-gray-800 font-mono text-2xl px-4 py-2 rounded-full">
            List your NFT
          </button>
        </div>
      )}
    </Layout>
  );
}
