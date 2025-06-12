import { useToast } from '@/context/ToastProvider'
import { Patient, PatientSchema } from '@/types/Patient'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Dialog } from 'radix-ui'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { z, ZodError } from 'zod/v4'

const emptyPatient = (): Patient => ({
  id: (Math.floor(Math.random() * (1000 - 200 + 1)) + 200).toString(),
  name: '',
  description: '',
  website: '',
  avatar: '',
  createdAt: new Date().toString(),
})

export const PatientModal = ({
  patient,
  open,
  setOpen,
  onSave,
}: {
  patient?: Patient
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onSave: (patient: Patient) => void
}) => {
  const [patientData, setPatientData] = useState<Patient>(emptyPatient())
  const [error, setError] = useState<ZodError>()
  const { showToast } = useToast()

  useEffect(() => {
    if (patient) {
      setPatientData({ ...patient })
    } else {
      setPatientData(emptyPatient())
    }
  }, [patient])

  const resetModal = () => {
    setPatientData(emptyPatient())
    setError(undefined)
  }

  if (!open) return null

  return (
    <Dialog.Root open={open} modal={true}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-70 data-[state=open]:animate-modal-show' />
        <Dialog.Content
          className='fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-background p-[25px] shadow-[var(--shadow-6)] focus:outline-none'
          onEscapeKeyDown={() => setOpen(false)}
        >
          <Dialog.Title className='m-0 text-[17px] font-bold'>
            Edit Patient
          </Dialog.Title>
          <Dialog.Description className='mb-5 mt-2.5 text-[15px] leading-normal text-gray-500'>
            Make changes to the patient data here. Click save when you're done.
          </Dialog.Description>
          <form
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <fieldset className='mb-[15px] flex items-center gap-5'>
              <label
                className='w-[90px] text-right text-[15px] text-violet-600 font-semibold'
                htmlFor='name'
              >
                Name
              </label>
              <input
                id='name'
                className='inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-violet-700 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet-800 user-invalid:border-2 user-invalid:border-red-500'
                defaultValue={patientData.name}
                onChange={(e) =>
                  setPatientData({ ...patientData, name: e.target.value })
                }
                type='text'
                minLength={2}
                maxLength={60}
                required
              />
            </fieldset>
            <fieldset className='mb-[15px] flex items-center gap-5'>
              <label
                className='w-[90px] text-right text-[15px] text-violet-600 font-semibold'
                htmlFor='username'
              >
                Description
              </label>
              <textarea
                id='description'
                className='inline-flex w-full min-h-10 max-h-40 flex-1 items-center justify-center rounded px-2.5 text-[15px] shadow-[0_0_0_1px] shadow-violet-700 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet-800 user-invalid:border-2 user-invalid:border-red-500'
                defaultValue={patientData.description}
                onChange={(e) =>
                  setPatientData({
                    ...patientData,
                    description: e.target.value,
                  })
                }
                onFocus={(e) => e.target.select()}
                minLength={5}
                maxLength={200}
              />
            </fieldset>
            <fieldset className='mb-[15px] flex items-center gap-5'>
              <label
                className='w-[90px] text-right text-[15px] text-violet-600 font-semibold'
                htmlFor='website'
              >
                Website
              </label>
              <input
                id='website'
                className='inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-violet-700 focus:shadow-[0_0_0_2px] outline-none user-invalid:outline-0 user-invalid:border-2 user-invalid:border-red-500'
                defaultValue={patientData.website}
                onChange={(e) =>
                  setPatientData({ ...patientData, website: e.target.value })
                }
                type='url'
                required
              />
            </fieldset>
            {error && <p className='text-red-500'>{z.prettifyError(error)}</p>}
          </form>
          <div className='mt-[25px] flex justify-end'>
            <Dialog.Close asChild>
              <button
                className='inline-flex h-[35px]  items-center justify-center rounded bg-green-200 px-[15px] font-bold leading-none text-green-800 outline-offset-1 hover:bg-green-300 focus-visible:outline-2 focus-visible:outline-green-600 select-none cursor-pointer disabled:cursor-not-allowed disabled:grayscale'
                onClick={() => {
                  const result = PatientSchema.safeParse(patientData)
                  if (!result.success) {
                    setError(result.error)
                    showToast('There is some invalid data!')
                  } else {
                    onSave(patientData)
                    resetModal()
                    setOpen(false)
                    showToast('Saved changes!')
                  }
                }}
                disabled={
                  !patientData.name ||
                  !patientData.description ||
                  !patientData.website
                }
              >
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className='absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet-800 bg-gray-300 hover:bg-violet-400 focus:shadow-[0_0_0_2px] focus:shadow-violet-700 focus:outline-none'
              onClick={() => setOpen(false)}
              aria-label='Close'
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
