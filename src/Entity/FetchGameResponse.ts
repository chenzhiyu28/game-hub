import { Game } from "./Game";

export interface fetchGameResponse {
    count: number;
    next: string;
    previous: string;
    results: Game[];
}