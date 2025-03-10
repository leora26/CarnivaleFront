import {styled} from "styled-components";

export const CategoriesSectionStyled = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80vh;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
    
    h2 {
        font-size: 8rem;
        width: 20%;
        height: 95%;
        margin: 0 8% 8% 0;
        text-transform: uppercase;
        letter-spacing: -2px;
        border-bottom: 1rem solid #FFDD5A;


        @media (max-width: ${({theme}) => theme.display.laptop}) {
            font-size: 7rem;
            width: 25%;
            height: 100%;
        }
        
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            font-size: 6.5rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            font-size: 6rem;
            height: 90%;
        }
        
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 5rem;
            height: auto;
            width: 85%;
            align-self: center;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            font-size: 3.8rem;
        }
        

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 2rem;
            width: 90%;
            height: auto;
            border-bottom: 6px solid #FFDD5A;
        }
    }

    @media (max-width: ${({theme}) => theme.display.laptop}) {
        margin-bottom: 10%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        flex-direction: column;
        margin-bottom: 0;
        height: 60vh;
    }
`

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`