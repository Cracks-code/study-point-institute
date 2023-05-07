import { FaChild } from "react-icons/fa";

const WWHCard = ({text}) => {
       return (
              <div className="w-auto border-2 rounded border-gray-100 flex justify-center items-center space-x-4 px-6 py-8 hover:bg-primary group duration-500 hover:shadow-2xl">
                     <h1 className="text-lg md:text-xl font-bold uppercase text-primary group-hover:text-white">{text}</h1>
              </div>
       )
}

export default WWHCard