import { post } from "@/types/types";
import { useState, useEffect } from "react";

interface FetchResponse {
  data: post[];
  loading: boolean;
  error: Error ;
}

const useFetch = (url: string):FetchResponse => {
  const [data, setData] = useState<post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da API");
        }
        const data = (await response.json()) as post[];
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
