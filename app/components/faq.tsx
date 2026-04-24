'use client'
import { faqItems } from '@/lib/faq-data'
import {useState} from 'react'
import { FaArrowRight} from 'react-icons/fa'

function Faq() {

    const [activeIndex,setActiveIndex] = useState<number | null>(null)
    const handleClick = (index:number)=>{
        setActiveIndex(activeIndex === index ? null : index)
    }
  return (
    <main>
        <section className="w-full pt-8">
            <section className='w-full flex items-center justify-center'>
                <h3 className="w-fit rounded-full  px-2 text-3xl py-4 text-[#6495ED] bg-[#6495ED]/5 font-semibold  border border-[#D7E5FF] ">
                    FAQs
                </h3>
            </section>

            <h2 className="text-center text-3xl md:text-[54px] px-4 py-4">
                Frequently Asked Questions About Financial Modeling and ROI
            </h2>

            <section className="w-full flex flex-col md:flex-row px-4 md:px-12 gap-8">
               <div className="flex flex-1 flex-col items-stretch justify-between gap-4">
               {faqItems.map((faq,i)=>{

                const isOpen = activeIndex === i
                    return(
                        <div className={`rounded-md px-4 py-4 border border-[#6495ED] flex flex-row gap-4 `} key={i}>
                            <section className="flex-1">
                                <h3 className="text-2xl font-bold">
                                    {faq.question}
                                </h3>

                                <p className={`text-xl ${isOpen? 'hidden' : 'block'}`}>
                                    {faq.answer}
                                </p>
                            </section>

                            <span onClick={()=>handleClick(i)} 
                            className="h-10 w-10 px-4 font-bold cursor-pointer rounded-full border-2 text-[#6495ED] border-[#6495ED] flex items-center justify-center">
                                 {isOpen? '+':'-'}
                            </span>
                        </div>
                    )
                })}
            
               </div>

               <div className="flex-1">
               <section className="rounded-md px-4 py-4 border border-[#6495ED] flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">
                    Still have questions?
                    </h3>

                    <p className="text-xl">
                    Can't find the answer you are looking for? Kindly check our complete list of FAQs
                    </p>

                    <button className="flex items-center gap-4 rounded-full text-[#ffffff] cursor-pointer bg-[#6495ED] px-4 py-3 w-fit
                    hover:bg-primary/80 hover:text-[#ffffff]">
                        View Complete FAQs 
                        <FaArrowRight size={15} />
                    </button>
                </section>
               </div>
            </section>
        </section>
    </main>
  )
}

export default Faq