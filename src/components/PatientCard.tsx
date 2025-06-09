import { Patient } from '@/types/Patient'
import initials from '@/utils/initials'
import { Avatar } from 'radix-ui'
import { GlobeIcon } from '@radix-ui/react-icons'

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid gap-2 border border-solid rounded shadow-2xl p-3 w-lg'>
      {children}
    </div>
  )
}

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className='text-2xl font-extrabold'>{children}</h1>
}

const CardId = ({ children }: { children: React.ReactNode }) => {
  return <span className='font-mono text-sm'>{children}</span>
}

const CardDate = ({ date }: { date: string }) => {
  const formattedDate = new Date(date).toDateString()
  return <span className='font-mono text-sm'>{formattedDate}</span>
}

const CardDescription = ({ children }: { children: string }) => {
  return <p className='text-gray-400'>{children}</p>
}

const CardWebsite = ({ url }: { url: string }) => {
  return (
    <a className='' href={url} target='_blank' rel='noopener noreferrer'>
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
          {/* TODO continue here fixing avatar colors */}
          <Avatar.Root className='inline-flex items-center justify-center align-middle overflow-hidden select-none w-[45px] h-[45px] rounded-full bg-black/[0.03]'>
            <Avatar.Image
              className='w-full h-full object-cover border-inherit'
              src={avatar}
              alt='User avatar'
            />
            <Avatar.Fallback
              className='w-full h-full flex items-center justify-center bg-white text-[--violet-11] text-[15px] leading-none font-medium'
              delayMs={600}>
              {initials(name)}
            </Avatar.Fallback>
          </Avatar.Root>
        </div>
        <CardDescription>{description}</CardDescription>
        <CardWebsite url={website}></CardWebsite>
        <CardDate date={createdAt} />
        <CardId>ID:{id}</CardId>
      </CardContainer>
    </>
  )
}
