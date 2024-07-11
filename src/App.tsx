import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenerList from "./components/GenerList"


const App = () => {

  return (
    <Grid 
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: "1fr", // 1 fraction (all space avaliable)
        lg: "20% 1fr"
      }}
    >
      <GridItem area='nav'> 
        <NavBar></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area='aside' padding={5}>
          <GenerList />
        </GridItem>
      </Show>

      <GridItem area='main'>
        <GameGrid></GameGrid>
      </GridItem>
      
    </Grid>

  )
}

export default App