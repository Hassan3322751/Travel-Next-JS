"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <nav className={scrolling ? 'navbar-scroll max-container padding-container flex justify-between py-8 fixed z-50 w-full' : 'max-container padding-container flex justify-between py-8 w-full'}>
      <div className='left'>
        <Link href='/' className='flexCenter gap-2'>
          <Image src='/travlog_logo.svg' alt='logo' width={40} height={40} />
          <h2 className='font-bold text-lg'>Travel</h2>
        </Link>            
      </div>

      <div className='middle'>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="flexCenter cursor-pointer transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      {/*-------------- MOBILE NAVIGATION -----------------*/}
      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50 lg:hidden">
          <button onClick={() => setNavbarOpen(false)} className="absolute top-6 right-6">
            <XMarkIcon className='h-8 w-8' />
          </button>
          <ul className='flex flex-col gap-6 text-xl'>
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link href={link.href} className="cursor-pointer transition-all hover:font-bold" onClick={() => setNavbarOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className='right lg:flexCenter hidden gap-4'>
        <button className='px-4 py-2 border border-gray-400 rounded-full'>Login</button>
        <button className='px-4 py-2 bg-purple-600 text-white rounded-full'>Sign Up</button>
      </div>         

      {/*-------------- MENU ICON MOBILE -----------------*/}
      <div className="block cursor-pointer lg:hidden">
        {!navbarOpen ? (
          <button onClick={() => setNavbarOpen(true)}>
            <Bars3Icon className='h-8 w-8' />
          </button>
        ) : null}
      </div> 
    </nav>
  )
}

export default Navbar