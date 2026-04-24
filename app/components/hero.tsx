import Image from 'next/image'
import Link from 'next/link'
const breadcrumbs = [
    { name: 'HOME', href: '/' },
    { name: 'PROCONOMICS', href: '/proconomics' },
    { name: 'MODEL BUILDER', href: '/proconomics/model-builder' },
  ];

  const colors = [
    'bg-primary/10', 'bg-secondary/10'
  ];

function Hero() {
  return (
    <main className='w-full relative'>
        <section className='w-full text-center py-8 flex flex-col gap-4'>

            {/* hero background */}
            <section className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 gap-2 opacity-40 pointer-events-none">
                {Array.from({ length: 24 }).map((_, i) => (
                    <span
                    key={i}
                    className={`rounded-xl ${colors[i % colors.length]}`}
                    />
                ))}
            </section>

            <section className='w-full flex items-center justify-center px-12 md:px-auto'>
                <div className="flex items-center justify-center gap-2 bg-[#6495ED]/10 border border-primary rounded-full px-4 py-2 w-fit">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={crumb.name} className="flex items-center gap-2">
                        <Link
                            href={crumb.href}
                            className={`text-xs md:text-md font-medium tracking-widest transition-colors hover:text-blue-500 ${
                            index === breadcrumbs.length - 1
                                ? 'text-primary'
                                : 'text-gray-400'
                            }`}
                        >
                            {crumb.name}
                        </Link>

                        {/* Separator - hide after last item */}
                        {index < breadcrumbs.length - 1 && (
                            <span className="text-[#212121] text-md ">/</span>
                        )}
                        </div>
                    ))}
                </div>
            </section>

            <h1 className='text-5xl md:text-7xl px-6'>
                Your <span className='text-primary'>Business</span> <span className='text-secondary'>Case</span> Should     Survive Long After the Meeting Ends
            </h1>

            <p className="text-2xl px-4 md:px-12">
                Proconomics Model Builder gives finance teams and project sponsors a structured, assumption-backed financial model that holds up under executive scrutiny, built in minutes, not days.
            </p>

            <p className='text-2xl px-4 md:px-16'>
                Build structured project financial models that define costs, forecast ROI,
                and hold up under executive scrutiny.
            </p>

            <section className='flex flex-col md:flex-row items-center w-full justify-center py-4 gap-8'>
                <Link href="/signup" className='flex items-center gap-4 bg-primary px-8 py-4 text-[#ffffff] rounded-full
                hover:bg-primary/80 hover:text-[#ffffff]'>
                    Build your first model
                    
                    <Image alt="model icon" src="/images/model-icon.png" height={40} width={40}></Image>
                    
                </Link>

                <Link href="/demo" className='flex items-center gap-4 text-primary  px-8 py-4 border border-primary 
                rounded-full hover:bg-primary/80 hover:text-[#ffffff]'>
                    Book a demo
                    
                    <Image alt="demo icon" src="/images/demo-icon.png" height={40} width={40}></Image>
                    
                </Link>
            </section>

            <section className='w-9/10 h-96 mx-auto relative'>
                <Image
                src="/images/model-builder-table.png"
                alt="project financial model dashboard showing ROI NPV IRR"
                fill
                priority
            />
            </section>

            <section aria-label="About Model Builder">
                <h2 className='text-2xl px-4 md:px-16'>
                    Proconomics Model Builder is a project financial modeling tool designed to
                    help teams build business cases, analyze costs and benefits, and evaluate
                    return on investment before execution. It replaces fragmented spreadsheets
                    with a structured system that keeps every model clear, consistent, and
                    decision-ready.
                </h2>
            </section>
        </section>
    </main>
  )
}

export default Hero