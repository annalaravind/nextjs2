import Image from "next/image";
import React, { useState } from "react";
import { VscError } from "react-icons/vsc";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const onReloadHandler = () => {
    window.location.reload();
  };

  const onMenuOpenClick = () => {
    setMenu(!menu);
  };

  const onMenuCloseClick = () => {
    setMenu(false);
  };

  let array = ["T-Shirts", "Hoodies", "Mugs", "Stickers", "Mousepads", "Caps"];

  return (
    <>
      <div className="w-full bg-[#1d2633] h-[160px] lg:h-[70px]">
        <div className="flex justify-between px-[39px] items-center py-5 lg:py-1">
          <div className="lg:order-first h-[60px] ">
            <Image
              className="cursor-pointer h-[60px]"
              onClick={onReloadHandler}
              src="/Images/codeslogo.png"
              alt="coderswear"
              width={250}
              height={60}
            />
          </div>
          {menu ? (
            <>
              <div
                className="w-[32px] h-[30px] text-3xl md:hidden text-pink-500 cursor-pointer"
                onClick={onMenuCloseClick}
              >
                <VscError />
              </div>
            </>
          ) : (
            <div
              className="w-[32px] h-[30px] py-[3px] md:hidden"
              onClick={onMenuOpenClick}
            >
              <div className="w-[30px] h-[4px] mb-[5px] bg-pink-600"></div>
              <div className="w-[30px] h-[4px] mb-[5px] bg-pink-600"></div>
              <div className="w-[30px] h-[4px] mb-[5px] bg-pink-600"></div>
            </div>
          )}
          {menu && (
            <div className="w-full h-[315px] list-none absolute top-[160px] left-0 text-center md:hidden">
              {array.map((value, index) => {
                return (
                  <li
                    className="bg-gray-700 py-3 font-bold text-lg text-pink-500 cursor-pointer hover:underline hover:underline-offset-4 hover:bg-gray-800"
                    key={index}
                  >
                    {value}
                  </li>
                );
              })}
            </div>
          )}

          <div className="hidden md:block text-white list-none">
            <ul className="flex justify-between items-center space-x-6">
              {array.map((value, index) => {
                return (
                  <li
                    className="hover:underline hover:underline-offset-4 font-bold"
                    key={index}
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white hidden md:block">SHOP</div>
        </div>
        <div className="w-full h-[40px] flex justify-around items-center py-5 px-10 lg:hidden">
          <input
            className="w-full border-pink-500 outline-none py-1 mr-2 px-2 rounded-sm text-pink-800 font-bold"
            type="search"
            autoFocus
            placeholder="Search..."
          />
          <div className="w-[60px] py-[4px] rounded-sm bg-pink-600 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              class="nz sb axp text-white"
              width="25"
              height="25"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
