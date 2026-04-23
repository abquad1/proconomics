'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


const navlinks = [
  {name: 'Templates', link: '#templates'},
  {name: 'About Us', link: '#about-us'},
  {name: 'Pricing', link: '#pricing'},
  {name: 'Enterprise', link: '#enterprise'},

]

function Navbar() {


const router = useRouter()
const [open,setOpen] = useState(false)
  return (
    <main className='w-full shadow-sm'>
      <nav className="flex flex-row items-center justify-between w-full bg-[#FCFCFC] mx-auto py-4 px-12">
          <div className={`text-2xl font-bold relative h-10 w-32 ${open? ' z-50' : ''}`}>
              <Image alt='proconomics-logo' src='/images/proconomics-logo.png' fill/>
          </div>

          {/* <div className="flex flex-row items-center justify-between"> */}
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

            <div className={`block md:hidden`}>
              <ul className={`flex flex-col items-center text-xl justify-between gap-8 pt-16 pb-10 absolute bg-background left-0 top-0 transform transition-transform duration-300 w-full z-10
              ${open? 'translate-y-0' : '-translate-y-full'}
               `}>
              {navlinks.map((navlink,id)=>(
                <div className="" key={id}>
                  <Link href={navlink.link}>
                      <li className={` text-foreground hover:text-primary`}>{navlink.name}</li>
                  </Link>
                </div>
              ))}
              </ul>
            </div>

            <section className="block md:hidden z-10 relative text-2xl">
              {open? 
              (
                <FaTimes className={` ${open? 'text-foreground' : 'text-background'}`} onClick={()=>setOpen(!open)}/>
                ):(
                  <FaBars className={` ${open? 'text-foreground' : 'text-background'}`} onClick={()=>setOpen(!open)}/>
                )}
            </section>

            <section className="hidden md:block text-xl font-bold">
              <button className='px-4 py-2 rounded-md text-primary relative z-10' onClick={()=>router.push('/create-chat')}>
                Sign In
              </button>
              <button className='px-4 py-2 rounded-4xl relative z-10 bg-primary text-[#ffffff]' onClick={()=>router.push('/create-chat')}>
                Get Started
              </button>
            </section>
          {/* </div> */}
      </nav>
    </main>
  )
}

export default Navbar