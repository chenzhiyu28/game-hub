import { useQuery } from '@tanstack/react-query';
import { Genre } from '../Entity/Genre';
import genres from '../data/genres';
import fetchData from '../services/api-client';
import ms from 'ms';


export default function useGenresQuery() {
    // 0. initial data
    const cacheGenres: Genre[] = genres;

    // query object
    const query = useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: () => fetchData<Genre>('/genres').then(res => res.results),
        staleTime: ms('24h'),
        initialData: cacheGenres
    })

    return { data: query.data, error: query.error, isloading: query.isLoading };
}
