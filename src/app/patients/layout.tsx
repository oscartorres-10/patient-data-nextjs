import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patients Data',
  description: 'See the data from all patients',
}

export default function PatientsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section>{children}</section>
}
