import {useState, useEffect} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import ApiResponse from "../models/response/ApiResponse";

type FetchResponse<T> = {
    response: ApiResponse<T> | null;
    loading: boolean;
    error: AxiosError | null;
}

function useFetch<T>(url: string): FetchResponse<T> {
    const [response, setResponse] = useState<ApiResponse<T> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response: AxiosResponse<ApiResponse<T>> = await axios.get(url);
                setResponse(response.data);
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

    return {response, loading, error};
}

export default useFetch;