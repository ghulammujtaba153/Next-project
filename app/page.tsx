import Cards from '@/components/Cards'
import Categories from '@/components/Categories'
import React from 'react'

const page = () => {
  return (
    <div className='flex-start flex-col paddings mb-16'>
        <Categories/>
        <Cards/>

    </div>
  )
}

export default page