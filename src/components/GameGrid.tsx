import { SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGameQuery from "../hooks/useGameQuery";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";


interface Props{
  gameQuery: GameQuery;
}


const GameGrid = ({gameQuery}: Props) => {
  
  const skeletons = [1,2,3,4,5,6];

  // const {isLoading, data, error} = useGames(gameQuery);
  // if (error !== " ") return (<p className='text-danger'>error: {error}</p>)

  const {data, error, isLoading} = useGameQuery(gameQuery);
  if (error) return (<text className='text-danger'>error: {error.message}</text>)

  return (
    <>
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding="10px" spacing={7}>

        {isLoading? skeletons.map((skeleton) => 
        <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>): null}

        {data?.map((game) =>
          (<GameCardContainer key={game.id}>
             <GameCard game={game}/>
           </GameCardContainer>)
          )}
          
      </SimpleGrid>

    </>
  )
}

export default GameGrid
