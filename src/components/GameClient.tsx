import { useEffect, useState } from "react";
import ApiClient from "../ApiClient";

interface games {
  id: string;
  name: string;
}

interface fetchGameResponse {
  count: 0;
  results: games[];
}

function GameClient() {
  const [games, setGames] = useState<games[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    ApiClient.get<fetchGameResponse>("").then((res) =>
      setGames(res.data.results)
    );
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameClient;
