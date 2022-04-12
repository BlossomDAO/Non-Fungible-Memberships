import React, { useState } from "react";
import Layout from "../components/Layout";
import NFTCard from "@components/nftCard";
import Button from "@components/button";
import { dummyData, categories } from "@content/dummyNFT";

export default function Explore() {
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
    <>
      {nftsForRent && (
        <div className="min-w-full min-h-full flex flex-col">
          <h1 className="text-center text-white text-3xl my-16">
            Wanna see some of these in your wallet?
          </h1>
          <div className="flex flex-wrap justify-center py-8">
            {categories.map((c) => (
              <Button
                onClick={() => handleFilter(c)}
                className="mr-2 mb-2"
                variant={filterBy === c ? "gradient" : "outline"}
              >
                {c}
              </Button>
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
            Oops... Looks like there are no NFTs available to rent. Please check
            back later or consider listing your NFT for others.
          </h1>
          <Button>List your NFT</Button>
        </div>
      )}
    </>
  );
}

Explore.Layout = Layout;
