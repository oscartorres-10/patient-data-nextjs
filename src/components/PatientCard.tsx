import { Patient } from '@/types/Patient'
import initials from '@/utils/initials'
import { GlobeIcon } from '@radix-ui/react-icons'
import { Avatar } from 'radix-ui'
import { useState } from 'react'

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid gap-2 border border-solid rounded-2xl shadow-2xl p-3 w-lg bg-gradient-to-br from-purple-300 to-pink-400 text-foreground'>
      {children}
    </div>
  )
}

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  if (!children) {
    return <h1 className='text-2xl font-extrabold italic'>No Name Available</h1>
  }
  return <h1 className='text-2xl font-extrabold'>{children}</h1>
}

const CardDescription = ({ children }: { children: string }) => {
  {
    if (!children.trim()) {
      return (
        <p className='text-gray-500 italic min-h-12'>
          No Description Available
        </p>
      )
    }
    const [isExpanded, setIsExpanded] = useState(false)
    return (
      <div>
        <p
          className={`text-gray-500 ${!isExpanded && 'line-clamp-2'} min-h-12`}>
          {children}
        </p>
        {children.length > 100 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='cursor-pointer text-blue-500 text-sm hover:underline'>
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
  createdAt,
  name,
  avatar,
  description,
  website,
  id,
}: Patient) => {
  return (
    <>
      <CardContainer>
        <div className='flex justify-between items-center'>
          <CardTitle>{name}</CardTitle>
          <Avatar.Root className='inline-flex items-center justify-center align-middle overflow-hidden select-none w-[45px] h-[45px] rounded-full bg-black/[0.03] border border-solid'>
            <Avatar.Image
              className='w-full h-full object-cover border-inherit'
              src={avatar}
              alt={name}
            />
            <Avatar.Fallback
              className='w-full h-full flex items-center justify-center text-[15px] leading-none font-medium'
              delayMs={600}>
              {initials(name)}
            </Avatar.Fallback>
          </Avatar.Root>
        </div>
        <CardDescription>{description}</CardDescription>
        <CardWebsite url={website}></CardWebsite>
        <div className='flex justify-between'>
          <CardDate date={createdAt} />
          <CardId>ID: {id}</CardId>
        </div>
      </CardContainer>
    </>
  )
}
