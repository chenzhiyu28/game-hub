import { Game } from "../../Entity/Game";
import useData from "./useData";
import { GameQuery } from "../../App";

const useGames = (gameQuery: GameQuery) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        },
        [gameQuery]
    );

export default useGames;
