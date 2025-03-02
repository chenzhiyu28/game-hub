import { useLocation } from "react-router-dom";
import useGameDetailedQuery from "../hooks/useGameDetailQuery";
import { Heading, Spinner } from "@chakra-ui/react";

const GameDetailPage = () => {
  const location = useLocation();
  const id: number = location.state.id;

  // 重命名data 为game
  const {data: game, isLoading, error} = useGameDetailedQuery(id);

  {isLoading && <Spinner />}

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <p>{game.description_raw}</p>
    </>
  )
}

export default GameDetailPage