import Image from 'next/image';
import Link from 'next/link';
const features = [
    {
      id: 1,
      title: "Models in minutes, not days.",
      description: "Structured templates and guided inputs replace blank spreadsheets. Your team goes from business idea to a complete, presentation-ready financial model faster than any manual process.",
      img: '/images/model-icon-one.png'
    },
    {
      id: 2,
      title: "Numbers that hold up under scrutiny.",
      description: "Every assumption is documented, every input is traceable, and every output is auditable. When the CFO asks 'how did we get to this NPV?' You have the answer, instantly.",
      img: '/images/model-icon-two.png'

    },
    {
      id: 3,
      title: "Living model, not a dead document.",
      description: (
        <>
          Model Builder stays connected to the project lifecycle via the{' '}
          <Link href="/value-tracker" className="text-blue-600 hover:underline">
            Value Tracker
          </Link>
          . When actuals come in, the model reflects reality. No separate spreadsheet. No version confusion. One source of financial truth.
        </>
      ),
      img: '/images/model-icon-three.png'

    }
  ];

function Card() {
  return (
    <main className='w-full bg-linear-to-r from-[#AD46FF]/10 via-[#F6339A]/10 to-[#AD46FF]/10'>
        <section aria-labelledby="why-teams-heading" className='relative z-10'>
            <h2 id="why-teams-heading" className='text-center font-bold text-[56px]'>Why Teams Use a Project Financial Model Builder</h2>

            <div className='flex flex-row items-stretch gap-6 justify-center px-12 pt-6'>
                {features.map((model) => (
                    <article key={model.id} className="rounded-2xl shadow-md bg-[#ffffff] py-4 px-2 mb-8 w-1/3 space-y-6"> 

                        <section className="rounded-md h-10 w-10 bg-[linear-gradient(135deg,#AD46FF_0%,#F6339A_100%)] flex items-center justify-center">
                            <Image alt='model icon' src={model.img} height={20} width={20} priority/>
                        </section>

                        <h3 className=" text-[56px] leading-12">{model.title}</h3>
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