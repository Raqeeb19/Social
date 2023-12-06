import React from "react";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize  ";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize  ";
const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle !== undefined) closeToggle(false);
  };
  return (
    <div className="flex flex-col justify-between bg-white overflow-y-scroll h-full min-w-210 hide-scrollbar">
      <div className=" flex flex-col ">
        <Link
          to="/"
          className=" flex  px-5 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={(isActive) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            <RiHomeFill /> Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// const fs = require("fs");
// const path = "/path/to/your/directory"; // Change this to the path of your directory

// fs.readdir(path, (err, files) => {
//   if (err) {
//     console.error("Error reading directory:", err);
//     return;
//   }

//   // Filter files based on a specific criterion, e.g., @amazon.com email
//   const amazonFiles = files.filter((file) => file.includes("@amazon.com"));

//   console.log("Files with @amazon.com email:", amazonFiles);
// });
