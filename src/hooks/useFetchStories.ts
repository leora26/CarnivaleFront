import axios from "axios";
import {useQuery} from "react-query";
import AllStories from "../models/response/AllStories";
import ApiResponse from "../models/response/ApiResponse";

interface FetchStoriesProps {
    category: string;
}

const fetchStories = async (data: FetchStoriesProps): Promise<ApiResponse<AllStories[]>> => {
    const backendUrl = process.env.REACT_API_URL
    const response = await axios.get(`${backendUrl}${data.category}`)
    return response.data
}

const useFetchStories = (category: string) => {
    return useQuery(
        ["stories", {category}],
        () => fetchStories({category}),
        {
            onError: (error) => {
                console.error("Error fetching stories:", error)
            }
        }
    )
}

export default useFetchStories;