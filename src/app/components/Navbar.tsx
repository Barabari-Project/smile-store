"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
const NavBarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
  },
  {
    id: 3,
    title: "Partners",
    path: "/partners",
  },
  {
    id: 4,
    title: "Careers",
    path: "/careers",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-0 z-30 sticky top-0 bg-primary border-b-2 navbarModification">
      <div className="container px-0 py-6 flex justify-between items-center bg-white">
        {/* Logo Section */}
        <Link href={"/"}>
          <div className="flex-shrink-0">
            <img src="/logo_resized.png" alt="Logo" className="h-16 w-auto" />
          </div>
        </Link>

        {/* Menu Section */}
        <div className="hidden lg:block flex-grow text-right bg-white ">
          <ul className="flex justify-end items-center gap-6">
            {NavBarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className=" text-black inline-block text-xl py-2 px-3 hover:text-secondaryRed relative group"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <Link href={"https://vyaparapp.in/store/smilestore1"}>
              <button className="get-in-touch hover:animate-pulseCustom">
                <span className="flex items-center space-x-2">
                  <div>Shop Now</div>
                  <div>
                    <HiArrowUpRight />
                  </div>
                </span>
              </button>
            </Link>
          </ul>
        </div>

        {/* Mobile Hamburger Menu Section */}
        <div
          className="lg:hidden cursor-pointer p-3 bg-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoMdMenu className="text-4xl text-primaryRed" />
          ) : (
            <IoMdMenu className="text-4xl text-primaryRed" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white lg:hidden">
          <div
            className="bg-primary p-8 lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoMdMenu className="text-4xl text-primaryRed" />
            ) : (
              <IoMdMenu className="text-4xl text-primaryRed" />
            )}
          </div>
          <div className="container py-8 bg-white">
            <ul className="flex flex-col items-center gap-6 bg-primary">
              {NavBarMenu.map((menu) => (
                <li key={menu.id} className="bg-primary">
                  <a
                    href={menu.path}
                    className="text-black inline-block text-xl py-2 px-3 hover:text-secondaryRed"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <Link href={"https://vyaparapp.in/store/smilestore1"}>
                <button className="get-in-touch hover:animate-pulseCustom">
                  <span className="flex items-center space-x-2">
                    <div>Shop Now</div>
                    <div>
                      <HiArrowUpRight />
                    </div>
                  </span>
                </button>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
