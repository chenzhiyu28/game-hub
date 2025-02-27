import { Box, Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQuery from "../hooks/useGameQuery";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
  // const {isLoading, data, error} = useGames(gameQuery);
  // if (error !== " ") return (<p className='text-danger'>error: {error}</p>)


  const skeletons = [1,2,3,4,5,6];

  const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage} = useGameQuery();

  
  if (error) return (<text className='text-danger'>error: {error.message}</text>)

  const fetchGamesCount = data?.pages.reduce((acc, page) => acc + page.count, 0) || 0;

  return (
    <Box padding="10px">
      <InfiniteScroll
        dataLength = {fetchGamesCount}
        hasMore = {!!hasNextPage}
        next = {() => fetchNextPage()}
        loader = {<Spinner />}
      >
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
        </InfiniteScroll>
      </Box>
  )
}

export default GameGrid
