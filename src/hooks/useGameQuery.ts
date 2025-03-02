import { useInfiniteQuery } from '@tanstack/react-query'
import { Game } from '../Entity/Game'
import { FetchResponse } from '../services/api-client'
import ms from 'ms'
import useGameQueryStore, { GameQuery } from '../queryStore'
import APIClient from '../services/api-client'


const apiClient = new APIClient<Game>("games");

export default function useGameQuery() {
    const gameQuery = useGameQueryStore(s => s.gameQuery);

    function getGameParams(gameQuery: GameQuery, pageParam: number) {
        return {
            params: {
                genres: gameQuery.genreID,
                parent_platforms: gameQuery.platformID,
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
        queryFn: ({ pageParam = 1 }) => apiClient.getAll(getGameParams(gameQuery, pageParam)).then(response => response.data),
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        },
        staleTime: ms("24h"),
    })
}
