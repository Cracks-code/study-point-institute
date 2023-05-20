import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdOutlineFormatQuote } from 'react-icons/md'

const TestinomialCard = ({name, content}) => {
       return (
              <div className="p-4 sm:w-auto w-full">
                     <div className="h-full bg-gray-100 p-8 rounded">
                            <MdOutlineFormatQuote className="mb-5" size={40} />
                            <p className="leading-relaxed mb-6">{content}</p>
                            <a className="inline-flex items-center">
                                   <FaUser size={30} />
                                   <span className="flex-grow flex flex-col pl-4">
                                          <span className="title-font font-medium text-gray-900">{name}</span>
                                   </span>
                            </a>
                     </div>
              </div>
       )
}

export default TestinomialCard