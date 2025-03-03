import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { Game } from "../Entity/Game"
import CriticScore from "./CriticScore"
import DefinitionItem from "./DefinitionItem"

interface Props {
    game: Game
}

const GameAttributes = ({game}: Props) => {

  return (
    <>
    <SimpleGrid columns={2} spacing={4} as="dl">

      <Box p={4}>
        <DefinitionItem term="platform">
          {game.parent_platforms.map(platform => 
              <Text>{platform.platform.name}</Text>
          )}
        </DefinitionItem>
      </Box>

      <Box p={4}>
        <DefinitionItem term="MetaScore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
      </Box>

      <Box p={4}>
        <DefinitionItem term="Genres">
          {game.genres.map(genre => 
            <Text>{genre.name}</Text>
          )}
        </DefinitionItem>
      </Box>

      <Box p={4}>
        <DefinitionItem term="MetaScore">
          {game.publishers.map(publisher => 
            <Text>{publisher.name}</Text>
          )}
        </DefinitionItem>
      </Box>

    </SimpleGrid>
    </>

  )
}

export default GameAttributes