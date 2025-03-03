import { useLocation } from "react-router-dom";
import useGameDetailedQuery from "../hooks/useGameDetailQuery";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableComponent from "../components/ExpandableComponent";
import GameAttributes from "../components/GameAttributes";


const GameDetailPage = () => {
  const location = useLocation();
  const id: number = location.state.id;
  

  // 重命名data 为game
  const {data: game, isLoading, error} = useGameDetailedQuery(id);

  {isLoading && <Spinner />}
  // if (error || !game) throw error;
  if (error || !game) return error;
  
  console.log(game);
  const description = game.description_raw;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableComponent>{description}</ExpandableComponent>
      <GameAttributes game={game}/>
    </>
  )
}

export default GameDetailPage