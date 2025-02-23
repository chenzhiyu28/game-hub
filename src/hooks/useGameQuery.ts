import { useInfiniteQuery } from '@tanstack/react-query'
import { GameQuery } from '../App'
import { Game } from '../Entity/Game'
import fetchData, { FetchResponse } from '../services/api-client'

export default function useGameQuery(gameQuery: GameQuery) {

    function getGameParams(gameQuery: GameQuery, pageParam: number) {
        return {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam,
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

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        // pageParam 来自 useInifiniteQuery 的默认参数
        queryFn: ({ pageParam = 1 }) => fetchData<Game>("/games", getGameParams(gameQuery, pageParam)),
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        },
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
    })
}
