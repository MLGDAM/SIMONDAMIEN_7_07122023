import React from "react";
import Header from "../layout/Header";
import HomeBanner from "../components/home/HomeBanner";
import HousesDisplay from "../components/home/HousesDisplay";
import Footer from "../layout/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <HousesDisplay />
      <Footer />
    </div>
  );
}

export default Home;
