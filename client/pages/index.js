import Hero from "../components/Hero";
import Layout from "../components/Layout";
import randomNess from '@images/randomness.png';
import doodle from '@images/doodle.png';
import cryptoPunk from '@images/cryptopunk.png';
import NFTCard from "@components/nftCard";

const nfts = [
  {
    id: 1,
    nftImage: randomNess,
    nftDesc: "Structured Randomness",
    owner: "0xc9b8....6837",
    rentBtn: true,
  },
  {
    id: 2,
    nftImage: doodle,
    nftDesc: "Doodle #7568",
    owner: "Dooking",
    rentBtn: true,
  },
  {
    id: 3,
    nftImage: cryptoPunk,
    nftDesc: "CryptoPunk #6764",
    owner: "jesterboxboy.eth",
    rentBtn: true,
  }
]

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="mx-auto py-20 px-0 sm:px-2">
        <h2 className="text-white text-3xl text-center mb-14">Hotest Rentals 🔥 </h2>
        <div className="flex flex-col sm:flex-row justify-center">
          {nfts.map((nft) => (
            <div key={nft.id} className="mx-3">
              <NFTCard {...nft} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
