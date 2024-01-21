import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { NavLinks } from './../constant/index';
import AuthProviders from './AuthProviders';

const Navbar = () => {
  const session = null;

  return (
    <div className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href='/'>
             <Image src='/logo.svg' width={115} height={43} alt={'logo'}/>
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link)=>(
                  <Link href={link.href} key={link.key}>
                      {link.text}
                  </Link>
                ))}
            </ul>
        </div>

        <div className='flexCenter gap-4'>
            {
              session? (<>
                userphoto
                <Link href="/create-project">share work</Link>
              </>) : 
              (
                <AuthProviders/>
              )
            }
        </div>
    </div>
  )
}

export default Navbar