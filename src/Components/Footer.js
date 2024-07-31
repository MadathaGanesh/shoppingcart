import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-500 py-6 w-full mt-auto">
      <p className="flex flex-row justify-center">
        <FaRegCopyright className="mt-1 mr-3" />
        Designed by Madatha Ganesh
      </p>
    </footer>
  );
};

export default Footer;
