import { Genre } from "./Genre";
import { Platform } from "./Platform";
import publisher from "./Publisher";

// export interface Game {
//     id?: number;
//     slug?: string;
//     name?: string;
//     released?: string | null;
//     tba?: boolean;
//     background_image?: string;
//     rating?: number;
//     rating_top?: number;
//     ratings?: object;
//     ratings_count?: number;
//     reviews_text_count?: string;
//     added?: number;
//     added_by_status?: object;
//     metacritic?: number;
//     playtime?: number;
//     updated?: string;
//     parent_platforms?: { platform: Platform }[];
//     genres?: Genre[];
//     ordering?: string;
//     description_raw?: string | undefined;
// }


export interface Game {
    id: number;
    slug: string;
    name: string;
    released: string | null;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: object;
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    added_by_status: object;
    metacritic: number;
    playtime: number;
    updated: string;
    parent_platforms: { platform: Platform }[];
    genres: Genre[];
    ordering: string;
    publishers: publisher[];
    description_raw: string;
}