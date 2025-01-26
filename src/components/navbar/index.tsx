"use client";
import React from "react";
import { Button } from "@heroui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { data: sessionData } = useSession();

  console.log(sessionData);
  const handleSignOut = () => {
    try {
      signOut({ callbackUrl: "/login" });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-20 bg-gray-800 px-5 py-3  sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-sans font-semibold tracking-widest">
          RBLIST
        </div>
        <div className="flex items-center justify-center space-x-7">
          <div className="flex gap-3 items-center">
            <FaUserAlt size={30} color="white" />
            <div>
              <div className="text-white text-3xl font-sans items-center gap-2 ">
                {sessionData?.user?.name}
              </div>
              <div className="text-white text-[0.7rem] font-sans">
                {sessionData?.user?.email}
              </div>
            </div>
          </div>

          <Button
            className="bg-gray-500 text-white rounded-lg p-2"
            onPress={() => handleSignOut()}
          >
            Sign out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
