import { Patient } from '@/types/Patient'
import initials from '@/utils/initials'
import { GlobeIcon, Pencil1Icon } from '@radix-ui/react-icons'
import { Avatar } from 'radix-ui'
import { useState } from 'react'
import { PatientModal } from './PatientModal'

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid gap-2 border border-solid rounded-2xl shadow-xl p-3 bg-gradient-to-br from-purple-300 to-pink-400 text-foreground w-full'>
      {children}
    </div>
  )
}

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  if (!children) {
    return <h1 className='text-2xl font-extrabold italic'>No Name Available</h1>
  }
  return <h1 className='text-2xl font-extrabold line-clamp-1'>{children}</h1>
}

const CardDescription = ({ children }: { children: string }) => {
  {
    const [isExpanded, setIsExpanded] = useState(false)

    if (!children.trim()) {
      return (
        <p className='text-gray-500 italic min-h-12'>
          No Description Available
        </p>
      )
    }

    return (
      <div>
        <p
          className={`text-gray-500 ${!isExpanded && 'line-clamp-2'} min-h-12`}
        >
          {children}
        </p>
        {children.length > 100 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='cursor-pointer text-blue-500 text-sm hover:underline'
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    )
  }
}

const CardId = ({ children }: { children: React.ReactNode }) => {
  return <span className='font-mono text-sm'>{children}</span>
}

const CardDate = ({ date }: { date: string }) => {
  const formattedDate = new Date(date).toDateString()
  return <span className='font-light text-sm'>{formattedDate}</span>
}

const CardWebsite = ({ url }: { url: string }) => {
  return (
    <a className='w-fit' href={url} target='_blank' rel='noopener noreferrer'>
      <GlobeIcon />
    </a>
  )
}

export const PatientCard = ({
  patient,
  onEdit,
}: {
  patient: Patient
  onEdit: (patient: Patient) => void
}) => {
  const [showModal, setShowModal] = useState(false)
  const { createdAt, name, avatar, description, website, id } = patient

  return (
    <>
      <CardContainer>
        <div className='flex items-center justify-between'>
          <div className='flex gap-4 items-center'>
            <div className='flex-none'>
              <Avatar.Root className='inline-flex items-center justify-center align-middle overflow-hidden select-none w-[45px] h-[45px] rounded-full bg-black/[0.03] border border-solid'>
                <Avatar.Image
                  className='w-full h-full object-cover border-inherit'
                  src={avatar}
                  alt={name}
                />
                <Avatar.Fallback
                  className='w-full h-full flex items-center justify-center text-[15px] leading-none font-medium'
                  delayMs={600}
                >
                  {initials(name)}
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
            <CardTitle>{name}</CardTitle>
          </div>
          <button
            className='cursor-pointer p-2 bg-violet-300 hover:bg-violet-400 hover:opacity-90 rounded'
            onClick={() => setShowModal(true)}
          >
            <Pencil1Icon></Pencil1Icon>
          </button>
        </div>
        <CardDescription>{description}</CardDescription>
        <CardWebsite url={website}></CardWebsite>
        <div className='flex justify-between'>
          <CardDate date={createdAt} />
          <CardId>ID: {id}</CardId>
        </div>
      </CardContainer>
      <PatientModal
        patient={patient}
        open={showModal}
        setOpen={setShowModal}
        onSave={(patient) => {
          onEdit(patient)
        }}
      />
    </>
  )
}
