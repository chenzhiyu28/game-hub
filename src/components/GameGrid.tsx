import { useGames } from "../hooks/useGames"
import { game } from "../Entity/Game";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
  const {isLoading, games, error} = useGames();
  const skeletons = [1,2,3,4,5,6];

  return (
    <>
      {error === " "? null: <p className='text-danger'>error: {error}</p>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding="10px" spacing={10}>
        {isLoading? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton}/>): null}
        {games.map((game: game) => (<GameCard key={game.id} game={game}/>))}
      </SimpleGrid>

    </>
  )
}

export default GameGrid
