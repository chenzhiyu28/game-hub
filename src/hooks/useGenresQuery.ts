import { useQuery } from '@tanstack/react-query';
import { Genre } from '../Entity/Genre';
import fetchData, { FetchResponse } from '../services/api-client';
import genres from '../data/genres';


export default function useGenresQuery() {
    // 0. initial data
    const cacheGenres: Genre[] = genres;

    // query object
    const query = useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: () => fetchData<Genre>('/genres').then(res => res.results),
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: cacheGenres
    })

    return { data: query.data, error: query.error, isloading: query.isLoading };
}
