import useGames from "../hooks/useGames"
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";


interface Props{
  gameQuery: GameQuery;
}


const GameGrid = ({gameQuery}: Props) => {
  const {isLoading, data, error} = useGames(gameQuery);
  const skeletons = [1,2,3,4,5,6];

  if (error !== " ") return (<p className='text-danger'>error: {error}</p>)

  return (
    <>
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding="10px" spacing={7}>

        {isLoading? skeletons.map((skeleton) => 
        <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>): null}

        {data.map((game) =>
          (<GameCardContainer key={game.id}>
             <GameCard game={game}/>
           </GameCardContainer>)
          )}
          
      </SimpleGrid>

    </>
  )
}

export default GameGrid
