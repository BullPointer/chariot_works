import { useState } from "react";
import Logo from "../../Images/logo.jpeg";
import BigNavbar from "./BigNavbar";
import List from "./List";
import SmallNavbar from "./SmallNavbar";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="z-10 fixed left-0 top-0 w-full bg-white p-1 flex flex-row justify-between items-center">
      <div className="flex flex-row justify-center items-center gap-2 cursor-pointer p-2">
        <img className="w-12 h-12" src={Logo} alt="" />
        <div className="font-bold text:xl sm:text-2xl lg:text-4xl text-[#21471c]">CHARIOT WORKS</div>
      </div>

      <BigNavbar />
      <SmallNavbar setShow={setShow} show={show} />
      <div
        style={{ transform: `translateX(${show ? "-0%" : "100%"})` }}
        className="absolute transition-transform duration-1000 top-0 left-0 bg-white w-full h-screen mt-[70px] flex flex-col gap-4 xl:hidden first:pt-20"
      >
        {show && <List />}
      </div>
    </div>
  );
};

export default Navbar;
