import Image from 'next/image';
import Link from 'next/link';
const projectFeatures = [
    {
      id: "feature-overview",
      heading:"project overview",
      imageLeft: true, 
      title: "Project Financial Model Overview and Business Case Definition",
      subtitle: "Give leadership the full picture before they ask for it",
      description: "Define your project scope, objectives, and financial summary in one structured view. Every model starts with a clear overview that gives stakeholders the context they need to evaluate it properly.",
      image: {
        src: "/images/project-overview.png",
        alt: "project financial model overview with assumptions and benefits"
      }
    },
    {
      id: "feature-cost",
      heading:"cost modeling",
      imageLeft: false, 
      title: "Project Cost Modeling and Investment Planning",
      subtitle: "See exactly where every dollar goes before you spend it",
      description: "Break down costs by category, timeline, and owner. Model one-time investments alongside recurring costs so your total cost of ownership is always visible and defensible.",
      image: {
        src: "/images/project-cost-table.png",
        alt: "business case modeling software cost and benefit tables"
      }
    },
    {
      id: "feature-benefit",
      heading:"benefit modeling & realization curves",
      imageLeft: true,
      title: "Benefit Forecasting and ROI Modeling",
      subtitle: "Show when the value arrives, not just that it will",
      description: "Map benefits to a timeline and connect them to the costs that drive them. Calculate NPV, IRR, and payback period automatically so your ROI story is always backed by the numbers.",
      image: {
        src: "/images/project-benefit-table.png",
        alt: "ROI dashboard showing project cash flow and payback"
      }
    },
    {
      id: "feature-assumptions",
      heading:"assumptions management",
      imageLeft: false, 
      title: "Financial Assumptions Management and Model Logic",
      subtitle: "The numbers are only as good as the logic behind them",
      description: "Document every assumption that drives your model. Link inputs to outputs so reviewers can follow the logic, and so you can defend every number when challenged.",
      image: {
        src: "/images/assumption-table.png",
        alt: "ROI dashboard showing project cash flow and payback"
      }
    },
    {
      id: "feature-scenarios",
      heading:"scenario planning & sensitivity analysis",
      imageLeft: true, 
      title: "Scenario Planning and Financial Sensitivity Analysis",
      subtitle: "Stop presenting one number. Start presenting the full range.",
      description: "Model best case, base case, and worst case scenarios side by side. Run sensitivity analysis to show how changes in key assumptions affect the outcome — before anyone in the room asks.",
      image: {
        src: "/images/scenario-planning-table.png",
        alt: "scenario planning financial model interface"
      }
    },
    {
      id: "feature-dashboard",
      heading:"executive dashboard",
      imageLeft: false, 
      title: "Executive Financial Dashboard and ROI Insights",
      subtitle: "From model to decision in one view",
      description: (
        <>
          Summarize your entire financial model in an executive-ready dashboard. Costs, benefits, ROI, payback, and scenario outcomes — all in one view, ready to share. You can also{' '}
          <Link href="/portfolio" className="text-blue-600 hover:underline">
            compare project performance across your portfolio
          </Link>{' '}
          to prioritise what gets funded.
        </>
      ),
      image: {
        src: "/images/project-financial-model-dashboard.png",
        alt: "ROI dashboard showing project cash flow and payback"
      }
    }
  ];

function Feature() {
  return (
    <main className='w-full'>
        <section className="w-full py-4" 
            style={{
                background: `
                  radial-gradient(circle at 2% 15%, rgba(173, 70, 255, 0.12) 0%, transparent 12%),
                  radial-gradient(circle at 2% 50%, rgba(173, 70, 255, 0.12) 0%, transparent 12%),
                  radial-gradient(circle at 2% 85%, rgba(173, 70, 255, 0.12) 0%, transparent 12%),
                  radial-gradient(circle at 98% 15%, rgba(246, 51, 154, 0.12) 0%, transparent 12%),
                  radial-gradient(circle at 98% 50%, rgba(246, 51, 154, 0.12) 0%, transparent 12%),
                  radial-gradient(circle at 98% 85%, rgba(246, 51, 154, 0.12) 0%, transparent 12%),
                  #ffffff
                `
              }}>

        <section className='w-full flex items-center justify-center mb-8'>
            <h1 className="w-fit rounded-full  px-4 text-3xl py-4 text-[#6495ED]  border border-[#D7E5FF] ">
                Feature Capabilities
            </h1>
        </section>

        <div className='px-12'>
            {projectFeatures.map((feature) => (
                <section 
                key={feature.id} 
                className={`flex flex-col md:items-center gap-12 py-4 ${
                    feature.imageLeft ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                >
                {/* Text Content */}
                <div className="flex-1 space-y-4">
                    <p className="rounded-lg bg-[#6495ED0A] shadow-md text-sm font-bold text-primary w-fit py-2 px-4">
                        {feature.heading.toUpperCase()}
                    </p>
                    <h2 className="text-3xl font-bold">{feature.title}</h2>
                    <h3 className="text-xl font-medium text-gray-700 italic">{feature.subtitle}</h3>
                    <p className="text-gray-600 text-lg">{feature.description}</p>
                </div>

                {/* Image Content */}
                {feature.image && (
                     <div className="flex-1 relative h-[300px]"> 
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