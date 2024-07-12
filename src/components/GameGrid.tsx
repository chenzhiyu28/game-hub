import useGames from "../hooks/useGames"
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Entity/Genre";
import { Platform } from "../Entity/Platform";


interface Props{
  selectedGenre: Genre|null;
  selectedPlatform: Platform|null;
}


const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
  const {isLoading, data, error} = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1,2,3,4,5,6];


  return (
    <>
      {error === " "? null: <p className='text-danger'>error: {error}</p>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding="10px" spacing={5}>

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
