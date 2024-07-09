import { game } from "./Game";

export interface fetchGameResponse {
    count: number;
    next: string;
    previous: string;
    results: game[];
}