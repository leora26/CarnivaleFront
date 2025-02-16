import axios from "axios";
import FAQ from "../models/response/FAQ";
import {useQuery} from "react-query";

const fetchFAQ = async (): Promise<FAQ> => {
    const backendUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get(`${backendUrl}faq`)
    return response.data.data;
}

const useFetchFAQ = () => {
    return useQuery({queryKey: ["faq"], queryFn: fetchFAQ})
}

export default useFetchFAQ;