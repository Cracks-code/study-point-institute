import Link from 'next/link'
import React from 'react'

const CourseCard = ({href, src, name, discription, rating}) => {
       return (
              <Link href={href}>
                     <div className="w-auto h-fit border-2 rounded border-gray-100 flex flex-col justify-center items-center group duration-500 hover:shadow-2xl mb-10 bg-primary">
                            <div className="w-full h-[20rem] flex items-center justify-center overflow-hidden">
                                   <img src={src} alt="img" className="object-cover group-hover:scale-110 duration-500" />
                            </div>
                            <div className="w-full h-full py-8 px-10 bg-primary text-white rounded flex flex-col justify-between items-center">
                                   <h1 className="text-lg md:text-2xl font-extrabold uppercase">{name}</h1>
                                   <p className="text-white font-bold mt-2 text-center ">{discription}</p>
                                   <div className="w-full flex justify-center space-y-2 flex-wrap items-center mt-4">
                                          <span>{rating}</span>
                                          <Link href={href}><h1 className="px-6 py-2 bg-white text-primary rounded-xl font-bold hover:bg-gray-50 mx-2">More Details</h1></Link>
                                   </div>
                            </div>
                     </div>
              </Link>
       )
}

export default CourseCard