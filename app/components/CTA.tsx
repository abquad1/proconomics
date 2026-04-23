import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa';
import { GoCheck } from "react-icons/go";
import { BsStars } from "react-icons/bs";

const badges = [
    "SOC 2 Type II",
    "No credit card required", 
    "Setup in minutes",
    "Connect to Value Tracker on day one",
  ];
  
function CTA() {
  return (
    <main className='w-full pt-12'>
        <section
            className="w-full py-24 px-6 flex flex-col items-center justify-center text-white text-center relative overflow-hidden"
            style={{
                background: `
                radial-gradient(ellipse at 30% 50%, #4c2a8a 0%, transparent 55%),
                radial-gradient(ellipse at 70% 50%, #1a1060 0%, transparent 55%),
                #0a0a14
                `
            }}
            >

            {/* Star icon */}
            <div className="mb-6 text-primary">
                <BsStars className='text-5xl'/>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4">
                Your Next Business Case Deserves{" "}
                <span
                className='bg-linear-to-r from-[#6495ED] to-[#DE3163] bg-clip-text text-transparent'
                >
                    a Better Foundation.
                </span>
            </h2>

            {/* Subtext */}
            <p className="text-gray-400 text-lg max-w-2xl mb-10">
                Stop building models that get approved and forgotten. Start building
                models that are defensible on day one and validated every month after.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                    href="/signup"
                    className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-opacity hover:opacity-90"
                    style={{
                        background: "linear-gradient(135deg, #6495ED, #a78bfa)"
                    }}
                >
                    Start building for free 
                    <FaArrowRight size={15} />
                </Link>

                <Link
                    href="/demo"
                    className="flex items-center gap-2 px-8 py-4 rounded-full font-medium border border-white/20 text-white backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                        See a live demo 
                        <FaArrowRight size={15} />
                </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                {badges.map((badge) => (
                <span key={badge} className="flex items-center gap-2">
                    <GoCheck className='rounded-full border border-primary text-primary px-1 text-lg'/>
                    {badge}
                </span>
                ))}
            </div>
        </section>
    </main>
  )
}

export default CTA