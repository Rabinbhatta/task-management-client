"use client";
import React from "react";
import Navbar from "../components/navbar/index";
import SideBar from "@/components/sidebar";
import { SessionProvider } from "next-auth/react";

const Home = () => {
  return (
    <div className="h-screen  ">
      <SessionProvider>
        <Navbar />
        <SideBar />
      </SessionProvider>
    </div>
  );
};

export default Home;
