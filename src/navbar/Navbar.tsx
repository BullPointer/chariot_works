import { useState } from "react";
import Logo from "../assets/Logo.svg";
import BigNavbar from "./BigNavbar";
import List from "./List";
import SmallNavbar from "./SmallNavbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="z-10 fixed left-0 top-0 w-full bg-white flex flex-row justify-between items-center p-2">
      <NavLink
        to={"/"}
        className="ml-2 flex flex-row justify-center items-center gap-2 cursor-pointer"
      >
        <img className="" src={Logo} alt="" width={80} height={80} />
      </NavLink>

      <BigNavbar />
      <SmallNavbar setShow={setShow} show={show} />
      <div
        style={{ transform: `translateX(${show ? "-0%" : "100%"})` }}
        className="absolute transition-transform duration-1000 top-0 left-0 bg-white w-full h-screen mt-[70px] flex flex-col gap-4 xl:hidden first:pt-20"
      >
        {show && <List setShow={setShow} />}
      </div>
    </div>
  );
};

export default Navbar;
