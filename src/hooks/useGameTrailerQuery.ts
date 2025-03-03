import { useQuery } from "@tanstack/react-query";
import GameTrailer, { GameTrailerResponse } from "../Entity/GameTrailer";
import APIClient from "../services/api-client";

const apiClient = new APIClient<GameTrailerResponse>("games");

export default function useGameTrailerQuery(id: string) {
    const query = useQuery<GameTrailer[], Error>({
        queryKey: ["game", id],
        queryFn: () => apiClient.getWithExtraEndPoints(`${id}/movies`).then(res => res.data.results),
    })

    return query;
}