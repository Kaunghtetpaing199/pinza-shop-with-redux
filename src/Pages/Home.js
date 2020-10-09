import React from "react";
import Banner from "../Components/Banner";
import Featured from "../Components/Featured";
import AboutBanner from "../Components/AboutBanner";
import SubAbout from "../Components/SubAbout";
const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Featured />
      <AboutBanner link />
      <SubAbout />
    </React.Fragment>
  );
};

export default Home;
