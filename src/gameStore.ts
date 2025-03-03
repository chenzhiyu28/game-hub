import { create } from "zustand";
import { Game } from "./Entity/Game";

interface gameStore {
    game?: Game | undefined;
}


const useGameStore = create<gameStore>((() => ({
    game: undefined,
})))


export default useGameStore;