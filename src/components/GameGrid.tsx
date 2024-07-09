import { useGames } from "../hooks/useGames"
import { game } from "../Entity/Game";


const GameGrid = () => {
  const {games, error} = useGames();

  return (
    <>
      {error === " "? null: <p className='text-danger'>{error}</p>}
      <ul>
        {games.map((game: game) => (<li key={game.id}>{game.name}</li>))}
      </ul>
    </>

  )
}

export default GameGrid