import { useQuery } from '@tanstack/react-query';
import { Platform } from '../Entity/Platform';
import fetchData from '../services/api-client';

import platforms from '../data/platforms';

export default function usePlatformsQuery() {
    const cachePlatforms: Platform[] = platforms;

    const platformQuery = useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: () => fetchData<Platform>("/platforms/lists/parents").then(res => res.results),
        staleTime: 60 * 60 * 1000, // 1 hour
        initialData: cachePlatforms
    })
    return platformQuery;
}
