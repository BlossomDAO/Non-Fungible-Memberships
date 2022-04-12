import React from "react";
import Layout from "@components/Layout";

export default function HowItWorks() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-7xl text-white my-8">How It Works</h1>
        <p className="text-3xl text-white my-8">
          New to Web3 and NFTs? Don't have a kitty, punk, ape of your own? Well
          here at Non-Fungible-Membership you can rent an NFT securely, in a
          peer-to-peer (P2P) manner!{" "}
        </p>
        <div className="border-4 p-8 my-8">
          <h3 className="text-3xl text-white">Looking to Rent?</h3>
          <p className="text-2xl text-white pt-8">
            Browse our available NFTs to rent, once you find one you like,
            connect your wallet, select the duration you would like it for and
            stump up the required fee. Once the smart contract is initiated, we
            will send over the NFT to your wallet and give you some time to play
            with it :) Once your rental period ends, there is no need to return
            it - The smart contract automatically handles everything.
          </p>
        </div>
        <div className="border-4 p-8 my-8">
          <h3 className="text-3xl text-white">Looking to Earn?</h3>
          <p className="text-2xl text-white pt-8">
            Passive income from your valuable NFTs has never been easier. The
            Non fungible Membership can assist you in renting out your NFT.
            Simply connect your wallet, list your chosen NFT along with a day
            rate and we will take care of the rest.
          </p>
        </div>
      </div>
    </>
  );
}

HowItWorks.Layout = Layout;