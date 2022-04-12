import Image from "next/image";

import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />

      {/* Trending Rentals */}
      <div className="flex flex-col space-y-3 px-4 xl:px-0">
        <p className="text-base text-gray-500">
          Most trending rentals of the day.
        </p>
        <h2 className="text-[2.5rem] md:text-5xl text-gray-200">Trending Rentals</h2>
        <div className="grid grid-flow-col overflow-scroll scrollbar-hide xl:grid xl:grid-cols-4 gap-x-10 gap-y-5">
          <NFTCard title="NFT Title" price="0.55 Eth" />
          <NFTCard title="NFT Title" price="0.75 Eth" />
          <NFTCard title="NFT Title" price="0.85 Eth" />
          <NFTCard title="NFT Title" price="0.95 Eth" />
        </div>
      </div>

      {/* How it works */}
      <div className="bg-secondary mt-20 px-6 py-10" id="howItWorks">
        <p className="text-4xl text-white w-full md:text-center font-bold mb-14">
          Easy steps to lend & rent an NFT
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 xl:gap-y-0">
          <Feature
            title="Browse Available NFTs"
            content="Browse our available NFTs to rent."
          />
          <Feature
            title="Setup Your Wallet"
            content="Once you find one you like, connect your wallet."
          />
          <Feature
            title="Set a duration"
            content="Select the duration you would like it for and stump up the required fee."
          />
          <Feature
            title="Rent an NFT"
            content="We will send over the NFT to your wallet and give you some time to play with it until your rental period ends."
          />
        </div>
      </div>

    </Layout>
  );
}

const Feature = ({ src, title, content }) => {
  return (
    <div className="flex flex-col space-y-2 ">
      <div className="flex flex-row space-x-2 items-end">
        <div className="relative h-14 w-14">
          <Image src="/dummyNFT.svg" layout="fill" />
        </div>
        <p className="text-xl text-gray-300 font-bold">{title}</p>
      </div>

      <div>
        <p className="text-base text-gray-500">{content}</p>
      </div>
    </div>
  );
};

const NFTCard = ({ title, src, price }) => {
  return (
    <div className="rounded-xl w-72 h-[25rem] mx-auto mt-10 bg-gradient-to-r p-[2px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
      <div className="flex flex-col justify-between items-center h-full bg-primary text-white rounded-lg py-4 px-2">
        <div className="relative w-full h-full -mt-5 ml-2">
          <Image src="/dummyNFT.svg" layout="fill"/>
        </div>

        <div className="w-full">
          <h2>{title}</h2>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-base text-gray-300">{price}</p>
            </div>
            <button className="bg-gradient-to-r from-grd-ltBlue to-grd-blue text-gray-800 font-mono text-sm px-4 py-2 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
