import {styled} from "styled-components";


interface CompaniesSectionProps {
    direction?: 'column' | 'row';
}

export const CompanySection = styled.section<CompaniesSectionProps>`
    width: 100%;
    height: 70vh;
    border-radius: 2rem;
    position: relative;
    display: flex;
    flex-direction: ${(props) => props.direction};
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;

    & .tabletSVGs {
        position: absolute;
        z-index: 2;
        width: 95%;
        height: 100%;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 95vw;
            height: 90vh;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 95vw;
            height: 70vh;
        }

        & image {
            width: 100%;
            height: 100%;
        }
    }
    
    
    & h2{
        font-family: "Lexend", sans-serif;
        font-weight: 400;
        font-size: 4rem;
        margin: 0;
        width: 80%;
        text-align: center;
    }
`