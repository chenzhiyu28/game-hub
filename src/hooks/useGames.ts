import { game } from "../Entity/Game";
import useData from "./useData";
import { GameQuery } from "../App";

const useGames = (gameQuery: GameQuery) =>
    useData<game>(
        "/games",
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id
            }
        },

        [gameQuery]
    );

export default useGames;
