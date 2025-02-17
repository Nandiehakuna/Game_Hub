import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "../hooks/useGame";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameClient() {
  const { games, error, isloading } = useGame();

  const loadings = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid column={{ sm: 1, md: 2, xl: 3, lg: 5 }}>
        {isloading &&
          loadings.map((loading) => (
            <GameCardContainer>
              <GameCardSkeleton key={loading} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          // <li key={game.id}>{game.name}</li>
          <GameCardContainer>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameClient;
