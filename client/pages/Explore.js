import React from "react";
import Layout from "../components/Layout";
import DummyNFT from "../public/dummyNFT.svg";
import Image from "next/image";

export default function Explore() {
  const dummyData = [
    { id: 0, img: DummyNFT },
    { id: 1, img: DummyNFT },
    { id: 2, img: DummyNFT },
    { id: 3, img: DummyNFT },
    { id: 4, img: DummyNFT },
    { id: 5, img: DummyNFT },
    { id: 6, img: DummyNFT },
    { id: 7, img: DummyNFT },
    { id: 8, img: DummyNFT },
    { id: 9, img: DummyNFT },
  ];

  const nftsForRent = true;
  return (
    <Layout>
      {nftsForRent && (
        <div className="min-w-full min-h-full flex flex-col">
          <h1 className="text-center text-white text-3xl my-16">
            Wanna see some of these in your wallet?
          </h1>
          <div className="flex flex-wrap mx-auto justify-center">
            {dummyData.map((nft) => (
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
