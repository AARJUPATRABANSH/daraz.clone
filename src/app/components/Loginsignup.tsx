import Link from "next/link";
import React, { useState, useMemo } from "react";
import { BsPerson } from "react-icons/bs";
const Loginsignup = () => {
  return (
    <div>
      <div className="  flex text-sm items-center ">
        <div>
          <button className=" md:text-white text-black font-bold py-2 px-4  rounded hover:shadow-lg hover:bg-[#DF4D05]">
            <a href="/Login" className="flex gap-1 items-center">
              <BsPerson className="text-2xl" />
              Login
            </a>
          </button>
        </div>
        <div className="sm:items-center text-white">|</div>
        <div>
          <button className="flex items-center   md:text-white text-black font-bold py-2 px-4   rounded hover:shadow-lg box-border hover:bg-[#DF4D05]">
            <a href="/signup"> Sign Up</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
