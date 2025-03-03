export interface ScreenShotResponse {
    results: ScreenShot[];
}

export default interface ScreenShot {
    id: number;
    image: string;
    width: number;
    height: number;
}
