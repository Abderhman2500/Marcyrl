import React from 'react'
import { motion } from "motion/react"
import './header.css'
import { Link } from 'react-router-dom'
import Logo from '../../img/Logo.png'
export default function TopHeader() {
    const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Manufacturing', href: '#Manufacturing' },
    { name: 'News', href: '#News' },
    { name: 'Careers', href: '#Careers' },


  ];
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className='top_header w-full h-137px bg-white border-b border-gray-100 '>
        <div className="container mx-auto h-full  flex items-center justify-between  ">
          <img src={Logo} alt=""className='h-88px w-225px object-contain'  />

           <nav className="flex items-center space-x-8 text-base font-medium text-gray-700">
          {navLinks.map((item) => (
            <a className="hover:text-[#28276C] transition-colors duration-200"href={item.href}>{item.name}</a>    
          ))}
        </nav>
        <button className='btn-header'>Contact Us</button>


        </div>     
    </div>
    </motion.header>

  )
}
