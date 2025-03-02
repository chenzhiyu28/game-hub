import { useQuery } from '@tanstack/react-query';
import { Genre } from '../Entity/Genre';
import genres from '../data/genres';
import ms from 'ms';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>("genres");

export default function useGenresQuery() {
    // 0. initial data
    const cacheGenres: Genre[] = genres;

    // query object
    const query = useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: () => apiClient.getAll().then(res => res.data.results),
        staleTime: ms('24h'),
        initialData: cacheGenres,
    })

    return { data: query.data, error: query.error, isloading: query.isLoading };
}
