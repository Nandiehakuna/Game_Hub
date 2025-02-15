import { Card, Heading, HStack } from "@chakra-ui/react";

import { Games } from "../hooks/useGame";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root>
      <Card.Body>
        <Heading>{game.backgroundImage}</Heading>
        <Card.Description>{game.name}</Card.Description>
        <HStack justifyContent={"space-between"}>
          <PlatformIconsList
            platforms={game.parent_Platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.miniatricScore} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
