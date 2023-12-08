import React from "react";
import Header from "../layout/Header";
import AboutBanner from "../components/about/AboutBanner";
import AboutContents from "../components/about/AboutContents";
import Footer from "../layout/Footer";

function About() {
  return (
    <div>
      <Header />
      <AboutBanner />
      <AboutContents />
      <Footer />
    </div>
  );
}

export default About;
