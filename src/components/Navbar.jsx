import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='bg-background text-primary h-24 fixed top-0 w-full flex justify-center md:justify-between flex-row items-center
    px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16'>
      <img src={assets.logo} alt="Logo" />
      <ul className='hidden md:flex flex-row gap-12'>
        {['Home', 'About', 'My Work'].map((item) => (
          <li
          key={item}
          className='relative cursor-pointer group font-semibold'
        >
          <span className="transition-[font-weight] duration-200">
            {item}
          </span>
          <span
          className='absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all
          duration-300 group-hover:w-full'
          >
          </span>
        </li>
        ))}
      </ul>
      <div className='md:block hidden'>
        <button className='bg-primary py-3 px-8 rounded text-background 
        font-semibold cursor-pointer
        transition duration-200 '
        >
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Navbar
