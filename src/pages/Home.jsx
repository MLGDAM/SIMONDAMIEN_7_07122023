import React from "react";
import Footer from "../layout/Footer"
import HomeBanner from "../components/home/HomeBanner";
import HousesDisplay from "../components/home/HousesDisplay";


function Home() {
  return (
    <div>
 
      <HomeBanner />
      <HousesDisplay />
   <Footer />
    </div>
  );
}

export default Home;
