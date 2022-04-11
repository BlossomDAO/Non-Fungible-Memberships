import React, { useState } from "react";
import Layout from "../components/Layout";
import DummyNFT from "../public/dummyNFT.svg";
import Image from "next/image";

export default function Explore() {
  const dummyData = [
    { id: 0, img: DummyNFT, category: "Apes" },
    { id: 1, img: DummyNFT, category: "Apes" },
    { id: 2, img: DummyNFT, category: "Apes" },
    { id: 3, img: DummyNFT, category: "Punks" },
    { id: 4, img: DummyNFT, category: "Punks" },
    { id: 5, img: DummyNFT, category: "Punks" },
    { id: 6, img: DummyNFT, category: "Creepz" },
    { id: 7, img: DummyNFT, category: "Apes" },
    { id: 8, img: DummyNFT, category: "Apes" },
    { id: 9, img: DummyNFT, category: "Apes" },
  ];
  const categories = ["Apes", "Punks", "Creepz", "Toadz"];

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
              <Image src={nft.img} height={300} width={300} />
            ))}
          </div>
        </div>
      )}
      {!nftsForRent && (
        <div className="min-w-full min-h-full flex flex-col justify-center">
          <h1 className="text-center text-white text-3xl mb-16">
            Ooops... Looks like there are no NFTs available to borrow. Please
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
