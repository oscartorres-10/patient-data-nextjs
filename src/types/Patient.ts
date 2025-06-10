import { z } from 'zod/v4'

export type Patient = {
  createdAt: string
  name: string
  avatar: string
  description: string
  website: string
  id: string
}

export const PatientSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(60)
    .regex(/^[^\d]+$/, { message: 'Name cannot contain numbers' }),
  description: z.string().min(5).max(1000),
  website: z.url(),
})
