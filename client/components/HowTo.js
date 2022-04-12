import React from "react";
import boredApp from "@images/bored-app.png";
import Image from "next/image";

export default function HowTo() {
  return (
    <div className="bg-secondary mt-20 px-6 py-10" id="howTo">
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
  );
}

const Feature = ({ src, title, content }) => {
  return (
    <div className="flex flex-col space-y-2 ">
      <div className="flex flex-row space-x-2 items-center">
        <div className="relative h-14 w-14">
          <Image src={boredApp} layout="fill" />
        </div>
        <p className="text-xl text-gray-300 font-bold">{title}</p>
      </div>

      <div>
        <p className="text-base text-gray-500">{content}</p>
      </div>
    </div>
  );
};
