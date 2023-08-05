import { useState, useEffect } from 'react';

interface FetchResponse<Data> {
  data: Data | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <Data>(url: string): FetchResponse<Data> => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const data = await response.json() as Data;
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
