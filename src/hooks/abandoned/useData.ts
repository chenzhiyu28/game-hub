import { useEffect, useState } from "react";
import { FetchResponse } from "../../services/api-client";
import axios, { AxiosRequestConfig, CanceledError } from "axios";


const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d5813d3966db44e9b6e25b42b7ba36ad"
    }
})

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState(" ");
    const [isLoading, setLoading] = useState(false);

    const fetchData = () => {
        const controller = new AbortController();
        apiClient.get<FetchResponse<T>>(endpoint, { ...requestConfig, signal: controller.signal })
            .then(res => { setData(res.data.results); setLoading(false); setError(" ") })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })
        setLoading(true);
        return () => controller.abort();
    }

    useEffect(() => fetchData(), deps ?? [])
    return { isLoading, data, error, apiClient }
}

export default useData;
