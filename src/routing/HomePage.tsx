import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {



  return (
    <Grid 
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`
    }}
      templateColumns={{
        base: "1fr", // 1 fraction (all space avaliable)
        lg: "20% 1fr"
      }}
    >

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

export default HomePage