// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-full h-screen flex flex-col items-center justify-center gap-10'>
      <h1 className='text-5xl text-primary'>Proconomics</h1>
      <p className='text-3xl'>Build better business cases.</p>
      <Link href="/model-builder-financial-roi" className='bg-primary text-[#ffffff] px-2 py-4 rounded-full text-xl'>
        Go to Model Builder
      </Link>
    </main>
  )
}