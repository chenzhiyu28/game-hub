import { Platform } from "./Platform";

export interface game {
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
    metacritic: number | null;
    playtime: number;
    suggestion_count: number;
    updated: string;
    parent_platforms: { platform: Platform }[];
}