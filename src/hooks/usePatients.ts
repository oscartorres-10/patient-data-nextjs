'use client'
import { Patient } from "@/types/Patient"
import { useEffect, useState } from "react"

const PATIENT_DATA_URL = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users'

export const usePatients = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [result, setResult] = useState<Patient[] | null>(null)

  useEffect(() => {
    const getWorkflows = async () => {
      try {
        setLoading(true)
        const response = await fetch(PATIENT_DATA_URL)
        const result = await response.json()
        setResult(result)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getWorkflows()
  }, [])

  return { loading, result }
}
