import { useQuery } from '@tanstack/react-query';
import { Platform } from '../Entity/Platform';
import fetchData from '../services/api-client';

import platforms from '../data/platforms';
import ms from 'ms';

export default function usePlatformsQuery() {
    const cachePlatforms: Platform[] = platforms;

    const platformQuery = useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: () => fetchData<Platform>("/platforms/lists/parents").then(res => res.results),
        staleTime: ms("24h"),
        initialData: cachePlatforms
    })
    return platformQuery;
}
