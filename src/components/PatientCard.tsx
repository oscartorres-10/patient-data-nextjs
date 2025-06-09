import { Patient } from '@/types/Patient'

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
      PatientCard
      <div>
        <div>
          <strong>ID:</strong> {id}
        </div>
        <div>
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>Created At:</strong> {createdAt}
        </div>
        <div>
          <strong>Avatar:</strong> {avatar}
        </div>
        <div>
          <strong>Description:</strong> {description}
        </div>
        <div>
          <strong>Website:</strong> {website}
        </div>
      </div>
    </>
  )
}
