import { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import Web3Modal from "web3modal";
import { useRouter } from "next/router";

import Layout from "@components/Layout";
import { useForm } from "react-hook-form";
import NFTCard from "@components/nftCard";
import doodle from "@images/doodle.png";
import userIcon from "@images/userIcon.png";
import Button from "@components/button";

export default function Rent() {
  const testAddress = "0x60f80121c31a0d46b5279700f9df786054aa5ee5";
  const [nfts, setNfts] = useState([]);
  const [nftData, setNFTData] = useState({
    name: "",
    contract: "",
    tokenId: "",
  });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const nftInfo = {
    nftImage: doodle,
    nftDesc: "Doodle #7568",
    owner: "BlossomDAO",
    ownerImg: userIcon,
  };

  async function getAddress() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    return signer;
  }

  async function getNFTs() {
    const res = await getAddress();
    const address = await res.getAddress();
    // change test address to address
    const data = await axios
      .get(
        `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${testAddress}`
      )
      .then((res) => res.data.items);
    setNfts(data);
  }

  useEffect(() => {
    getNFTs();
  }, []);
  console.log(nftData);

  async function createRentalItem() {
    
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-white text-5xl pt-10">
          Choose one of your NFT's to Rent
        </h2>
        <div className="grid grid-cols-4 gap-x-10 overflow-scroll scrollbar-hide w-full p-6">
          {nfts.length > 0 &&
            nfts.slice(0, 8).map((nft) => (
              <NFTCard
                nftImage={nft.meta.content[0].url}
                nftDesc={nft.meta.name}
                owner="BlossomDAO"
                height={400}
                onClick={(e) => {
                  e.preventDefault();
                  setNFTData({ ...nftData, name: nft.meta.name, contract: nft.contract, tokenId: nft.tokenId });
                  router.push("#rent-form");
                }}
              />
            ))}
        </div>
        <div id="rent-form" className="w-full">
          {nftData.name && (
            <h1 className="text-4xl text-white my-8">
              Rent out <span className="text-blue-400">{nftData.name}</span>
            </h1>
          )}
          <form
            className="flex flex-col border-4 p-8 my-8 min-w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="text-transparent bg-clip-text bg-gradient-to-br from-white to-grd-blue">
              Enter the monthly fee
            </label>
            {errors.monthlyFee && (
              <span className="text-red-500 font-bold">
                This field is required
              </span>
            )}
            <input
              className="my-4 text-2xl p-2"
              placeholder="0.05"
              {...register("monthlyFee", { required: true })}
            />

            <label className="text-transparent bg-clip-text bg-gradient-to-br from-white to-grd-blue">
              How many months would you like to rent your NFT?
            </label>
            {errors.rentalPeriod && (
              <span className="text-red-500 font-bold">
                This field is required
              </span>
            )}
            <input
              className="my-4 text-2xl p-2"
              placeholder="3"
              {...register("rentalPeriod", { required: true })}
            />

            <label className="text-transparent bg-clip-text bg-gradient-to-br from-white to-grd-blue">
              Deposit Fee (optional)
            </label>
            <input
              className="my-4 text-2xl p-2"
              placeholder="0.2"
              {...register("depositFee")}
            />
            <Button>Rent your NFT</Button>
          </form>
        </div>
      </div>
    </>
  );
}

Rent.Layout = Layout;
