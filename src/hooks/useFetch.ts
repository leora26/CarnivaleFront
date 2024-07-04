import {useState, useEffect} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";

type ApiResponse<T> = {
    data: T | null;
    loading: boolean;
    error: AxiosError | null;
}

function useFetch<T>(url: string): ApiResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response: AxiosResponse<T> = await axios.get(url);
                setData(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setError(error);
                } else {
                    setError(new AxiosError("An unknown error occurred"));
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return {data, loading, error};
}

export default useFetch;