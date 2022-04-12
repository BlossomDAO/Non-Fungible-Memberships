import Hero from "@components/Hero";
import Layout from "@components/Layout";
import NFTCard from "@components/nftCard";
import { dummyData } from "@content/dummyNFT";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto py-20 px-0 sm:px-2">
        <h2 className="text-white text-3xl text-center mb-14">Hotest Rentals 🔥 </h2>
        <div className="flex flex-col sm:flex-row justify-center">
          {dummyData.slice(0,3).map((nft) => (
            <div key={nft.id} className="mx-3">
              <NFTCard {...nft} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Home.Layout = Layout;