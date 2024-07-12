import { game } from "../Entity/Game";
import useData from "./useData";
import { Genre } from "../Entity/Genre";

const useGames = (selectedGengre: Genre | null) =>
    useData<game>("/games", { params: { genres: selectedGengre?.id } }, [selectedGengre?.id]);

export default useGames;