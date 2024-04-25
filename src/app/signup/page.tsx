"use client";
import React, { useState } from "react";
import { ZodType, z } from "zod";
import { Form, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeClosedThin } from "react-icons/pi";

import { Label, Select } from "flowbite-react";

import { Datepicker } from "flowbite-react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

function Page() {
  const [visible, setvisible] = useState(true);
  const FormSchema = z
    .object({
      fullName: z.string().min(2).max(10),
      email: z.string().email(),
      password: z.string().min(5).max(15),
      confirmpassword: z.string().min(5).max(15),
    })
    .refine((data) => data.password === data.confirmpassword, {
      message: "Password do not match",
      path: ["confirmpassword"],
    });

  type User = z.infer<typeof FormSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(FormSchema),
    // mode: "onChange",
  });
  const submitData: SubmitHandler<User> = (data) => {
    console.log("Worked", data);
  };

  return (
    <>
      <div className=" bg-slate-100 md:p-8 gap-x-10">
        <div className="flex items-center justify-between px-3 md:px-[200px] pt-5 bg-slate-100 ">
          <h1 className=" text-xl font-"> Create your Daraz Account</h1>
          <p className="text-xs text-[#808381]">
            Already a member
            <a href="signup" className="text-[#1a9cb7]">
              Log in
            </a>
            here
          </p>
        </div>

        <div className="flex justify-center items-center pt-7">
          <div className=" border bg-white border-gray-200  ">
            <form
              className=" md:grid grid md:gap-12 gap-6 grid-cols-[50%_40%]  md:w-[810px] w-[600px] pt-[25px] pl-[50px] pb-[50px] pr-[25px]"
              onSubmit={handleSubmit(submitData)}
            >
              <div>
                <div className="md:mb-5 mb-2">
                  <label className="block mb-2 text-xs text-gray-800 ">
                    Email*{" "}
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="focus:text-black w-full rounded-md focus:border-red-600 text-xs border-[#DDDDDD] text-[#AEA9A9]"
                    placeholder="Enter email address"
                  />

                  {errors.email && (
                    <span className="text-red-600 font-light text-sm">
                      {errors.email.message}{" "}
                    </span>
                  )}
                  <br />
                  <div className="md:mb-5 mb-2 mt-6">
                    <label className="block mb-2 text-xs text-gray-800 ">
                      Verfication Code from whatsApp*
                    </label>
                    <input
                      type="text"
                      className="focus:text-black w-full rounded-md focus:border-red-600 text-sm border-[#DDDDDD] text-[#AEA9A9]"
                      placeholder="Verfication Code"
                    />

                    <br />
                  </div>
                  <div className="md:mb-5 mb-2">
                    <label className="block mb-2 text-xs text-gray-800 ">
                      Password*{" "}
                    </label>

                    <input
                      type="password"
                      {...register("password")}
                      className="focus:text-black w-full rounded-md focus:border-red-600 text-xs border-[#DDDDDD] text-[#AEA9A9]"
                      placeholder="Enter your password"
                    />
                    {/* <PiEyeLight />
                  <PiEyeClosedThin /> */}
                    <br />
                    {errors.password && (
                      <span className="text-red-600 font-light text-sm">
                        {errors.password.message}{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex  gap-x-7 mt-3">
                  <div>
                    <div className=" block  mb-2 text-xs text-gray-800">
                      Birthday
                    </div>
                    <Datepicker
                      minDate={new Date(2000, 0, 1)}
                      maxDate={new Date(2023, 3, 30)}
                    />
                  </div>
                  <div>
                    <div>
                      <Label
                        htmlFor="gender"
                        value="Gender"
                        className=" block  mb-2 text-xs text-gray-800"
                      />
                    </div>
                    <Select id="gender" required>
                      <option>Male</option>
                      <option>Female</option>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col  gap-3 w-full">
                  <div className="md:mb-5 mb-2 ">
                    <label className="block text-xs text-gray-800 mb-2 ">
                      Full Name*
                    </label>
                    <input
                      className="focus:text-black w-full rounded-md focus:border-red-600 text-xs border-[#DDDDDD] text-[#AEA9A9]"
                      placeholder="Please enter your full name"
                      type="text"
                      {...register("fullName")}
                    />

                    {errors.fullName && (
                      <span className="text-red-600 font-light text-sm">
                        {errors.fullName.message}{" "}
                      </span>
                    )}
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="gifts"
                      className="w-4 h-4 rounded-sm text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500"
                    />
                    <label
                      htmlFor="gifts"
                      className="pl-3 text-xs text-[#757575]"
                    >
                      {" "}
                      I'd like to recieve ecclusive offers and promotions via
                      sms{" "}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className=" h-12 text-white bg-[#F57224] hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-sm text-sm  sm:w-auto  px-5 py-1.5 text-center "
                  >
                    SIGN UP
                  </button>

                  <div className="pt-3  ">
                    <p className="text-xs py-2 text-[#757575]">or login with</p>

                    <div className=" gap-x-2 h-8  flex items-center justify-center pt-3 ">
                      <div className="pb-3 w-full">
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
                      <div className="pb-3 w-full">
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
                  </div>
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
