import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full  bg-neutral-900  text-white mt-8">
      <div className="main max-w-[1300px] mx-auto  text-center lg:flex justify-between items-center pt-7">
        <div>
          <h1 className="text-3xl font-semibold">MoveWell Parkinson</h1>
          <p className="mt-2">Helping you stay active and independent</p>
        </div>
        <div className=" mt-4 flex justify-center gap-3  mr-6   text-2xl lg:text-3xl  ">
          <a href="">
            <AiFillInstagram />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaYoutube />
          </a>
        </div>

      </div>
      <div className=" max-w-[1300px] mt-8 pt-2 text-center border-t border-gray-500 mx-auto">
        <h1>©MoveWell Parkinson. All rights reserved.</h1>
        <p>
          This website is for informational purposes only and not a substitute
          for professional medical advice.
        </p>
      </div>
    </div>
  );
}

export default Footer;
