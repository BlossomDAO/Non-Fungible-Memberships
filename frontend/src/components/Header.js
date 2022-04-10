import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Header() {
  const handleWalletConnect = () => {
    // Do wallet stuff here
    console.log("Clicked");
  };
  return (
    <div className="flex flex-row justify-between items-center m-4">
      <Link to="/">
        <img className="h-16" src={Logo} alt="" />
      </Link>
      <div>
        <Link className="ml-8 text-white text-xl" to="/how-it-works">
          How It Works
        </Link>
        <Link className="ml-8 text-white text-xl" to="/explore">
          Explore
        </Link>
        <Link className="ml-8 text-white text-xl" to="/borrow">
          Borrow
        </Link>
        <button
          onClick={handleWalletConnect}
          className="bg-violet-900 text-xl text-white rounded-full py-2 px-4 ml-8"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
