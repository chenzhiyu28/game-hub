import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenerList from "./components/GenerList"
import { useState } from "react"
import { Genre } from "./Entity/Genre"
import PlatformSelector from "./components/PlatformSelector"


const App = () => {
  const [chosenGenre, setGenre] = useState<Genre|null>(null)
  const onClickGenre = (genre: Genre) => {
    setGenre(genre)
    console.log(genre)
  }

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
          <GenerList onSelectGenre={(gengre) => onClickGenre(gengre)}></GenerList>
        </GridItem>
      </Show>

      <GridItem area='main'>
        <PlatformSelector />
        <GameGrid selectedGenre={chosenGenre}/>
      </GridItem>
      
    </Grid>

  )
}

export default App