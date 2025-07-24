import React from "react";
import Header from "@/components/layout/Header";
import Hero from "../components/layout/Hero";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Listings from "@/components/layout/Listings"




export default function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-4">
        <Nav />
        <div className="">
        <Hero />
        </div>
        <div className="sm:px-4 md:px-0 sm:items center">
        <Listings />
        </div>
      </main>
      {/*<BookingSection price={0}/>*/}
      <Footer />
    </div>
  );
}
