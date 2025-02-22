import { useQuery } from '@tanstack/react-query'
import { Genre } from '../Entity/Genre'
import apiClient, { FetchResponse } from '../services/api-client'

import genres from '../data/genres';


export default function useGenresQuery() {
    // 0. initial data
    const cacheGenres: Genre[] = genres;

    // 1. query function
    function getGenres() {
        return apiClient.get<FetchResponse<Genre>>('/genres').
            then(reponse => reponse.data.results);
    }

    // query object
    const query = useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: getGenres,
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: cacheGenres
    })

    return { data: query.data, error: query.error, isloading: query.isLoading };
}
