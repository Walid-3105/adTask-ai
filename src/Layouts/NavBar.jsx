import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#5C60691A] text-white py-2 mx-[132px] mt-8 rounded-2xl border border-[#FFFFFF1A] ">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">adTask.ai</div>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-400 cursor-pointer">Resources</li>
          <li className="relative text-white after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0">
            Pricing
          </li>
          <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
        </ul>
        <button className="bg-[#7687B54A] border border-[#7687B5] text-white px-4 py-2 rounded-full hover:bg-gray-700">
          Try Now for Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
