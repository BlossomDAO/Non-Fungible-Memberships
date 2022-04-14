import Image from "next/image";
import ethImg from '@images/ethCurrency.png';

const styles = {
  wrapper:
    "flex flex-col overflow-clip max-w-[24rem] min-h-min rounded-lg hover:-translate-y-1 transition-all duration-500 mb-3",
  contentContainer: "mx-auto w-full flex justify-center",
  contentBox:
    "bg-white py-4 px-2 w-full flex flex-col justify-between rounded-b-xl",
  rentButton: "bg-black text-white px-2 rounded-md text-md",
};

export default function NFTCard({
  nftImage,
  nftDesc,
  owner,
  ownerImg,
  rentBtn,
  price,
  width = 500,
  height,
  onClick,
}) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <Image src={nftImage} alt="NFT image" width={width} height={height}/>
      <div className={styles.contentContainer}>
        <div className={styles.contentBox}>
          <div className="flex justify-between">
            {ownerImg && (
              <Image
                src={ownerImg}
                alt="user image"
                width={"35px"}
                height={"35px"}
                layout="fixed"
              />
            )}
            <div>
              <p>{nftDesc}</p>
              <span className="text-[#3A63F1] text-sm">{owner}</span>
            </div>
          </div>
          {rentBtn && (
            <div className={`flex ${price ? 'justify-between' : 'justify-end'} py-2`}>
              { price &&
              <div className='flex items-center'>
                <Image 
                  src={ethImg} 
                  alt="ETH" 
                  width={"20px"} 
                  height={"30px"} 
                  layout="fixed" 
                />
                <span className="ml-2">{price}ETH</span>
              </div>
              }
              <button className={styles.rentButton}>RENT</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
