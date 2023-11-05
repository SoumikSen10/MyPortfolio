import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        Soumik Sen
      </a>
      <a
        href="mailto:mastersoumik2003@gmail.com"
        className=" text-sm md:text-md hover:text-indigo-500"
      >
        mastersoumik2003@gmail.com
      </a>
      <p className="text-xs  mt-2 text-gray-500">
        © Made By Soumik Sen {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
