import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Title/useTitle";
import About from "../About/About";
import AllItems from "../Items/AllItems/AllItems";
import Items from "../Items/Items/Items";
import MyServices from "../MyServices/MyServices";
import Banner from "./Banner/Banner";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <AllItems></AllItems>
      <Link className="flex justify-center" to="/services">
        <button className="btn rounded-lg my-8 text-xl p-2">
          Explore More Places
        </button>
      </Link>

      <MyServices></MyServices>
      <About></About>
    </div>
  );
};

export default Home;
