import type { Metadata } from 'next'
import { EMOJI_FAVICON } from '../layout'

export const metadata: Metadata = {
  title: 'Patients Data',
  description: 'See the data from all Patients',
  icons: EMOJI_FAVICON,
}

export default function PatientsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className='p-5'>
      <h1 className='text-3xl'>Patients Data</h1>
      {children}
    </section>
  )
}
