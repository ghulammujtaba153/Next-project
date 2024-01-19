import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href='/'>
             <Image src='/logo.svg' width={115} height={43} alt={'logo'}/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar