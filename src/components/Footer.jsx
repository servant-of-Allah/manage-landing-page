import React from "react";
import { socialMedia } from "../constants/data";
import { logoWhite } from "../constants";

const Footer = () => {
  return (
    <footer
      className={`flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between py-12 gap-10 `}
    >
      <div className="flex flex-col-reverse items-center gap-8 md:flex-col md:items-start md:gap-20">
        <img src={logoWhite} className="logo" alt="brand logo" />
        <div className="flex gap-6 md:gap-3 items-center">
          {socialMedia.map((social) => (
            <div key={social.id}>
              <a href={social.link}>{social.icon}</a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-20 md:gap-24 items-start">
        <ul className="list-none flex flex-col gap-3 items-start justify-start">
          <li className="text-primary hover:text-brightRed font-semibold text-[15px]">
            <a href="#home">Home</a>
          </li>
          <li className="text-primary hover:text-brightRed font-semibold text-[15px]">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="text-primary hover:text-brightRed font-semibold text-[15px]">
            <a href="#product">Products</a>
          </li>
          <li className="text-primary hover:text-brightRed font-semibold text-[15px]">
            <a href="#about">About Us</a>
          </li>
        </ul>
        <ul className="list-none flex flex-col gap-3 items-start justify-start">
          <li className="text-primary hover:text-brightRed font-semibold text-[15px]">
            <a href="#career">Careers</a>
          </li>
          <li className="text-primary hover:text-brightRed font-semibold text-[15px]">
            <a href="#community">Community</a>
          </li>
          <li className="text-primary hover:text-brightRed font-semibold text-[15px]">
            <a href="#privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div className="flex-col">
        <form className="h-max w-[100%] ss:w-[390px] sm:w-[400px] flex gap-2 items-start">
          <input
            type="email"
            placeholder="Updates in your inbox..."
            className="bg-white text-brightRed w-full text-[16px] py-3 px-6 rounded-full placeholder:text-primary placeholder:text-[14px] outline-none border-0"
          />
          <button
            type="submit"
            className="text-white font-semibold bg-primary hover:bg-red-400 py-3 px-6 rounded-full"
          >
            Go
          </button>
        </form>
        <p className="hidden md:block text-primary mt-[50px] ml-[25%]">
          Copyright 2020. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
