import Image from 'next/image'
import React from 'react'

const Cards = () => {
  return (
    
<div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg mb-4">
  
  <Image className="w-full h-48 object-cover" width={20} height={40} src="project-image.jpg" alt="Project Image"/>


  <div className="p-4">
    
    <div className="flex items-center mb-2">
      
      <Image className="w-10 h-10 rounded-full mr-2" height={20} width={20} src="user-avatar.jpg" alt="User Avatar"/>

      
      <div>
        <h2 className="text-lg font-semibold">Project Name</h2>
      </div>
    </div>

    
    <div className="flex justify-between text-gray-600">
      
      <div className="flex items-center">
        <svg className="w-5 h-5 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 2C5.03 2 1 6.03 1 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-2.21 0-4-1.79-4-4 0-1.32.64-2.48 1.61-3.21l1.43 1.43C8.61 10.55 8 11.73 8 13c0 2.21 1.79 4 4 4 1.81 0 3.29-1.19 3.8-2.84l1.42 1.42C14.48 15.9 12.36 18 10 18zm2-7H8v-2h4v2z"/></svg>
        <span>24 Likes</span>
      </div>

      
      <div>
        <svg className="w-5 h-5 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 2C5.03 2 1 6.03 1 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1-8H6v2h3v4h2v-4h3v-2h-3V8z"/></svg>
        <span>120 Views</span>
      </div>
    </div>
  </div>
</div>

  )
}

export default Cards