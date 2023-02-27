import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/images/logo.jpeg";
import Model from '../../components/Home/Banner/Model';


import NavLinks from "../Layouts/Navlink";
const MinCategory2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white overflow-x-auto scrollbar-hide  ">
      <div className=" hidden md:flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex flex-col justify-between">
          
          <div className=" md:hidden z-50 " onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="sm:flex hidden uppercase items-center gap-8 text-xs">
         
          <NavLinks />
        </ul>
      
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-[50%] top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          
        
          <NavLinks />
         
        </ul>
      </div>
    </nav>
  );
};

export default MinCategory2;
