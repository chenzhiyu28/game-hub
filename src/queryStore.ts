import { create } from "zustand";
import { Genre } from "./Entity/Genre";
import { Platform } from "./Entity/Platform";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface GameQuery {
    genreID?: number | undefined;
    genreName?: string | undefined;
    platformID?: number | undefined;
    platformName?: string | undefined;
    sortOrder?: string | undefined;
    searchText?: string | undefined;
}


interface GameQueryStore {
    gameQuery: GameQuery;
    setGenre: (genre: Genre) => void;
    setPlatform: (platform: Platform) => void;
    setOrder: (order: string) => void;
    setSearchText: (text: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(((set) => ({
    gameQuery: {},
    // set 函数的返回值是一个新的 state object。会与当前state合并，更新state。
    setGenre: (genre: Genre) => set(
        (store) => ({ gameQuery: { ...store.gameQuery, genreID: genre.id, genreName: genre.name } })
    ),
    setPlatform: (platform: Platform) => set(
        (store) => ({ gameQuery: { ...store.gameQuery, platformID: platform.id, platformName: platform.name } })
    ),
    setOrder: (order: string) => set(
        (store) => ({ gameQuery: { ...store.gameQuery, sortOrder: order } })),
    // setSearchText: (text: string) => set((store) => ({gameQuery: { ...store.gameQuery, searchText: text }})),  // only update searchText
    setSearchText: (text: string) => set(
        () => ({ gameQuery: { searchText: text } })
    ),
})))


if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool("gameQueryStore", useGameQueryStore)
}

export default useGameQueryStore;