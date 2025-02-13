import { useEffect, useState } from "react";
import ApiClient from "../ApiClient";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

export interface Games {
  id: string;
  name: string;
  backgroundImage: string;
}

interface fetchGameResponse {
  count: 0;
  results: Games[];
}

function GameClient() {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    ApiClient.get<fetchGameResponse>("").then((res) =>
      setGames(res.data.results)
    );
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid column={{ sm: 1, md: 2, xl: 3, lg: 5 }}>
        {games.map((game) => (
          // <li key={game.id}>{game.name}</li>
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameClient;
