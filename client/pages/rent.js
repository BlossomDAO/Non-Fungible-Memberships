import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import NFTCard from "../components/nftCard";
import doodle from "@images/doodle.png";
import userIcon from "@images/userIcon.png";

export default function Rent() {
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

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center ">
        <NFTCard {...nftInfo} />
        <h1 className="text-7xl text-white my-8">Rent your NFT</h1>
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
          <button
            className=" bg-gradient-to-r from-grd-ltBlue to-grd-blue text-gray-800 font-mono text-2xl px-4 py-2 mt-8  rounded-full"
            type="submit"
          >
            Rent your NFT
          </button>
        </form>
      </div>
    </Layout>
  );
}
