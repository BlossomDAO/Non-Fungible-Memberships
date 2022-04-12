import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen min-w-screen bg-primary">
      <div className="relative flex flex-col max-w-[90rem] mx-auto min-h-screen font-mono">
        <Header/>
        {children}
        <Footer/>
      </div>
    </div>
  );
}
