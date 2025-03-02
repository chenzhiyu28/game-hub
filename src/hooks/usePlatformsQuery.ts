import { useQuery } from '@tanstack/react-query';
import { Platform } from '../Entity/Platform';

import ms from 'ms';
import platforms from '../data/platforms';
import APIClient from '../services/api-client';


const apiClient = new APIClient<Platform>("platforms/lists/parents")

export default function usePlatformsQuery() {
    const cachePlatforms: Platform[] = platforms;

    const platformQuery = useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: () => apiClient.getAll().then(res => res.data.results),
        staleTime: ms("24h"),
        initialData: cachePlatforms
    })
    return platformQuery;
}
