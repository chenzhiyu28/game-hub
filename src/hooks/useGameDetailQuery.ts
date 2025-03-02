import { useQuery } from "@tanstack/react-query";
import { Game } from "../Entity/Game"
import APIClient from "../services/api-client";


const apiClient = new APIClient<Game>("games")

export default function useGameDetailedQuery(id: number) {

    const query = useQuery<Game, Error>({
        queryKey: ["game", id],
        queryFn: () => apiClient.get(id),
    })

    return query;
}
