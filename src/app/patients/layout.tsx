import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patients Data',
  description: 'See the data from all Patients',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤓</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
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
