import axios from "axios";
import {useQuery} from "react-query";
import Homepage from "../models/response/Homepage";
import ApiResponse from "../models/response/ApiResponse";

const fetchHomepage = async (): Promise<ApiResponse<Homepage>> => {
    const backendUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get(`${backendUrl}home`)
    return response.data;
}

const useFetchHomepage = () => {
    return useQuery("homepage", fetchHomepage);
}

export default useFetchHomepage;