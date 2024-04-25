import React, { useState } from "react";

import { SiTailwindcss } from "react-icons/si";
import { Button } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import type { CustomFlowbiteTheme } from "flowbite-react";

// const customTheme: CustomFlowbiteTheme["button"] = {
//   color: {
//     primary:
//       "bg-orange-200 h-7 w-12 -top-8 sm:top-1 -end-44 sm:end-14 focus:ring-1 focus:ring-blue-200",
//   },
// };

const Searchbox = () => {
  const [search, setsearch] = useState("");
  console.log(search);
  return (
    <div className=" md:m-0 m-3">
      <form className="md:flex  md:px-5 ">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        {/* <div className=" md:flex">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 md:w-[650px] w-[230px]  border-gray-300 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500   "
            placeholder="search in daraz"
            onChange={(e) => setsearch(e.target.value)}
            required
          />

          <Button theme={customTheme} color="primary">
            <IoIosSearch className="text-orange-500 text-2xl top-10" />
          </Button>
        </div> */}
        <div className="md:flex">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 md:w-[650px] w-[230px]  border-gray-300 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500"
            placeholder="search in daraz"
            onChange={(e) => setsearch(e.target.value)}
            required
          />

          <Button>
            <IoIosSearch className="text-orange-500 text-2xl bg-orange-500 " />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
