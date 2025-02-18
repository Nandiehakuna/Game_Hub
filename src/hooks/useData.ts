import { useEffect, useState } from "react";
import ApiClient from "../ApiClient";

interface FetchGameResponse<T> {
  count: 0;
  results: T[];
}
export default function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    ApiClient.get<FetchGameResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
    setIsLoading(false);
  }, []);
  return { isLoading, data, error };
}
