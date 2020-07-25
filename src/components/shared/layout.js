import React from "react";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between w-screen min-h-screen bg-blue-200">
      <Nav />
      <div className="p-4" style={{ display: `grid`, placeItems: `center` }}>{children}</div>
      <Footer />
    </div>
  );
}
