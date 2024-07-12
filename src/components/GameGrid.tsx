import useGames from "../hooks/useGames"
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Entity/Genre";


interface Props{
  selectedGenre: Genre|null;
}


const GameGrid = ({selectedGenre}: Props) => {
  const {isLoading, data, error} = useGames(selectedGenre);
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
