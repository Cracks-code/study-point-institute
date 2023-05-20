import Image from 'next/image'
import React from 'react'

const TeachersCard = ({ src, name, subject }) => {
       return (
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                     <div className="h-full flex items-center border-primary border p-4 rounded-lg">
                            <div className="w-[50px] h-[50px] overflow-hidden rounded-full mr-5">
                                   <Image src={src} width={50} alt="sir" height={50} />
                            </div>
                     <div className="inline-flex flex-col">
                     <h2 className="text-primary text-lg title-font font-medium">{name}</h2>
                     <span className="text-gray-500">{subject}</span>
                     </div>
                     </div>
                     </div>
       )
}

export default TeachersCard