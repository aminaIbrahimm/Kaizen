import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router'

export default function Layout() {
  return <>
    <Navbar/>
    <Sidebar/>
    <main className="p-4 sm:ml-70 mt-16 shadow-inner bg-gray-100 dark:bg-gray-800 dark:shadow-inner">
      <Outlet/>
    </main>
    
  </>
}
