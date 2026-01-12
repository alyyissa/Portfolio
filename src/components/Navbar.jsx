import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='bg-background text-primary h-24 fixed top-0 w-full flex justify-between flex-row items-center
    px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16'>
      <img src={assets.logo} alt="" />
        <ul className='flex flex-row gap-12'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>My Work</li>
        </ul>
      <div>
        <button className='bg-primary py-3 px-8 rounded text-background font-semibold cursor-pointer'>Contact Me</button>
      </div>
    </div>
  )
}

export default Navbar
