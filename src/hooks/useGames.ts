import { useEffect, useState } from "react";
import { game } from "../Entity/Game";
import apiClient from "../services/api-client";
import { fetchGameResponse } from "../Entity/FetchGameResponse";
import { CanceledError } from "axios";


export const useGames = () => {
    const [games, setGames] = useState<game[]>([]);
    const [error, setError] = useState(" ");
    const controller = new AbortController();

    const fetchGames = () => {
        apiClient.get<fetchGameResponse>("/games", { signal: controller.signal })
            .then(res => { setGames(res.data.results) })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            })

        return () => controller.abort();
    }

    useEffect(fetchGames, [])

    return { games, error, apiClient }
}