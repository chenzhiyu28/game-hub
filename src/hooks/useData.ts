import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

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
