import React from "react";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import Order from "../Components/Order";
import Featured from "../Components/Featured";
import AboutBanner from "../Components/AboutBanner";
import SubAbout from "../Components/SubAbout";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Banner />
      <Order />
      <Featured />
      <AboutBanner link />
      <SubAbout />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
