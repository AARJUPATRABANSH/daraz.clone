"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex-col rounded-lg shadow  border-gray-200 shadow-md:flex md:items-center md:justify-between bg-[#F5F5F5]">
      <div className="   lg:p-14 p-3 md:gap-x-32 gap-x-10  md:flex  flex-wrap  mx-auto   md:items-center  ">
        <div>
          <div className="md:flex-col flex   pb-9 pr-16 lg:gap-x-52 gap-x-32 ">
            <div>
              <h2 className="text-[#F85606] font-medium ">Customer Care </h2>
              <ul>
                <li className="flex flex-wrap flex-col mt-3 text-sm font-medium text-gray-500  sm:mt-0 ">
                  <a
                    href="Customer Care"
                    className="hover:underline  hover:text-blue-800"
                  >
                    Help Center
                  </a>
                  <a
                    href="privacy"
                    className="hover:underline  hover:text-blue-800"
                  >
                    How to buy
                  </a>
                  <a
                    href="about-us"
                    className="hover:underline  hover:text-blue-800"
                  >
                    Return & Refund
                  </a>
                  <a
                    href="about-us"
                    className="hover:underline  hover:text-blue-800"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#F85606] font-medium pt-2 ">
                Earn with Daraz
              </h2>
              <ul>
                <li className=" gap--14 mt-3 text-sm font-medium text-gray-500 sm:mt-0 ">
                  <div className=" flex flex-col ">
                    <a
                      href="darazuni"
                      className="hover:text-blue-800 hover:underline "
                    >
                      Daraz University
                    </a>
                    <a
                      href="sell"
                      className="hover:text-blue-800 hover:underline "
                    >
                      Sell on Daraz
                    </a>
                    <a
                      href="sell"
                      className="hover:text-blue-800hover:underline "
                    >
                      Code of Conduct
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex lg:gap-52 gap-16 ">
          <div>
            <h2 className="text-[#F85606] font-medium"> Daraz</h2>
            <ul>
              <li className="text-sm  font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
                <div className=" flex flex-col mt-1">
                  <a
                    href="darazuni"
                    className="hover:underline hover:text-blue-800"
                  >
                    About Daraz
                  </a>
                  <a
                    href="sell"
                    className="hover:underline hover:text-blue-800"
                  >
                    Careers
                  </a>
                  <a
                    href="sell"
                    className="hover:underline hover:text-blue-800"
                  >
                    Daraz Blog
                  </a>
                  <a
                    href="sell"
                    className="hover:underline hover:text-blue-800"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="sell"
                    className="hover:underline hover:text-blue-800"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="sell"
                    className="hover:underline hover:text-blue-800"
                  >
                    Digital Payments
                  </a>
                  <a
                    href="sell"
                    className="hover:underline hover:text-blue-800"
                  >
                    Daraz Customer University
                  </a>
                  <a
                    href="sell"
                    className="hover:underline hover:text-blue-800"
                  >
                    Daraz Affiliated Program
                  </a>
                  <a
                    href="sell"
                    className="hover:underline hover:text-blue-800"
                  >
                    Review & win
                  </a>
                  <a
                    href="sell"
                    className="hover:underline hover:text-blue-800"
                  >
                    Meet the winners
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#F85606] font-medium ">Daraz International</h2>

            <div className="cursor-pointer mt-1">
              <div className="md:flex-row flex    gap-x-2 items-center">
                <img
                  src="https://otb.cachefly.net/wp-content/uploads/2011/09/Flag_of_Pakistan_bordered.svg_.png"
                  alt="flag"
                  className="h-4 aspect-square w-5"
                />
                <p className="hover:underline ">Pakistan</p>
              </div>
              <div className="md:flex flex gap-x-2 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png"
                  alt="flag"
                  className="h-4 aspect-square w-5"
                />
                <p className="hover:underline ">Bangladesh</p>
              </div>
              <div className="md:flex flex gap-x-2 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1200px-Flag_of_Sri_Lanka.svg.png"
                  alt="flag"
                  className="h-4 aspect-square w-5 "
                />
                <p className="hover:underline ">Srilanka</p>
              </div>
              <div className="md:flex flex gap-x-2 items-center">
                <img
                  src="data:image/png;base64,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"
                  alt="flag"
                  className="h-4 aspect-square w-5 "
                />
                <p className="hover:underline ">Myanmar</p>
              </div>
              <div className="md:flex flex gap-x-2 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png"
                  alt="flag"
                  className="h-4 aspect-square w-5"
                />
                <p className="hover:underline ">Nepal</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[#F85606] font-medium "> Follow Us </h2>
            <div>
              <div className=" flex mt-1">
                <a href="https://www.facebook.com/" target="blank">
                  <img
                    src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png"
                    className="h-7 "
                  ></img>
                </a>
                <a href="https://www.instagram.com/" target="blank">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                    className="h-7 "
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
