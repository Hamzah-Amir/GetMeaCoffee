import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='flex justify-center items-center p-4 bg-slate-950 text-white'>
        <p className='text-center'> Copyright &copy; {year} Fund your projects with coffee - All Rights Reserved</p>
    </footer>
  )
}

export default Footer