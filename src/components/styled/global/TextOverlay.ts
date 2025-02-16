import {styled} from "styled-components";

export const TextOverlay = styled.div`
    z-index: 2;
    position: relative;
    width: 100%;
`;

export const HomePageOverlay = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        color: white;
        font-size: 8em;
        letter-spacing: 1.5rem;
        margin: 0;
        align-self: center;
        font-family: ${({theme}) => theme.fonts.primary};
        font-weight: 400;


        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 6em;
            letter-spacing: 0.5rem;
            transform: rotate(90deg);
            transform-origin: center;
            margin-right: 80%;
            margin-top: 20%;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            font-size: 4em;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 2.8em;
            margin-right: 70%;
            margin-top: 15%;
        }
    }

    p {
        color: white;
        width: 20%;
        align-self: center;
        margin-left: 32%;
        margin-top: 0;
        font-size: 1.4rem;
        font-family: "Lexend", sans-serif;
        font-weight: 300;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 40%;
            margin: 40% 50% 0 0 ;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            font-size: 1rem;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 0.8rem;
            margin: 60% 20% 0 0 ;
            align-self: center;
            width: 60%;
        }
    }
`
export const WholesaleOverlay = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 5%;
    font-family: ${({theme}) => theme.fonts.primaryBold};


    h2 {
        font-size: 4rem;
        font-family:  ${({theme}) => theme.fonts.primary};
        color: white;
        margin-bottom: 1rem;
    }

    p {
        width: 50%;
        font-size: 1.5rem;
        font-weight: 200;
        color: white;
    }
`
