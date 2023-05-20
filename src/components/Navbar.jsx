import { Outfit } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightCircleLine } from 'react-icons/ri';

const outfit = Outfit({
       variable: '-font-outfit',
       subsets: ['latin'],
       weight: '400'
})

const Navbar = () => {
  return (
    <header className="w-screen bg-primary flex justify-between items-center shadow-md p-4">
           <div className={`container relative flex justify-center lg:justify-between items-center flex-wrap`}>
              <div className="w-full lg:w-fit brand flex items-center justify-center">
                  <Image src= {"/logo.jpg"} width={50} height={50} alt="logo" />
                  <h1 className="text-white uppercase mx-2 text-xl lg:text-2xl">study point institiute</h1>
              </div>
              <ul className={`${outfit.className} mx-4 hidden lg:flex`}>
                     <li className={`group h-full px-3 text-sm md:text-lg text-white cursor-pointer relative`}>
                            <span className={`w-0 group-hover:w-full h-[2px] bg-orange-600 duration-500 absolute top-0 left-0`}></span>
                            <Link href="/">
                                   Home
                            </Link>
                     </li>
                     <li className={`group h-full px-3 text-sm md:text-lg text-white cursor-pointer relative`}>
                            <span className={`w-0 group-hover:w-full h-[2px] bg-orange-600 duration-500 absolute top-0 left-0`}></span>
                            <Link href="/">
                                   Courses
                            </Link>
                     </li>
                     
                     <li className={`group h-full px-3 text-sm md:text-lg text-white cursor-pointer relative`}>
                            <span className={`w-0 group-hover:w-full h-[2px] bg-orange-600 duration-500 absolute top-0 left-0`}></span>
                            <Link href="/">
                                   Our Teachers
                            </Link>
                     </li>
                     
                     <li className={`group h-full px-3 text-sm md:text-lg text-white cursor-pointer relative`}>
                            <span className={`w-0 group-hover:w-full h-[2px] bg-orange-600 duration-500 absolute top-0 left-0`}></span>
                            <Link href="/">
                                   About Us
                            </Link>
                     </li>
                     <li className={`group h-full px-3 text-sm md:text-lg text-white cursor-pointer relative`}>
                            <span className={`w-0 group-hover:w-full h-[2px] bg-orange-600 duration-500 absolute top-0 left-0`}></span>
                            <Link href="/">
                                   Our Teachers
                            </Link>
                     </li>
                     <li className={`group h-full px-3 text-sm md:text-lg text-white cursor-pointer relative`}>
                            <span className={`w-0 group-hover:w-full h-[2px] bg-orange-600 duration-500 absolute top-0 left-0`}></span>
                            <Link href="/">
                                   Contact Us
                            </Link>
                     </li>
              </ul>
              <button className={`flex justify-center items-center lg:hidden mx-6 cursor-pointer`}>
                     <RiArrowRightCircleLine color="white" size={26} />
              </button>
           </div>
    </header>
  )
}

export default Navbar