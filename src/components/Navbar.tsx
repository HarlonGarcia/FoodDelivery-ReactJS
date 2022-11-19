import React from "react";
import { MdFastfood } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="flex items-center px-4 h-20 mb-8 bg-orange text-white font-inter">
      <MdFastfood className="w-5 h-5 mb-1 mr-2 text-orange-200" />
      <h1 className="text-lg">
        Bem vindo ao <span className="font-fredoka">Food Delivery</span>
      </h1>
    </header>
  );
};

export default Navbar;
