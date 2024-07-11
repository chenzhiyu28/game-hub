import { game } from "../Entity/Game";
import useData from "./useData";


const useGames = () => useData<game>("/games");

export default useGames;