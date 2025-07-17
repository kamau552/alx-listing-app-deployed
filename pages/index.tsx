import "@/styles/globals.css";
import React from "react";
import Header from "@/components/layout/Header";
import Hero from "../components/layout/Hero";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Listings from "@/components/layout/Listings"
import Searchfilter from "@/components/layout/Searchfilter";



export default function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-4">
        <Nav />
        <Hero />

        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="main_page-container">
              <Searchfilter/>
              <div className="home_filter-container">
              </div>
          </div>
        </div>
        <Listings />
      </main>
      {/*<BookingSection price={0}/>*/}
      <Footer />
    </div>
  );
}
