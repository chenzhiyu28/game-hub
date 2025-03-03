import { SimpleGrid, Text } from "@chakra-ui/react"
import { Game } from "../Entity/Game"
import CriticScore from "./CriticScore"
import DefinitionItem from "./DefinitionItem"

interface Props {
    game: Game
}

const GameAttributes = ({game}: Props) => {

  return (
    <SimpleGrid columns={2} spacing={4} as="dl">

        <DefinitionItem term="platform">
          {game.parent_platforms.map(platform => 
              <Text key={platform.platform.id}>{platform.platform.name}</Text>
          )}
        </DefinitionItem>

        <DefinitionItem term="MetaScore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>

        <DefinitionItem term="Genres">
          {game.genres.map(genre => 
            <Text key={genre.id}>{genre.name}</Text>
          )}
        </DefinitionItem>

        <DefinitionItem term="MetaScore">
          {game.publishers.map(publisher => 
            <Text key={publisher.id}>{publisher.name}</Text>
          )}
        </DefinitionItem>

    </SimpleGrid>
  )
}

export default GameAttributes