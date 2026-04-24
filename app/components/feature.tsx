import Image from 'next/image';
import { projectFeatures } from '@/lib/features-data'

function Feature() {
  return (
    <main className='w-full'>
        <section className="w-full py-4" 
           style={{
            background: `
              radial-gradient(circle at 2% 15%, rgba(100, 149, 237, 0.15) 0%, transparent 15%),
              radial-gradient(circle at 2% 50%, rgba(100, 149, 237, 0.15) 0%, transparent 15%),
              radial-gradient(circle at 2% 85%, rgba(100, 149, 237, 0.15) 0%, transparent 15%),
              radial-gradient(circle at 98% 15%, rgba(222, 49, 99, 0.15) 0%, transparent 15%),
              radial-gradient(circle at 98% 50%, rgba(222, 49, 99, 0.15) 0%, transparent 15%),
              radial-gradient(circle at 98% 85%, rgba(222, 49, 99, 0.15) 0%, transparent 15%),
              #ffffff
            `
          }}>

        <section className='w-full flex items-center justify-center '>
            <h1 className="w-fit rounded-full px-4 text-3xl py-4 text-[#6495ED] bg-[#6495ED]/5 font-semibold  border border-[#D7E5FF] ">
                Feature Capabilities
            </h1>
        </section>

        <div className='px-4 md:px-12'>
            {projectFeatures.map((feature) => (
                <section 
                key={feature.id} 
                className={`flex flex-col md:items-center gap-4 md:gap-12 py-4 ${
                    feature.imageLeft ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                >
                {/* Text Content */}
                <div className="flex-1 space-y-3">
                    <h2 className="rounded-lg bg-[#6495ED0A] shadow-md text-sm font-bold text-primary w-fit py-2 px-4">
                        {feature.title.toUpperCase()}
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-medium text-[#212121] ">{feature.subtitle}</h3>

                   <div className="flex flex-row items-stretch gap-4">
                        <div className="bg-primary w-6 rounded-md"></div>
                        <p className="text-gray-600 text-lg">{feature.description}</p>
                   </div>
                </div>

                {/* Image Content */}
                {feature.image && (
                     <div className="hidden md:block flex-1 relative h-[350px]"> 
                     <Image
                       src={feature.image.src}
                       alt={feature.image.alt}
                       fill
                       className="rounded-xl "
                     />
                   </div>
                )}
                </section>
            ))}
            </div>
        </section>
    </main>
  )
}

export default Feature