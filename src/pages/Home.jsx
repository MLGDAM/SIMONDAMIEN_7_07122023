import React from "react";
import Header from "../layout/header";
import HomeBanner from "../components/home/homeBanner";
import HousesDisplay from "../components/home/housesDisplay";
import Footer from "../layout/footer";

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
