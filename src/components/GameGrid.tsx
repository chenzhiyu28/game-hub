import { useGames } from "../hooks/useGames"
import { game } from "../Entity/Game";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";


const GameGrid = () => {
  const {isLoading, games, error} = useGames();

  return (
    <>
      {error === " "? null: <p className='text-danger'>error: {error}</p>}
      {isLoading? <div className="spinner-border">loading</div>: null}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding="10px" spacing={10}>
        {games.map((game: game) => (<GameCard key={game.id} game={game}/>))}
      </SimpleGrid>

    </>
  )
}

export default GameGrid
