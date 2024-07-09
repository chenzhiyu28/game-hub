import React, { useEffect, useState } from 'react'
import { game } from '../Entity/Game'
import { fetchGameResponse } from '../Entity/FetchGameResponse';
import apiClient from '../services/api-client';


const GameGrid = () => {
  const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState(" ");

  const fetchGames = () => {
    apiClient.get<fetchGameResponse>("/games")
             .then(res => {setGames(res.data.results)})
             .catch(err => {setError(err.message)})
  }

  useEffect(fetchGames, [])

  return (
    <>
      {error === " "? null: <p className='text-danger'>{error}</p>}
      <ul>
        {games.map((game) => (<li key={game.id}>{game.name}</li>))}
      </ul>
    </>

  )
}

export default GameGrid