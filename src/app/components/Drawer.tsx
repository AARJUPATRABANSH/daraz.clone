import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Searchbox from "./Searchbox";
import Loginsignup from "./Loginsignup";
import Language from "./Language";
import { MdCancel } from "react-icons/md";

const Page = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const headerConstant = [
    {
      id: 1,
      name: "Become a seller",
    },

    {
      id: 2,
      name: "Payment & Recharge",
    },
    {
      id: 3,
      name: "Help & Support",
    },

    {
      id: 4,
      name: "Daraz Logistics Partner",
    },
  ];

  return (
    <>
      <div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className=""
        >
          <MdCancel onClick={toggleDrawer} className="float-right " />

          <Searchbox />

          <div className="flex flex-col bg-orange-100 md:flex-row md:px-0 px-5">
            <div className="flex flex-col  md:flex-row  gap-y-1 text-xs   pb-10 md:pb-0 md-pt-0 pt-5">
              {headerConstant.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="hover:text-orange-600 cursor-pointer text-black"
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
            <div>
              <Loginsignup />
            </div>
            <div>
              <Language />
            </div>
          </div>
        </Drawer>
      </div>
      <div
        className="flex float-right mr-5 md:hidden text-2xl cursor-pointer"
        onClick={toggleDrawer}
      >
        <GiHamburgerMenu />
      </div>
    </>
  );
};

export default Page;
