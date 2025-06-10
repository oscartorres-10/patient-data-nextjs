'use client'
import { PatientList } from '@/components/PatientList'
import { PatientModal } from '@/components/PatientModal'
import { usePatients } from '@/hooks/usePatients'
import { useState } from 'react'

export default function Patients() {
  const [showModal, setShowModal] = useState(false)
  const { loading, result, handleEditPatient, handleAddPatient } = usePatients()
  const loadingMock = false
  const resultMock = [
    {
      id: '1',
      name: 'John Doe',
      avatar: '/dummy-avatar-1.png',
      description: 'Patient with chronic condition',
      website: 'https://example.com',
      createdAt: '2024-01-15T10:30:00Z',
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatar: '/dummy-avatar-2.png',
      description: 'Regular checkup patient',
      website: 'https://example.com',
      createdAt: '2024-01-14T15:45:00Z',
    },
    {
      id: '3',
      name: 'Mike Johnson',
      avatar: '/dummy-avatar-3.png',
      description: 'New patient',
      website: 'https://example.com',
      createdAt: '2024-01-13T09:20:00Z',
    },
  ]

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <div className='flex gap-8 items-center flex-col w-lg'>
          <PatientList
            loading={loading}
            patients={result ?? []}
            onEditPatient={handleEditPatient}
          />
          {/* <PatientList
            loading={loadingMock}
            patients={resultMock ?? []}
            onEditPatient={handleEditPatient}
          /> */}
          <button
            className='fixed bottom-10 right-10 w-14 h-14 rounded-full bg-violet-300 text-white text-3xl font-bold flex justify-center items-center cursor-pointer shadow-lg hover:bg-violet-400 transition-colors'
            onClick={() => setShowModal(true)}
          >
            +
          </button>
          <PatientModal
            open={showModal}
            setOpen={setShowModal}
            onSave={(patient) => {
              handleAddPatient(patient)
            }}
          />
        </div>
      </main>
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'></footer>
    </div>
  )
}
