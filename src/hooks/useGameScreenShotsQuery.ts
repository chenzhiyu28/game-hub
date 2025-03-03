import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ScreenShot, { ScreenShotResponse } from "../Entity/ScreenShot";


const apiClient = new APIClient<ScreenShotResponse>("games");

export default function useScreenShots(gameId: number) {
    const query = useQuery<ScreenShot[], Error>({
        queryKey: ["screenshots", gameId],
        queryFn: () => apiClient.getWithExtraEndPoints(`${gameId}/screenshots`).then(res => res.data.results),
    })

    return query;
}
