import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen min-w-screen  bg-primary">
      <div className="flex flex-col max-w-5xl mx-auto min-h-screen ">
        <Header />
        <div className="flex flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
