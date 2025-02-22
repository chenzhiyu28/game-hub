import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGameQuery from "../hooks/useGameQuery";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";


interface Props{
  gameQuery: GameQuery;
}


const GameGrid = ({gameQuery}: Props) => {
  
  const skeletons = [1,2,3,4,5,6];

  // const {isLoading, data, error} = useGames(gameQuery);
  // if (error !== " ") return (<p className='text-danger'>error: {error}</p>)

  const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage} = useGameQuery(gameQuery);
  if (error) return (<text className='text-danger'>error: {error.message}</text>)

  return (
    <Box padding="10px">
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={7}>

        {isLoading? skeletons.map((skeleton) => 
        <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>): null}

        {data?.pages.map((page) =>(
          page.results.map((game, index) =>(
            <GameCardContainer key={index}>
              <GameCard key={game.id} game={game}/>
            </GameCardContainer>
          ))
        ))}

      </SimpleGrid>
      
      {hasNextPage && <Button className="btn btn-primary" marginY={5} onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
        }    
      </Box>
  )
}

export default GameGrid
