import { post } from "@/types/types"
import { useState, useEffect } from "react"

interface FetchResponse {
  data: post[] | null
  loading: boolean
  error: Error | null
}

const useFetch = (url: string): FetchResponse => {
  const [data, setData] = useState<post[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da API")
        }
        const data = (await response.json()) as post[]

        if (isMounted) {
          setData(data)
        }
      } catch (error) {
        setError(error as Error) 
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch
