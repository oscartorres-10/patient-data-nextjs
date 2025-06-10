'use client'
import { PatientCard } from '@/components/PatientCard'
import { Patient } from '@/types/Patient'

export const PatientList = ({
  loading,
  patients,
  onEditPatient,
}: {
  loading: boolean
  patients: Patient[]
  onEditPatient: (patient: Patient) => void
}) => {
  if (loading) return <>Loading Patient Data...</>
  return (
    <>
      {patients.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
          onEdit={onEditPatient}
        />
      ))}
    </>
  )
}
