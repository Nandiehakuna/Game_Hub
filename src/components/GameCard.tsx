import { Card, Heading } from "@chakra-ui/react";

import { Games } from "../hooks/useGame";
import PlatformIconsList from "./PlatformIconsList";
interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root>
      <Card.Body>
        <Heading>{game.backgroundImage}</Heading>
        <Card.Description>{game.name}</Card.Description>
        <PlatformIconsList
          platforms={game.parent_Platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
