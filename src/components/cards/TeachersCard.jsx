import Image from 'next/image'
import React from 'react'

const TeachersCard = ({ src, name, subject }) => {
       return (
              <div className=" w-auto h-[35rem] border-2 rounded border-gray-50 flex flex-col justify-center items-center group hover:bg-primary duration-500 mb-8">
                     <div className="rounded-full w-64 h-64 border-4 border-white overflow-hidden">
                            <img src={src} alt="sir" className="object-cover" />
                     </div>
                     <h1 className="text-3xl font-bold text-primary group-hover:text-white mt-10 uppercase">{name}</h1>
                     <span className="text-xl mt-6 text-gray-600 group-hover:text-white">( {subject} )</span>
              </div>
       )
}

export default TeachersCard