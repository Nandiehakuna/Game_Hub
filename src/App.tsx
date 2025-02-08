import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
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
