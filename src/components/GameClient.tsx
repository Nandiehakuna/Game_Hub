import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "../hooks/useGame";
import GameCardSkeleton from "./GameCardSkeleton";

function GameClient() {
  const { games, error, isloading } = useGame();

  const loadings = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid column={{ sm: 1, md: 2, xl: 3, lg: 5 }}>
        {isloading &&
          loadings.map((loading) => <GameCardSkeleton key={loading} />)}
        {games.map((game) => (
          // <li key={game.id}>{game.name}</li>
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameClient;
