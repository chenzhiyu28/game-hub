export interface GameTrailerResponse {
    count: number;
    results: GameTrailer[];
}


export default interface GameTrailer {
    id: number;
    name: string;
    preview: string;
    data: { 480: string, max: string };
}

