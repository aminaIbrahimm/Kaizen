import React, { useState } from 'react'
import { SlHome } from "react-icons/sl";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaAngleUp, FaChevronDown, FaUsers } from "react-icons/fa6";
import { MdOutlineCardTravel, MdOutlineWbIncandescent } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { GrCatalogOption } from "react-icons/gr";
import { LuFilePenLine } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { HiMiniBolt } from "react-icons/hi2";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { NavLink } from 'react-router';

export default function Sidebar() {
    const [openCareer , setOpenCareer] = useState(false)
    const [openResource , setOpenResource] = useState(false)
    const [openTools , setOpentools] = useState(false)
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-2 left-0 z-40 w-70 h-screen pt-16 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({isActive}) => `flex font-bold text-[15px] items-center p-2 rounded-lg  hover:text-[#a9af89] group ${isActive ? 'text-[#a9af89] dark:text-[#a9af89]' : 'text-blue-950 dark:text-gray-100'}`}
                
              >
                <SlHome className="text-lg" />
                <span className="ms-3">My Dashboard</span>
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setOpenCareer(!openCareer)}
                className="flex font-bold text-[15px] items-center w-full p-2 text-base text-blue-950 transition duration-75 rounded-lg group hover:text-[#adb4bf] dark:text-gray-100 cursor-pointer"
              >
                <HiOutlineSquares2X2 className="text-lg" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  My Learning Journey
                </span>
                {openCareer ? (
                  <FaAngleUp className="text-[#adb4bf]" />
                ) : (
                  <FaChevronDown className="text-[#adb4bf]" />
                )}
              </button>
              {openCareer && (
                <ul id="dropdown-career" className="py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                    >
                      In-Progress Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                    >
                      Saved Content & Notes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                    >
                      Transcripts & Certificates
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="flex font-bold text-[15px] items-center p-2 text-blue-950 rounded-lg dark:text-gray-100 hover:text-[#adb4bf] group"
              >
                <MdOutlineCardTravel className="text-lg" />
                <span className="flex-1 ms-3 witespace-nowrap">
                  Careers & Roles
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex font-bold text-[15px] items-center p-2 text-blue-950 rounded-lg dark:text-gray-100 hover:text-[#adb4bf] group"
              >
                <PiCertificateLight className="text-lg" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Get Certified
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex font-bold text-[15px] items-center p-2 text-blue-950 rounded-lg dark:text-gray-100 hover:text-[#adb4bf] group"
              >
                <GrCatalogOption className="text-lg" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Course Catalog
                </span>
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setOpenResource(!openResource)}
                className="flex font-bold text-[15px] items-center w-full p-2 text-base text-blue-950 transition duration-75 rounded-lg group hover:text-[#adb4bf] dark:text-gray-100 cursor-pointer"
              >
                <LuFilePenLine className="text-lg" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Resource Center
                </span>
                {openResource ? (
                  <FaAngleUp className="text-[#adb4bf]" />
                ) : (
                  <FaChevronDown className="text-[#adb4bf]" />
                )}
              </button>
              {openResource && (
                <ul id="dropdown-resource" className="py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                    >
                      Articles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                    >
                      Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                    >
                      Skills Assessments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700 gap-2"
                    >
                      Case Study Challenges
                      <CiLock />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                    >
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                    >
                      Webinars
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="flex font-bold text-[15px] items-center p-2 text-blue-950 rounded-lg dark:text-gray-100 hover:text-[#adb4bf] group"
              >
                <FaUsers className="text-lg" />
                <span className="flex-1 ms-3 whitespace-nowrap inline-flex items-center gap-2">
                  Communit
                  <CiLock />
                </span>
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setOpentools(!openTools)}
                className="flex items-center w-full p-2 font-bold text-[15px] text-blue-950 transition duration-75 rounded-lg group hover:text-[#adb4bf] dark:text-gray-100 cursor-pointer"
              >
                <TbTriangleSquareCircle className="text-lg" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Full-Immersion Tools
                </span>
                {openTools ? (
                  <FaAngleUp className="text-[#adb4bf]" />
                ) : (
                  <FaChevronDown className="text-[#adb4bf]" />
                )}
              </button>
              {openTools && (
                <ul id="dropdown-example" className="py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700 gap-2"
                    >
                      Ask an Expert
                      <CiLock />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700 gap-2"
                    >
                      Partnership Deals <CiLock />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700 gap-2"
                    >
                      Financial Modal Feedback
                      <CiLock />
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <p className="bg-[#c09a53] rounded py-3 px-2 text-white text-center my-10 mx-2 flex justify-center items-center gap-3 cursor-pointer">
              <HiMiniBolt className="text-2xl" />
              Get Full Access
            </p>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-blue-950 rounded-lg dark:text-gray-100 hover:text-[#adb4bf] group"
              >
                <IoHelpCircleOutline className="text-lg" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Help Center
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-blue-950 rounded-lg dark:text-gray-100 hover:text-[#adb4bf] group">
              
                <MdOutlineWbIncandescent className="text-lg" />
                <span className="flex-1 ms-3 whitepace-nowrap">
                  What's New
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
