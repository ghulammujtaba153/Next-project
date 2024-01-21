import React from 'react'

const Categories = () => {
  return (
    <div className="flex items-center bg-gray-200 p-4">
        <div className="flex space-x-4 overflow-x-auto">
            
            <div className=" text-black px-4 py-2 rounded-md cursor-pointer hover:text-blue-600 transition duration-300">
            Mechanical engineering
            </div>

            
            <div className=" text-black px-4 py-2 rounded-md cursor-pointer hover:text-green-600 transition duration-300">
            Electrical engineering
            </div>

            
            <div className=" text-black px-4 py-2 rounded-md cursor-pointer hover:text-yellow-600 transition duration-300">
            software engineering
            </div>

            <div className=" text-black px-4 py-2 rounded-md cursor-pointer hover:text-yellow-600 transition duration-300">
            software engineering
            </div>
            <div className=" text-black px-4 py-2 rounded-md cursor-pointer hover:text-yellow-600 transition duration-300">
            software engineering
            </div>
            <div className=" text-black px-4 py-2 rounded-md cursor-pointer hover:text-yellow-600 transition duration-300">
            software engineering
            </div>

           

        </div>
    </div>
  )
}

export default Categories