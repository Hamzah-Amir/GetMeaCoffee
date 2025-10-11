"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"
import { getUser, updateProfile } from '@/actions/useractions';

const Dashboard = () => {
  const router = useRouter();
  const [form, setform] = useState({})
  const { data: session, update, status } = useSession();
  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
    else if (session?.user) {
      getData(session.user.id)
    }
  }, [router, session])

  const getData = async (id) => {
    let u = await getUser(id)
    setform(u)
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async () => {
    update()
    let a = await updateProfile(form)
  }

  if (status === "loading" || form.name === "" || form.email === "" || form.username === "" || form.profilepic === "" || form.coverpic === "") {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className='container mx-auto py-5 px-6'>
        <h1 className='text-center font-bold text-3xl mb-10'>Welcome to your Dashboard</h1>
        <form className='mx-auto max-w-2xl' onSubmit={handleSubmit}>
          {/* Input for name */}
          <div className="my-2">
            <label htmlFor="name" className='block mb-2 text-sm font-medium text-white dark:text-white'>Name</label>
            <input type="text" placeholder='Enter Name' name='name' value={form.name ? form.name : ""} onChange={handleChange} id='name' className='px-4 w-full py-2 rounded-lg bg-slate-800 text-white' />
          </div>
          {/* Input for email */}
          <div className="my-2">
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-white dark:text-white'>Email</label>
            <input type="email" placeholder='Enter email' name='email' value={form.email ? form.email : ""} onChange={handleChange} id='email' className='px-4 w-full py-2 rounded-lg bg-slate-800 text-white' />
          </div>
          {/* Input for username */}
          <div className="my-2">
            <label htmlFor="username" className='block mb-2 text-sm font-medium text-white dark:text-white'>Username</label>
            <input type="text" placeholder='Enter Username' name='username' value={form.username ? form.username : ""} onChange={handleChange} id='username' className='px-4 w-full py-2 rounded-lg bg-slate-800 text-white' />
          </div>
          {/* Input for Profile Picture */}
          <div className="my-2">
            <label htmlFor="profilepic" className='block mb-2 text-sm font-medium text-white dark:text-white'>Profile Picture</label>
            <input type="text" placeholder='Enter Profile' name='profilepic' value={form.profilepic ? form.profilepic : ""} onChange={handleChange} id='profilepic' className='px-4 w-full py-2 rounded-lg bg-slate-800 text-white' />
          </div>
          {/* Input for Cover Picture */}
          <div className="my-2">
            <label htmlFor="coverpic" className='block mb-2 text-sm font-medium text-white dark:text-white'>Cover Picture</label>
            <input type="text" placeholder='Enter Cover' name='coverpic' value={form.coverpic ? form.coverpic : ""} onChange={handleChange} id='coverpic' className='px-4 w-full py-2 rounded-lg bg-slate-800 text-white' />
          </div>
          <div className='mt-5'>
            <button type='submit' className='cursor-pointer w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-xl text-sm px-10 py-3 text-center me-2 mb-2'>
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Dashboard