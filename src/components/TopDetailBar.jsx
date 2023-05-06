import React from 'react';
import { TiLocation } from 'react-icons/ti'
import { HiPhone } from 'react-icons/hi'

const TopDetailBar = () => {
       return (
              <div className="px-4 py-3 w-screen bg-primary">
                     <div className="container flex justify-center lg:justify-between flex-wrap flex-col lg:flex-row text-center  text-white">
                            <p className="text-white font-bold flex items-center"><TiLocation className="ml-2" color="white" size={30} /> SPI, near sanjay sweets, front of anand dairy, Karond, Bhopal, MP</p>
                            <div className="flex items-center justify-center">
                                   <HiPhone color="white" size="30" />
                                   <a href="tel:+919755002981"><span className="font-bold text-base mx-2">+91 1234567890</span></a> | 
                                   <a href="tel:+919755002981"><span className="font-bold text-base mx-2">+91 1234567890</span></a>
                            </div>
                     </div>
              </div>
       )
}

export default TopDetailBar