import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiPhone } from 'react-icons/hi'
import { TiLocation } from 'react-icons/ti'
import { SiWhatsapp } from 'react-icons/si'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-white bg-primary body-font">
       <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
       <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
       <a className="flex title-font font-bold flex-col md:flex-row items-center md:justify-start justify-center text-white">
              <Image src="/logo.jpg" className="m-2" width={60} height={60} alt="logo"/>
              <span className="ml-3 text-xl">Study Point Institure</span>
       </a>
       <p className="mt-4 text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi minus beatae officiis consequatur aliquid sequi reprehenderit suscipit alias architecto?</p>
       </div>
       <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Links</h2>
              <nav className="list-none mb-10">
              <li className="text-white mt-4 cursor-pointer">
              <Link href="/">Home</Link>
              </li>
              <li className="text-white mt-4 cursor-pointer">
              <Link href="/">Courses</Link>
              </li>
              <li className="text-white mt-4 cursor-pointer">
              <Link href="/">About Us</Link>
              </li>
              <li className="text-white mt-4 cursor-pointer">
              <Link href="/">Our Teachers</Link>
              </li>
              <li className="text-white mt-4 cursor-pointer">
              <Link href="/">Contact Us</Link>
              </li>
              </nav>
       </div>
       <div className=" md:w-1/2 w-full px-4">
             <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Details</h2>
              <nav className="list-none mb-10">
              <li className="text-white mt-4 cursor-pointer ">
                     <TiLocation color="red" size={25} />
                     <p className="mt-2 ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, similique.</p>
              </li>
              <li className="text-white mt-4 cursor-pointer">
                     <HiPhone color="lightgreen" size={20} />
                     <p className="mt-2 ml-2">+91 1234756789</p>
              </li>
              <li className="text-white mt-4 cursor-pointer">
                     <SiWhatsapp color="lightgreen" size={20} />
                     <p className="mt-2 ml-2">+91 1234756789</p>
              </li>
              </nav>
       </div>
     
       </div>
       </div>
       <div className="bg-primary">
       <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
       <p className="text-white text-sm text-center sm:text-left">© 2023 stidy-point -
              <a href="https://crackscode.netlify.app" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@crackscode</a>
       </p>
       <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center items-center sm:justify-start">
              <a className="cursor-pointer hover:scale-110 mx-2 group" href="https://instagram.com/@crackscode">
                     <AiFillInstagram className="group-hover:fill-[#d62976]" size={30} color="white" />
              </a>              
              <a className="cursor-pointer hover:scale-110 mx-2 group" href="https://youtube.com/@crackscode">
                     <AiFillYoutube className="group-hover:fill-red-500" size={30} color="white" />
              </a>              
              <a className="cursor-pointer hover:scale-110 mx-2 group" href="https://wa.me/+919755002981">
                     <SiWhatsapp className="group-hover:fill-green-500" size={25} color="white" />
              </a>           
              <a className="cursor-pointer hover:scale-110 mx-2 group" href="tel:+919755002981">
                     <FaPhone className="group-hover:fill-green-400" size={25} color="white" />
              </a> 
       </span>
       </div>
       </div>
       </footer>
  )
}

export default Footer