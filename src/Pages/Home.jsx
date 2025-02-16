import React from "react";
import Navbar from "../Layouts/NavBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen pt-8">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
