import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

// axios.create({
//     baseURL: "https://api.rawg.io/api",
//     params: {
//         key: "d5813d3966db44e9b6e25b42b7ba36ad"
//     }
// })


// const axiosInstance = axios.create({
//     baseURL: "https://api.rawg.io/api",
//     params: {
//         key: "d5813d3966db44e9b6e25b42b7ba36ad"
//     }
// })


// class apiClient<T> {
//     private client = axiosInstance;

//     public fetch<T>(endpoint: string, requestConfig?: AxiosRequestConfig) {
//         return this.client.get<FetchResponse<T>>(endpoint, { ...requestConfig }).
//             then(response => response.data.results);
//     }
// }

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "d5813d3966db44e9b6e25b42b7ba36ad"
    }
});


class APIClient<T> {
    private endPoint: string;


    constructor(endPoint: string) {
        this.endPoint = endPoint;
    }

    public getAll(requestConfig?: AxiosRequestConfig) {
        return axiosInstance.get<FetchResponse<T>>(this.endPoint, { ...requestConfig }).
            then(response => response.data);;
    }

    public get(id: number | string) {
        return axiosInstance.get<T>(this.endPoint + "/" + id).
            then(response => response.data);
    }
}

export default APIClient;



// export default function fetchData<T>(endpoint: string, requestConfig?: AxiosRequestConfig) {
//     return axios.create({
//         baseURL: "https://api.rawg.io/api",
//         params: {
//             key: "d5813d3966db44e9b6e25b42b7ba36ad"
//         }
//     }).get<FetchResponse<T>>(endpoint, { ...requestConfig }).
//         then(response => response.data);
// }


// export function fetchGame(endpoint: string) {
//     return axios.create({
//         baseURL: "https://api.rawg.io/api/games/",
//         params: {
//             key: "d5813d3966db44e9b6e25b42b7ba36ad"
//         }
//     }).get<Game>(endpoint).
//         then(response => response.data);
// }