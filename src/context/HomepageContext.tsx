import Homepage from "../models/response/Homepage";
import {createContext, ReactNode} from "react";
import useFetchHomepage from "../hooks/useFetchHomepage";

interface HomepageContextProps {
    homepageInfo: Homepage | null;
}

interface HomepageContextProvideProps {
    children: ReactNode;
}

export const HomepageContext = createContext<HomepageContextProps | null>(null);

export const HomepageContextProvider = ({children}: HomepageContextProvideProps) => {
    const {data: homepageInfo, isLoading, error} = useFetchHomepage();

    return (
        <HomepageContext.Provider value={{ homepageInfo: homepageInfo ?? null }}>
            {children}
        </HomepageContext.Provider>
    )
}