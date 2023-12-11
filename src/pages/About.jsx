import React from "react";
import Footer from "../layout/Footer"
import AboutBanner from "../components/about/AboutBanners";
import AboutContents from "../components/about/AboutContents";


function About() {
  return (
    <div>
     
      <AboutBanner />
      <AboutContents />
      <Footer />
    </div>
  );
}

export default About;
