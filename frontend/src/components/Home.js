import React from "react";
import Layout from "./Layout";
import DummyNFT from "../assets/dummyNFT.svg";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col pr-16">
          <h1 className="font-mono text-6xl text-white mb-6">Borrow An NFT</h1>
          <p className="font-mono text-xl text-white">
            NFM (Non-Fungible Memberships) are a smarter way to lend & rent
            NFT’s!
          </p>
          <div className="flex flex-row justify-between py-8">
            <button className="bg-zinc-900 text-white font-mono text-2xl px-4 py-2 border-zinc-900 rounded">
              Explore NFTs
            </button>
            <button className="bg-zinc-900 text-white font-mono text-2xl px-4 py-2 border-zinc-900 rounded">
              Borrow your NFT
            </button>
          </div>
        </div>
        <img className="max-w-md" src={DummyNFT} alt="" />
      </div>
    </Layout>
  );
}
