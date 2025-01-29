import axios, {AxiosResponse} from "axios";
import {useMutation} from "react-query";
import ApiResponse from "../models/response/ApiResponse";

interface NewsletterProps {
    email: string;
}


const newsletter = async ({email}: NewsletterProps): Promise<AxiosResponse<ApiResponse<string>>> => {
    const backendUrl = process.env.REACT_API_URL;
    return await axios.post(`${backendUrl}newsletter`, {
        email
    })
}

const useNewsletterMutation = () => {
    return useMutation(
        newsletter,
        {
            onSuccess: (data) => {
                console.log(`${data.data.data} has been added to newsletter`)
            },
            onError: (error) => {
                console.error(error)
            }
        }
    )
}

export default useNewsletterMutation;