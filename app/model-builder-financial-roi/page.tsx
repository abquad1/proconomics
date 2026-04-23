import { Metadata } from 'next'
import { faqItems } from '@/lib/faq-data'
import Hero from '../components/hero'
import Card from '../components/card'
import Feature from '../components/feature'
import Faq from '../components/faq'
import Footer from '../components/footer'
import Testimonial from '../components/testimonial'
import CTA from '../components/CTA'

export const metadata: Metadata = {
    title: 'Project Financial Model Builder for ROI & Business Cases | Proconomics',
    description:
      'Build structured financial models to define costs, forecast benefits, and evaluate ROI. Create business cases that hold up under executive scrutiny.',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

function ModelBuilderPage() {
  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <main>
            <Hero/>
            <Card/>            
            <Feature/>
            <Testimonial/>
            <Faq/>
            <CTA/>
            <Footer/>
        </main>
    </>
  )
}

export default ModelBuilderPage