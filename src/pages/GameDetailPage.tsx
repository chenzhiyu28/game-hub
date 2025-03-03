import { useLocation } from "react-router-dom";
import useGameDetailedQuery from "../hooks/useGameDetailQuery";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableComponent from "../components/ExpandableComponent";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import ScreenShots from "../components/ScreenShots";


const GameDetailPage = () => {
  const location = useLocation();
  const id: number = location.state.id;
  

  // 重命名data 为game
  const {data: game, isLoading, error} = useGameDetailedQuery(id);

  {isLoading && <Spinner />}
  // if (error || !game) throw error;
  if (error || !game) return <p>{error?.message}</p>;
  
  const description = game.description_raw;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableComponent>{description}</ExpandableComponent>
          <GameAttributes game={game}/>
        </GridItem>

        <GridItem>
          <GameTrailer id={game.id}/>
          <ScreenShots id={game.id}/>
        </GridItem>
      </SimpleGrid>

    </>
  )
}

export default GameDetailPage