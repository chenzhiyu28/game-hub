import useGames from "../hooks/useGames"
import { game } from "../Entity/Game";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


const GameGrid = () => {
  const {isLoading, data, error} = useGames();
  const skeletons = [1,2,3,4,5,6];

  return (
    <>
      {error === " "? null: <p className='text-danger'>error: {error}</p>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding="10px" spacing={10}>

        {isLoading? skeletons.map((skeleton) => 
        <GameCardContainer><GameCardSkeleton key={skeleton}/></GameCardContainer>): null}

        {data.map((game: game) => 
          (<GameCardContainer><GameCard key={game.id} game={game}/></GameCardContainer>))}
          
      </SimpleGrid>

    </>
  )
}

export default GameGrid
