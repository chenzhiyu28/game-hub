import { useQuery } from '@tanstack/react-query'
import { Genre } from '../Entity/Genre'
import apiClient from '../services/api-client'


export default function useGenresQuery() {
    // 1. query function
    function getGenres() {
        return apiClient.get<{ results: Genre[] }>('/genres').
            then(reponse => reponse.data.results);
    }

    // query object
    const query = useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: getGenres,
    })

    return { data: query.data, error: query.error, isloading: query.isLoading };
}
