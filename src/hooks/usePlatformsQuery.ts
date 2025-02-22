import { useQuery } from '@tanstack/react-query'
import { Platform } from '../Entity/Platform'
import apiClient, { FetchResponse } from '../services/api-client'

import platforms from '../data/platforms'

export default function usePlatformsQuery() {

    function fetchPlatforms() {
        return apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").
            then(response => response.data.results)
    }

    const cachePlatforms: Platform[] = platforms;

    const platformQuery = useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: fetchPlatforms,
        staleTime: 60 * 60 * 1000, // 1 hour
        initialData: cachePlatforms
    })
    return platformQuery;
}
