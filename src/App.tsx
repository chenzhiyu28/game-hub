import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./Entity/Genre"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./Entity/Platform"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"


export interface GameQuery{
  genreID: number | undefined;
  genreName: string | undefined;
  platformID: number | undefined;
  platformName: string | undefined;
  sortOrder: string | undefined;
  searchText: string;
}

const App = () => {
  //const [chosenGenre, setGenre] = useState<Genre|null>(null)
  //const [selectedPlatform, setPlatform] = useState<Platform|null>(null)
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  const onClickGenre = (genre: Genre) => {
    setGameQuery({...gameQuery, genreID: genre.id, genreName: genre.name})
  }

  const onSelectSortOrder = (sortOrder: string) => {
    setGameQuery({...gameQuery, sortOrder})
  }

  const onInputSearchText = (searchText: string) => {
    setGameQuery({...gameQuery, searchText})
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
          <GenreList onSelectGenre={(gengre) => onClickGenre(gengre)}></GenreList>
        </GridItem>
      </Show>

      <GridItem area='main'>
        <Box paddingLeft={2.5}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack marginBottom={5}>
            <PlatformSelector 
              selectedPlatfrom={gameQuery.platformName} 
              onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformID: platform.id, platformName: platform.name})}/>
            <SortSelector onSelectSortOrder={onSelectSortOrder}/>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
      
    </Grid>

  )
}

export default App