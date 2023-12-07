import React from "react";
import Header from "../layout/header";
import AboutBanner from "../components/about/aboutBanner";
import AboutContents from "../components/about/aboutContents";
import Footer from "../layout/footer";

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
