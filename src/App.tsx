import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import GameGrid from "./components/GameGrid"
import GameHeading from "./components/GameHeading"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"


const App = () => {
  //const [chosenGenre, setGenre] = useState<Genre|null>(null)
  //const [selectedPlatform, setPlatform] = useState<Platform|null>(null)
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  // const onClickGenre = (genre: Genre) => {
  //   setGameQuery({...gameQuery, genreID: genre.id, genreName: genre.name})
  // }

  // const onSelectSortOrder = (sortOrder: string) => {
  //   setGameQuery({...gameQuery, sortOrder})
  // }

  // const onInputSearchText = (searchText: string) => {
  //   setGameQuery({...gameQuery, searchText})
  // }

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
        <NavBar/>
      </GridItem>

      <Show above="lg">
        <GridItem area='aside' padding={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area='main'>
        <Box paddingLeft={2.5}>
          <GameHeading />
          <HStack marginBottom={5}>
            <PlatformSelector />
            <SortSelector/>
          </HStack>
        </Box>
        <GameGrid/>
      </GridItem>
      
    </Grid>

  )
}


export default App