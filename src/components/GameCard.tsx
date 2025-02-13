import { Card, Heading } from "@chakra-ui/react";

import { Games } from "./GameClient";

interface Game {
  game: Games;
}

function GameCard({ game }: Game) {
  return (
    <Card.Root>
      <Card.Body>
        <Heading>{game.backgroundImage}</Heading>
        <Card.Description>{game.name}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
