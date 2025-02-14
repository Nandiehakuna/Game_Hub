import { useEffect, useState } from "react";
import ApiClient from "../ApiClient";

export interface Games {
  id: string;
  name: string;
  backgroundImage: string;
}

interface fetchGameResponse {
  count: 0;
  results: Games[];
}

export default function useGame() {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    ApiClient.get<fetchGameResponse>("")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return { games, error };
}
