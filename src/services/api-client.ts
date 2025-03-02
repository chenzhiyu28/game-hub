import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

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
        return axiosInstance.get<FetchResponse<T>>(this.endPoint, { ...requestConfig })
    }

    public get(id: number | string) {
        return axiosInstance.get<T>(this.endPoint + "/" + id).
            then(response => response.data);
    }
}

export default APIClient;
