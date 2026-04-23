'use client'
import React, { useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
const testimonials = [
    {
      id: 1,
      quote: "We used to spend two weeks building a business case. Now we have a submission-ready model in under a day with scenario comparisons the CFO actually engages with instead of just approving blindly.",
      name: "Jerry Paul",
      title: "Finance Director, Enterprise Technology Company",
      image: "/images/finance-VP.png",
      alt: 'finance VP' 
    },
    {
      id: 2,
      quote: "The assumption documentation alone has saved us from three bad investment decisions. When assumptions are explicit, the conversation changes from 'is this number right?' to 'is this assumption reasonable?'",
      name: "Jimmy Walker",
      title: "VP of Finance, Global Professional Services Firm",
      image: "/images/finance-director.png",
      alt: 'finance-director'
    },
    
  ];

function Testimonial() {

    const [current, setCurrent] = useState(0);

    // Show 2 at a time
    const visible = testimonials.slice(current, current + 2);
  
    const prev = () => {
      setCurrent((prev) => Math.max(prev - 1, 0));
    };
  
    const next = () => {
      setCurrent((prev) => Math.min(prev + 1, testimonials.length - 2));
    };
    
  return (
    <main>
        <section className="w-full px-12">
            <section className='w-full flex items-center justify-center py-8'>
                <h3 className="w-fit rounded-full  px-2 text-3xl py-4 text-[#6495ED] shadow-md border border-[#D7E5FF] ">
                    Testimonials
                </h3>
            </section>

            <h1 className="w-full text-center max-w-5xl leading-13 font-semibold mx-auto flex items-center justify-center text-[56px]">
            See what value tracker is delivering for finance leaders.
            </h1>


      {/* Cards */}
      <div className="flex gap-4 mt-8">
        {visible.map((t) => (
          <div
            key={t.id}
            className="flex-1 bg-white rounded-2xl border-10 border-[#EEF4FF] p-8 flex flex-col justify-between"
          >
            {/* Quote icon */}
            <span className="text-4xl text-[#212121]">"</span>

            {/* Quote text */}
            <p className="text-[#212121] mt-4 mb-8 text-lg leading-relaxed">
              {t.quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-xl text-[#212121]">{t.name}</p>
                <p className="text-lg text-[#212121]">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center gap-4 mt-8 ">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-10 h-10 rounded-full border border-[#212121] flex items-center justify-center hover:bg-gray-100"
        >
            <SlArrowLeft size={12} />
        </button>
        <button
          onClick={next}
          disabled={current >= testimonials.length - 2}
          className="w-10 h-10 rounded-full border border-[#212121] flex items-center justify-center hover:bg-gray-100 "
        >
            <SlArrowRight size={12} />
        </button>
      </div>
        </section>
    </main>
  )
}

export default Testimonial