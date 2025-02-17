import { Card, Skeleton } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card.Header width={"300px"}>
      <Skeleton height={"200px"} />

      <Card.Body>
        <Skeleton />
      </Card.Body>
    </Card.Header>
  );
}
