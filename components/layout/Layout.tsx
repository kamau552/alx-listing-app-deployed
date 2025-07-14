import React from "react";
import "@/styles/globals.css";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Searchfilter from "./Searchfilter";
import Listings from "@/components/layout/Listings";



interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="sm:hidden">
        <Searchfilter />
      </div>
      <Hero />
       <div className="hidden sm:block">
        <Searchfilter />
      </div>
      <main className="flex-grow">{children}</main>
      <Listings />
      <Footer />
    </div>
  );
};

export default Layout;
