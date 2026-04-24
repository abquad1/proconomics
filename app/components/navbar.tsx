'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


const navlinks = [
  {name: 'Templates', link: '/templates'},
  {name: 'About Us', link: '/about-us'},
  {name: 'Pricing', link: '/pricing'},
  {name: 'Enterprise', link: '/enterprise'},

]

function Navbar() {

const [open,setOpen] = useState(false)
  return (
    <main className='w-full shadow-sm'>
      <nav className="flex flex-row items-center justify-between w-full bg-[#FCFCFC] mx-auto py-4 px-4 md:px-12">

        {/* company logo */}
        <Link href='/' className={`text-2xl font-bold relative h-10 w-32 z-50 `}>
            <Image alt='proconomics-logo' src='/images/proconomics-logo.png' fill/>
        </Link>

        {/* navigation links */}
        <section className={`hidden md:block `}>
          <ul className={`flex flex-row items-center justify-between gap-10`}>
          {navlinks.map((navlink,id)=>(
            <div className="" key={id}>
              <Link href={navlink.link}>
                  <li className={`text-[#707070] text-xl hover:text-primary `}>{navlink.name}</li>
              </Link>
            </div>
          ))}
          </ul>
        </section>

        {/* mobile dropdown */}
        <section className={`block md:hidden pt-18 pb-10 absolute bg-[#ffffff] left-0 top-0 transform transition-transform duration-300 w-full z-10
          ${open? 'translate-y-0' : '-translate-y-full'}`}>
            <ul className={`flex flex-col items-center text-xl justify-between gap-8 
              `}>
            {navlinks.map((navlink,id)=>(
              <div className="" key={id}>
                <Link href={navlink.link}>
                    <li className={` text-foreground hover:text-primary`}>{navlink.name}</li>
                </Link>
              </div>
            ))}
            </ul>
          
            <section className="flex flex-col gap-2 text-xl font-bold px-4 py-2">
                <button className='px-4 py-2 rounded-md cursor-pointer text-primary relative z-10' >
                  Sign In
                </button>
                <button className='px-4 py-2 rounded-4xl relative z-10 cursor-pointer bg-primary text-[#ffffff]'>
                  Get Started
                </button>
            </section>  
        </section>


          {/* dropdown button */}
        <section className="block md:hidden z-10 relative text-2xl text-primary">
          {open? 
          (
            <FaTimes className='' onClick={()=>setOpen(!open)}/>
            ):(
              <FaBars className='' onClick={()=>setOpen(!open)}/>
            )}
        </section>

            {/* desktop buttons */}
        <section className="hidden md:block text-xl font-bold">
            <button className='px-4 py-2 rounded-md text-primary relative z-10' >
              Sign In
            </button>
            <button className='px-4 py-2 rounded-4xl relative z-10 bg-primary text-[#ffffff]'>
              Get Started
            </button>
        </section>
      </nav>
    </main>
  )
}

export default Navbar