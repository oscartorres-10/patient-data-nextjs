'use client'
import { Patient } from "@/types/Patient"
import { useCallback, useEffect, useState } from "react"

const PATIENT_DATA_URL = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users'

export const usePatients = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [result, setResult] = useState<Patient[] | null>(null)

  useEffect(() => {
    const getPatients = async () => {
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
    getPatients()
  }, [])

  const handleEditPatient = useCallback((patient: Patient) => {
    setResult((prevResult) => {
      if (!prevResult) return null
      return prevResult.map(p => 
        p.id === patient.id 
          ? { ...p, ...patient } 
          : p
      )
    })
  }, [setResult])

  const handleAddPatient = useCallback((patient: Patient) => {
    setResult((prevResult) => {
      if (!prevResult) return [patient]
      return [
        ...prevResult,
        patient
      ]
    })
  }, [setResult])

  return { loading, result, handleEditPatient, handleAddPatient }
}
