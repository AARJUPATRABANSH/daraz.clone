"use client";
import React, { useState } from "react";
import { ZodType, z } from "zod";
import { Form, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeClosedThin } from "react-icons/pi";
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Page() {
  return (
    <>
      <div className="flex items-center justify-between px-14 md:px-[230px] pt-10 bg-[#F5F5F5] ">
        <h1 className=" text-[22px]"> Welcome to Daraz! Please login.</h1>
        <p className="text-xs">
          New member?{" "}
          <a href="signup" className="text-[#1a9cb7]">
            Register{" "}
          </a>
          here
        </p>
      </div>
      <div className=" bg-slate-100 md:p-8 flexflex-col items-center ">
        <div className="flex justify-center items-center md:mb-8 mb-4 ">
          <div className=" border bg-white border-[#DDDDDD] shadow ">
            <form className=" md:grid grid md:gap-16 gap-6  grid-cols-[55%_45%] md:w-[810px] w-[500px]  pt-[25px] pr-[50px] pb-[45px] pl-[25px]">
              <div className="col-span-1">
                <div>
                  <label className="block mb-2 text-xs text-gray-900 ">
                    Phone Number or Email*
                  </label>
                  <input
                    type="text"
                    className="focus:text-black w-full text-sm border-[#DDDDDD] text-[#AEA9A9]"
                    placeholder="Please enter your email or phone number"
                  />
                </div>
                <div className="md:mb-5 mb-2">
                  <label className="block mb-2 text-xs text-gray-900 pt-8">
                    Password*{" "}
                  </label>

                  <input
                    type="password"
                    className="focus:text-black w-full text-sm border-[#DDDDDD] text-[#AEA9A9]"
                    placeholder="Please enter your password"
                  />
                </div>
              </div>
              <div className="pt-3 w-[85%] float-lef">
                <div>
                  <button
                    type="submit"
                    className=" h-12  text-white bg-[#f57224] hover:bg-[#D0611E] focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-sm text-sm text-center uppercase w-full "
                  >
                    login
                  </button>
                  <p className="text-xs py-2 text-[#757575]">or login with</p>
                </div>
                <div className="pb-3">
                  <button
                    type="submit"
                    className="h-10 text-white bg-[#3B5998] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm text-center uppercase w-full"
                  >
                    <span className="flex items-center justify-center gap-x-3">
                      <FaFacebookF className="text-white text-xl" />
                      <a href="https://www.facebook.com/?stype=lo&deoia=1&jlou=AfeRtIiv3Wc_M70ZldPn0HioSPJZqe-tdMR0sTX79A1G2HxbsM2W6cB8lgwe1NQlE0X1UtKcyaTIA3y6PytnUJ4YOoW9JYKZk_sm6s8jf5x6cA&smuh=14097&lh=Ac8lNjTrTRlSGORPLeQ">
                        Facebook
                      </a>
                    </span>
                  </button>
                </div>
                <div className="pb-5">
                  <button
                    type="submit"
                    className=" h-10  text-white bg-[#D34836] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-sm text-sm text-center uppercase w-full"
                  >
                    <span className="flex items-center justify-center gap-x-3">
                      <FaGooglePlusG className="text-white text-2xl h-7" />
                      <a href="https://www.facebook.com/?stype=lo&deoia=1&jlou=AfeRtIiv3Wc_M70ZldPn0HioSPJZqe-tdMR0sTX79A1G2HxbsM2W6cB8lgwe1NQlE0X1UtKcyaTIA3y6PytnUJ4YOoW9JYKZk_sm6s8jf5x6cA&smuh=14097&lh=Ac8lNjTrTRlSGORPLeQ">
                        Google
                      </a>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
