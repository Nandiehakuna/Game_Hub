import { useEffect, useState } from "react";
import ApiClient from "../ApiClient";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}
export interface Games {
  id: string;
  name: string;
  backgroundImage: string;
  parent_Platforms: { platform: Platform }[];
  miniatricScore: number;
}

interface fetchGameResponse {
  count: 0;
  results: Games[];
}

export default function useGame() {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState(false);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiClient.get<fetchGameResponse>("")
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
    setLoading(false);
  }, []);
  return { games, error, isloading };
}
