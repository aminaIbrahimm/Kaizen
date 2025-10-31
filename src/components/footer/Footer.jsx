import React, { useState } from 'react'
import { FaFacebookF, FaFacebookMessenger, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-router';
import { BsWhatsapp } from "react-icons/bs";


export default function Footer() {
    const today = new Date()
    const year = today.getFullYear()
    const [social , setSocial] = useState({
        facebook : "https://www.facebook.com/share/1BzSxx1p3T/?mibextid=wwXIfr",
        whatsapp : "https://api.whatsapp.com/send?phone=%2B201100320011&fbclid=IwVERDUANwXzJleHRuA2FlbQIxMAABHsHgTzGjzx_OA08inOXU9Rz2bL8y2CnEcqhR3M6mTo-1a0YQ0MNwzWAbSLHw_aem_DbzuDBVj1jfASwQi3Ah6Bw"
    })

  return (
    <>
      <footer class="bg-gray-100 rounded-lg shadow-xl bottom-0 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {year} Kaizen Education Inc.
          </span>
          <div className="flex gap-2">
            <Link to=''>
              <FaLinkedinIn className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-gray-500" />
            </Link>
            <Link to={social.facebook} target="_blank">
              <FaFacebookF className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-gray-500" />
            </Link>
            {/* <FaFacebookMessenger className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-gray-500" /> */}
            <Link
              to={social.whatsapp}
              target="_blank"
            >
              <BsWhatsapp className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-gray-500" />
            </Link>
            <Link to=''>
              <FaInstagram className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-gray-500" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
