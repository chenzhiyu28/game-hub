import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenerList from "./components/GenerList"
import { useState } from "react"
import { Genre } from "./Entity/Genre"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./Entity/Platform"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"


export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
  searchText: string;
}

const App = () => {
  //const [chosenGenre, setGenre] = useState<Genre|null>(null)
  //const [selectedPlatform, setPlatform] = useState<Platform|null>(null)
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)


  const onClickGenre = (genre: Genre) => {
    setGameQuery({...gameQuery, genre})
    console.log(genre)
  }

  const onSelectSortOrder = (sortOrder: string) => {
    setGameQuery({...gameQuery, sortOrder})
    console.log(sortOrder)
  }

  const onInputSearchText = (searchText: string) => {
    setGameQuery({...gameQuery, searchText})
    console.log(searchText)
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
        <NavBar onSearch={(searchText) => onInputSearchText(searchText)}/>
      </GridItem>

      <Show above="lg">
        <GridItem area='aside' padding={5}>
          <GenerList onSelectGenre={(gengre) => onClickGenre(gengre)}></GenerList>
        </GridItem>
      </Show>

      <GridItem area='main'>
        <Box paddingLeft={2.5}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack marginBottom={5}>
            <PlatformSelector 
            selectedPlatfrom={gameQuery.platform} 
            onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
            <SortSelector onSelectSortOrder={onSelectSortOrder}/>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
      
    </Grid>

  )
}

export default App