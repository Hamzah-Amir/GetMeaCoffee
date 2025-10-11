"use client";
import React from 'react'
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [showdropdown, setshowdropdown] = useState(false)

  return (
    <nav className='flex gap-4 justify-between  items-center p-4 bg-slate-950 md:h-16 flex-col md:flex-row text-white'>
      <Link href="/">
        <div className=" logo gap-2 font-bold text-2xl flex items-center justify-center mx-2">
          <img src="coffee.gif" className='invert-100' width={50} alt="" />
          <span className='mt-3'>Get Me a Coffee</span>
        </div>
      </Link>

      <div className='flex items-center justify-center gap-2 mx-6 md:mx-0 relative mr-4'>
        {session && <> <button id="dropdownDefaultButton" onBlur={()=> setTimeout(() => {
          setshowdropdown(false)
        }, 500)} onClick={() => setshowdropdown(!showdropdown)} data-dropdown-toggle="dropdown" className="text-white cursor-pointer mb-[8px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><p className='text-[8px] md:text-base'>Welcome {session.user.email} </p><svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>

          <div id="dropdown" className={`${showdropdown ? "" : "hidden"} z-10 mt-[27vh] mr-[8vw] opacity-90 absolute left-[64px] bg-gray-300 divide-y divide-gray-100 rounded-lg shadow-sm w-60 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.username}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link href="#" onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>

        </>}

        {!session && <Link href="/login">
          <button className='cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2'>
            Login
          </button>
        </Link>}
        {session && <Link href="/login">
          <button onClick={()=> signOut({callbackUrl:'/login'})} className='cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2'>
           <p className='text-[8px] md:text-base'> Log Out</p>
          </button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar