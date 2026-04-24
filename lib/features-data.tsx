import Link from "next/link";

export const projectFeatures = [
    {
      id: "feature-overview",
      imageLeft: true, 
      title: "Project Financial Model Overview and Business Case Definition",
      subtitle: "Give leadership the full picture before they ask for it",
      description: "When a sponsor asks 'what is this project actually solving?' or an executive wants context before reviewing the numbers, the overview is ready, not a different format for every analyst on the team. No hunting through emails, no conflicting slide decks. Just a clear, defensible narrative tied directly to the financial model.",
      image: {
        src: "/images/project-overview.png",
        alt: "project financial model overview with assumptions and benefits"
      }
    },
    {
      id: "feature-cost",
      imageLeft: false, 
      title: "Project Cost Modeling and Investment Planning",
      subtitle: "See exactly where every dollar goes before you spend it",
      description: "Map project costs across categories and timelines. Break down capital expenditure, operating costs, and resource allocation into a structured view that shows when money leaves the organization and what it funds so finance teams can challenge assumptions before they become budget overruns.",
      image: {
        src: "/images/project-cost-table.png",
        alt: "business case modeling software cost and benefit tables"
      }
    },
    {
      id: "feature-benefit",
      imageLeft: true,
      title: "Benefit Forecasting and ROI Modeling",
      subtitle: "Show when the value arrives, not just that it will",
      description: (
        <>
        Define expected benefits, cost savings, revenue uplift, efficiency gains, and map them against a realistic realization curve. Show stakeholders not just the total projected value, but when the organization will start seeing returns and at what rate. use the{' '}
    <Link href="/value-tracker" 
        target="_blank" rel="noopener noreferrer"
    className="text-primary cursor-pointer">Value Tracker to track actual performance</Link>
    {' '}against your original model.

  </>
  ),
      image: {
        src: "/images/project-benefit-table.png",
        alt: "project benefit table"
      }
    },
    {
      id: "feature-assumptions",
      imageLeft: false, 
      title: "Financial Assumptions Management and Model Logic",
      subtitle: "The numbers are only as good as the logic behind them",
      description: "Model Builder centralizes every key assumption from cost of capital to discount rate, adoption curves, and headcount multipliers in one governed place. When assumptions change, the model updates. When someone questions a figure, the audit trail shows who set it, when, and why.",
      image: {
        src: "/images/assumption-table.png",
        alt: "project financial model overview with assumptions and benefits"
      }
    },
    {
      id: "feature-scenarios",
      imageLeft: true, 
      title: "Scenario Planning and Financial Sensitivity Analysis",
      subtitle: "Stop presenting one number. Start presenting the full range.",
      description: "Walk into the board room with confidence. Build and compare multiple scenarios; best case, worst case, and most likely directly within the model. Toggle macro-variables like churn rate, cost of capital, or market adoption, and watch the real-time impact on NPV, IRR, and payback.",
      image: {
        src: "/images/scenario-planning-table.png",
        alt: "scenario planning financial model interface"
      }
    },
    {
      id: "feature-dashboard",
      imageLeft: false, 
      title: "Executive Financial Dashboard and ROI Insights",
      subtitle: "From model to decision in one view",
      description: (
        <>Stakeholders don't need to understand the model to understand the outcome. The Dashboard is built for the executive audience: high signal, low noise, immediately actionable. Export it for a board pack. Share a link for live review. Present it in the room with confidence. The Model Builder Dashboard converts your structured inputs into an executive-ready financial summary; NPV, IRR, payback period, cumulative cash flow, and benefit realization curves in one clean, shareable view. <Link href="https://quadri-portfolio.netlify.app/" 
        target="_blank" rel="noopener noreferrer"
        className="text-primary cursor-pointer">
        Compare project performance across your portfolio
      </Link>
      {' '}to prioritise what gets funded.
        </>
      ),
      image: {
        src: "/images/project-financial-model-dashboard.png",
        alt: "project financial model dashboard showing ROI NPV IRR"
      }
    }
  ];

  export const features = [
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