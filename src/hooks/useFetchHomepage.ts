import axios from "axios";
import {useQuery} from "react-query";
import Homepage from "../models/response/Homepage";

const fetchHomepage = async (): Promise<Homepage> => {
    const backendUrl = process.env.REACT_API_URL;
    const response = await axios.get(`${backendUrl}home`)
    return response.data;
}

const useFetchHomepage = () => {
    return useQuery("homepage", fetchHomepage);
}

export default useFetchHomepage;