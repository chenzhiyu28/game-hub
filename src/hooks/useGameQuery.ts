import { Game } from '../Entity/Game'
import apiClient, { FetchResponse } from '../services/api-client'
import { useQuery } from '@tanstack/react-query'
import { GameQuery } from '../App'

export default function useGameQuery(gameQuery: GameQuery) {

    function fetchGame(gameQuery: GameQuery) {
        return apiClient.get<FetchResponse<Game>>(
            '/games',
            {
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText
                }
            },
        ).then(response => response.data.results)
    }

    return useQuery<Game[], Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => fetchGame(gameQuery),
    })
}
