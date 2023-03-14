import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around items-center h-16 bg-white text-black relative shadow-sm font-mono">
        <h2 className="hover:scale-105 cursor-pointer">Same Arrival</h2>
        <h2 className="hover:scale-105 cursor-pointer">Different arrival</h2>
      </nav>
    </div>
  );
};

export default Navbar;
