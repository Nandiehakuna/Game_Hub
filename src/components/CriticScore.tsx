import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 95 ? "green" : score <= 75 ? "red" : "";

  return (
    <Badge colorScheme={color} borderRadius={"15"}>
      {score}
    </Badge>
  );
}

export default CriticScore;
