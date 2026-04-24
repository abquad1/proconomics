import Image from 'next/image';
import { features } from '@/lib/features-data';

function Card() {
  return (
    <main className='w-full bg-linear-to-r from-[#AD46FF]/10 via-[#F6339A]/10 to-[#AD46FF]/10'>
        <section aria-labelledby="why-teams-heading" className='relative z-10'>
            
            <h2 id="why-teams-heading" className='text-center font-bold text-3xl md:text-[56px]'>
                Why Teams Use a Project Financial Model Builder
            </h2>

            <div className='flex flex-col md:flex-row items-stretch gap-6 justify-center px-4 md:px-12 pt-6'>
                {features.map((model) => (
                    <article key={model.id} className="rounded-2xl shadow-md bg-[#ffffff] py-4 px-2 mb-8 w-full md:w-1/3 space-y-6"> 

                        <section className="rounded-md h-10 w-10 bg-[linear-gradient(135deg,#AD46FF_0%,#F6339A_100%)] flex items-center justify-center">
                            <Image alt='model icon' src={model.img} height={20} width={20} priority/>
                        </section>

                        <h3 className="text-3xl md:text-[56px] leading-10 md:leading-12">
                            {model.title}
                        </h3>
                        <div className="flex items-stretch gap-6">
                            <div className="bg-primary w-6 rounded-md"></div>
                            <p className="text-gray-600 text-xl">
                                {model.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    </main>
  )
}

export default Card