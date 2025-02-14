import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "../hooks/useGame";

function GameClient() {
  const { games, error } = useGame();

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
