import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem area="main" bg="red">
        main
      </GridItem>

      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        bg="yellow.300"
      >
        aside
      </GridItem>
    </Grid>
  );
}

export default App;
