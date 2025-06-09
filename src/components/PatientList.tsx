'use client'
import { PatientCard } from '@/components/PatientCard'
import { Patient } from '@/types/Patient'

export const PatientList = ({
  loading,
  patients,
}: {
  loading: boolean
  patients: Patient[]
}) => {
  if (loading) return <>Loading...</>
  return (
    <>
      {patients.map((patient) => (
        <PatientCard key={patient.id} {...patient} />
      ))}
    </>
  )
}
