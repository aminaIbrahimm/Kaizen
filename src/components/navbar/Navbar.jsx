import React, { useEffect, useState } from 'react'
import kaizenLogoLight from '../../assets/kaizenlogo.png'
import { FaAngleUp, FaChevronDown, FaRegUser} from "react-icons/fa6";
import { CiDark } from "react-icons/ci";
import kaizenLogoDark from '../../assets/logodark.png'
import { RiShutDownLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";

export default function Navbar() {
  const [openAccountMenu, setOpenAccountMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-1 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <a href="/" className="flex ms-2 md:me-12">
                <img
                  src={darkMode ? kaizenLogoDark : kaizenLogoLight}
                  className="h-14"
                  alt="kaizen logo"
                />
              </a>
              <span className="font-bold hidden md:block text-[#233143] text-xl dark:text-gray-100">
                Member Dashboard
              </span>
              <div className="relative hidden md:block w-96 ms-7">
                <input
                  type="search"
                  placeholder="What would you like to learn?"
                  className=" dark:text-gray-100 w-full p-2 pl-10 rounded-full bg-gray-100 dark:bg-[#233143] text-lg focus:outline-none "
                />
                <IoSearchSharp  className="absolute left-3 top-1/2 w-5 h-5 -translate-y-1/2 text-blue-900" />
              </div>
            </div>

            <div className="flex items-center">
              <button onClick={() => setDarkMode(!darkMode)}>
                <CiDark className="text-2xl cursor-pointer dark:text-white hover:text-[#adb4bf]" />
              </button>

              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenAccountMenu(!openAccountMenu)}
                    className="flex items-center md:text-xl md:font-semibold text-[#233143] dark:text-gray-100 cursor-pointer"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <p>My Account</p>
                    {openAccountMenu ? (
                      <FaAngleUp className="md:ms-2 text-sm" />
                    ) : (
                      <FaChevronDown className="md:ms-2 text-sm" />
                    )}
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600 w-40"
                  id="dropdown-user"
                >
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <FaRegUser />
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <RiShutDownLine />
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
