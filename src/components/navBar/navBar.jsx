// src/components/navBar/navBar.jsx

import React from "react";
import { Link } from "react-router-dom";

import Lbracket from "../../assets/Lbrackets.png";
import Rbracket from "../../assets/Rbrackets.png";
import './navBar.css'

const NavBar = () => {
  const navLinks = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  return ( 


      <div className='bg-[#F5F5FA] sticky top-0 z-50 w-full    '>

        {/* NavBar */}
        <div className="  ">
          <div className="flex bg-white h-20 mx-14 my-4 px-6 rounded-lg justify-between items-center shadow-md">

            {/* Logo */}
            <div className="flex items-center">
              <img src={Rbracket} alt="right bracket" className="w-10" />
              <img src={Lbracket} alt="left bracket" className="w-10" />
              <div className="text-xl ms-2">
                <span className="font-bold">Govind</span>.dev
              </div>
            </div>

            {/* ✅ Fixed: changed div+to → a+href */}
            <div className="flex gap-10 text-xl font-medium">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="relative cursor-pointer group hover:text-purple-800 no-underline text-inherit"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="/Govind_Resume.pdf"
              download
              className="bg-[#5B3DF5] text-white h-12 w-36 rounded-lg flex justify-center items-center hover:bg-violet-700 transition duration-300"
            >
              Download CV
            </a>
          </div>
          
        </div>
           </div>

  );
};

export default NavBar;