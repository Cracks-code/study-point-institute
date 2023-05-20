import React from 'react'

const Hading = ({hading, about_hading}) => {
  return (
    <div className="relative container my-3 flex flex-wrap flex-col justify-center items-center px-5">
      <h1 className="text-2xl lg:text-3xl uppercase font-bold mt-0 text-center text-primary tracking-wider">  <br/> {hading}</h1>
      <p className="flex-1 font-medium text-base text-center md:text-md p-6 md:px-24 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui vitae modi, quas facere maiores laboriosam distinctio eius ipsum tempore excepturi sapiente. Dicta, alias.</p>
      <span className="w-[70%] md:w-[40%] mx-10 rounded-xl h-1 bg-orange-600"></span>
    </div>
  )
}

export default Hading