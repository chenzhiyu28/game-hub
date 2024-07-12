import { game } from "../Entity/Game";
import useData from "./useData";
import { Genre } from "../Entity/Genre";
import { Platform } from "../Entity/Platform";

const useGames = (selectedGengre: Genre | null, selectedPlatform: Platform | null) =>
    useData<game>(
        "/games",
        { params: { genres: selectedGengre?.id, platforms: selectedPlatform?.id } },
        [selectedGengre?.id, selectedPlatform?.id]
    );

export default useGames;
