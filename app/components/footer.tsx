'use client'
import Link from 'next/link';
import { SlArrowDown } from "react-icons/sl";
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Image from 'next/image';

export const footerLinks = [
    {
      title: "Features",
      links: [
        { name: "List View", href: "/features/list-view" },
        { name: "Board View", href: "/features/board-view" },
        { name: "Timeline", href: "/features/timeline" },
        { name: "Calendar", href: "/features/calendar" },
        { name: "Workload", href: "/features/workload" },
        { name: "Integration", href: "/features/integration" },
        { name: "See More", href: "/features", hasArrow: true },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Webinars", href: "/resources/webinars" },
        { name: "Blogs", href: "/resources/blogs" },
        { name: "Templates", href: "/resources/templates" },
        { name: "Video Demo", href: "/resources/demo" },
        { name: "Developers API", href: "/resources/api" },
        { name: "Brand Guide", href: "/resources/brand" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Teams", href: "/solutions/teams" },
        { name: "AI Assistant", href: "/solutions/ai" },
        { name: "Proconomics", href: "/solutions/proconomics" },
        { name: "Case Studies", href: "/solutions/case-studies" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Community", href: "/community" },
        { name: "Customers", href: "/customers" },
        { name: "Affiliate", href: "/affiliate" },
        { name: "New Release", href: "/news" },
        { name: "See More", href: "/company", hasArrow: true },
      ],
    },
  ];

  const socialIcons = [
    { id: 1, name: 'X', src: '/images/x-icon.png', href: 'https://x.com' },
    { id: 2, name: 'LinkedIn', src: '/images/linkedin-icon.png', href: 'https://linkedin.com' },
    { id: 3, name: 'Instagram', src: '/images/instagram-icon.png', href: 'https://instagram.com' },
    { id: 4, name: 'Facebook', src: '/images/facebook-icon.png', href: 'https://facebook.com' },
  ];

function Footer() {

    const [form,setForm]=useState({
        name: '', email: ''
    })
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()

        if (!form.name.trim()) {
            toast.error('Please enter your full name')
            return;
        }

        if (!form.name.trim() || !form.email.includes('@')) {
            toast.error('Please enter a valid email address')
            return;
        }

        setLoading(true)

        try {
            toast.success("You're subscribed! Check your inbox soon.");
            setForm({ name: '', email: '' }); 
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setLoading(false);
          }
    }
  return (
    <footer className='w-full relative'>
        <section className="w-full flex flex-col relative">
            {/* Newsletter */}
            <div className="mx-12 shadow-lg my-10 rounded-2xl p-16 bg-white flex justify-between items-start gap-10 relative z-10">

            {/*  Left text*/}
            <div className="flex-1">
                <h2 className="text-6xl font-bold text-black">
                    Stay <span className="bg-linear-to-r from-[#6495ED] to-[#DE3163] bg-clip-text text-transparent">ahead</span> of the curve
                </h2>
                
                <p className="text-[#5F5F5F] text-2xl mt-4">
                    Our monthly email newsletter keeps you up-to-date 
                    with project management insights.
                </p>
            </div>

            {/* Right form  */}
            <div className="flex-1 flex flex-col gap-4">
                <p className="text-[#212121] text-[26px]">
                    Subscribe to our newsletter and have these 
                    useful insights sent to your work email
                </p>

                <input 
                    type="text" 
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e)=>setForm({...form, name:e.target.value})}
                    className="w-full bg-[#F0F0F0] rounded-full px-5 py-4 outline-none text-[#707070]"
                    />

                <input 
                    type="email" 
                    placeholder="Your work email"
                    value={form.email}
                    onChange={(e)=>setForm({...form, email:e.target.value})}
                    className="w-full bg-[#F0F0F0] rounded-full px-5 py-4 outline-none text-[#707070]"
                />
            
                <button onClick={handleSubmit} 
                className="bg-[#6495ED] hover:bg-blue-600 text-[#FFFFFF] rounded-full px-8 py-4 w-fit">
                    Subscribe
                </button>
            </div>
        </div>

        <section className="w-full bg-black py-12 mt-[-20%] ">
            <div className='flex flex-row pt-[20%] px-12 justify-between gap-48 mx-auto max-w-7xl '>
                {footerLinks.map((column, index) => (
                <div key={index} className="flex flex-col gap-6 min-w-[150px] w-1/4">
            
                    {/* Column Title */}
                    <h4 className="text-2xl font-bold tracking-widest text-gray-200">
                      {column.title}
                    </h4>

                    <ul className="flex flex-col gap-4 text-xl">
                    {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                            <Link 
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                            >
                                {link.name}

                                {link.hasArrow && (
                                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                                        <SlArrowDown />
                                    </span>
                                )}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
        </div>

        <div className="bg-white h-[0.5px] mx-12 my-8"></div>

                <section className='flex justify-between items-start px-12'>
                    <Image alt='acedboard-logo' src='/images/acedboard-logo.png' height={40} width={100}></Image>

                    <div className="flex flex-row gap-4 items-center">
                        {socialIcons.map((icon) => (
                            <Link 
                            key={icon.id} 
                            href={icon.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="h-10 w-10 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                            >
                            <Image 
                                src={icon.src} 
                                alt={`${icon.name} icon`} 
                                width={15} 
                                height={15} 
                                className="object-contain"
                            />
                            </Link>
                        ))}
                    </div>
                </section>
            </section>
        </section>
    </footer>
  )
}

export default Footer