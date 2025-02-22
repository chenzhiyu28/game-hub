import { useQuery } from '@tanstack/react-query'
import { GameQuery } from '../App'
import { Game } from '../Entity/Game'
import fetchData from '../services/api-client'

export default function useGameQuery(gameQuery: GameQuery) {

    function getGameParams(gameQuery: GameQuery) {
        return {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        }
    }

    // function fetchGame(gameQuery: GameQuery) {
    //     return apiClient.get<FetchResponse<Game>>(
    //         '/games',
    //         {
    //             params: {
    //                 genres: gameQuery.genre?.id,
    //                 parent_platforms: gameQuery.platform?.id,
    //                 ordering: gameQuery.sortOrder,
    //                 search: gameQuery.searchText
    //             }
    //         },
    //     ).then(response => response.data.results)
    // }

    return useQuery<Game[], Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => fetchData("/games", getGameParams(gameQuery)),
    })
}
