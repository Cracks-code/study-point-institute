import React from 'react';
import { TiLocation } from 'react-icons/ti'
import { HiPhone } from 'react-icons/hi'

const TopDetailBar = () => {
       return (
              <div className="px-4 py-3 w-screen bg-primary border-b-[1px] border-b-white">
                     <div className="container flex justify-center lg:justify-between flex-wrap flex-col lg:flex-row text-center  text-white">
                            <div className="flex items-center justify-center">
                                   <TiLocation color="white" size={30} />
                                   <p className="text-white font-medium lg:font-bold lg:text-base flex items-center"> SPI, near sanjay sweets, front of anand dairy, Karond, Bhopal, MP</p>
                            </div>
                            <div className="flex items-center justify-center">
                                   <HiPhone color="white" size={30} />
                                   <a href="tel:+919755002981"><span className="font-medium lg:font-bold lg:text-base mx-2">+91 1234567890</span></a> | 
                                   <a href="tel:+919755002981"><span className="font-medium lg:font-bold lg:text-base mx-2">+91 1234567890</span></a>
                            </div>
                     </div>
              </div>
       )
}

export default TopDetailBar