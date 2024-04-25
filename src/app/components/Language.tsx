import { MdLanguage } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Checkbox, Label, Radio } from "flowbite-react";
import React from "react";

const languages = [
  {
    id: 1,
    name: "EN/English",
  },
  {
    id: 2,
    name: "NE/Nepali",
  },
];
const Language = () => {
  return (
    <>
      <div className="mx-auto flex h-screen md:items-center md:justify-center  md:py-20">
        <div className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between space-x-5">
            <div className=" flex items-center gap-x-1  text-base md:text-white  hover:bg-orange-600">
              <MdLanguage className="text-2xl m-1" />
              EN
              <RiArrowDropDownLine />
            </div>
          </div>

          <div className="invisible absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
            <a className="my-2 block border-b border-gray-100   text-black md:mx-2">
              {languages.map((items) => {
                return (
                  <div
                    key={items.id}
                    className="hover:text-red-700 flex items-center cursor-pointer  gap-3 pb-2 text-xs"
                  >
                    <Radio id="language" name="lang" />
                    {items.name}
                  </div>
                );
              })}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Language;
