import React from "react";
import Logo from "../assets/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="mx-4">
      <nav className="w-full absolute inset-x-0 left-0 z-20">
        <div className="max-w-screen-xl mx-auto flex items-center py-5 px-4 justify-center">
          <div className="w-full">
            <img src={Logo} alt="cobalt logo" className="h-6" />
          </div>
          <div className="w-full flex justify-end items-center space-x-6 font-medium">
            <a
              href="https://joincobalt.com/blog"
              target="_blank"
              className="text-secondary text-sm hover:text-white">
              Blog
            </a>
            <Button content={"Join the waitlist"} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
