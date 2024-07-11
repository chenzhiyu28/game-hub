export interface Platform {
    id: number;
    name: string;
    slug: string;
    parentPlatforms: { platform: Platform }[]
}