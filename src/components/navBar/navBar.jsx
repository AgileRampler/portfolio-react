// src/components/navBar/navBar.jsx

import React, { useState, useEffect } from "react";
import Lbracket from "../../assets/Lbrackets.png";
import Rbracket from "../../assets/Rbrackets.png";
import "./navBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home",     path: "/#home"     },
    { name: "About",    path: "/#about"    },
    { name: "Skills",   path: "/#skills"   },
    { name: "Projects", path: "/#projects" },
    { name: "Contact",  path: "/#contact"  },
  ];

  // subtle shadow boost after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="bg-[#F5F5FA] sticky top-0 z-50 w-full">

      {/* ── desktop / tablet bar ── */}
      <div
        className={`flex bg-white h-16 sm:h-20 mx-3 sm:mx-8 lg:mx-14 my-3 sm:my-4 px-4 sm:px-6
                    rounded-lg justify-between items-center transition-shadow duration-300
                    ${scrolled ? "shadow-lg" : "shadow-md"}`}
      >
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <img src={Rbracket} alt="right bracket" className="w-7 sm:w-10" />
          <img src={Lbracket} alt="left bracket"  className="w-7 sm:w-10" />
          <div className="text-base sm:text-xl ms-2">
            <span className="font-bold">Govind</span>.dev
          </div>
        </div>

        {/* Desktop nav links — hidden on mobile */}
        <nav className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-xl font-medium">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="relative cursor-pointer group hover:text-purple-800
                         no-underline text-inherit transition-colors duration-200"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-800
                               transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Download CV — hidden on mobile */}
        <a
          href="/Govind_Resume.pdf"
          download
          className="hidden md:flex bg-violet-700 text-white h-10 lg:h-12 px-4 lg:w-36
                     rounded-lg justify-center items-center hover:bg-[#5B3DF5]
                     transition duration-300 text-sm lg:text-base whitespace-nowrap"
        >
          Download CV
        </a>

        {/* Hamburger — visible on mobile only */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10
                     rounded-lg hover:bg-gray-100 transition-colors duration-200 gap-1.5"
        >
          {/* three animated bars */}
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300
                        ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300
                        ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300
                        ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* ── mobile dropdown menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white mx-3 sm:mx-8 rounded-b-xl shadow-lg border-t border-gray-100 px-6 py-4 flex flex-col gap-1">

          {navLinks.map((item, i) => (
            <a
              key={item.name}
              href={item.path}
              onClick={handleLinkClick}
              style={{ animationDelay: `${i * 40}ms` }}
              className="text-gray-800 hover:text-purple-800 hover:bg-purple-50
                         font-medium text-base py-3 px-3 rounded-lg
                         transition-colors duration-200 no-underline border-b border-gray-50
                         last:border-0"
            >
              {item.name}
            </a>
          ))}

          {/* Download CV inside mobile menu */}
          <a
            href="/Govind_Resume.pdf"
            download
            onClick={handleLinkClick}
            className="mt-3 bg-violet-700 text-white rounded-lg py-3 text-center
                       font-medium hover:bg-[#5B3DF5] transition duration-300 text-sm"
          >
            Download CV
          </a>
        </div>
      </div>

    </div>
  );
};

export default NavBar;