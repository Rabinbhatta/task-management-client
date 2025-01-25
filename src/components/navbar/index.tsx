"use client";
import React from "react";
import { Button } from "@heroui/button";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const handleSignOut = () => {
    try {
      signOut({ callbackUrl: "/login" });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-16 bg-gray-800 px-5 py-3">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-sans font-semibold tracking-widest">
          RBLIST
        </div>
        <Button
          className="bg-gray-500 text-white rounded-lg p-2"
          onPress={() => handleSignOut()}
        >
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
