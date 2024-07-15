import {styled} from "styled-components";

const TextOverlay = styled.div`
    z-index: 2;
    position: relative;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    
    & h1{
        color: white;
        font-size: 8em;
        letter-spacing: 1.5rem;
        margin: 0;
        align-self: center;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: lighter;


        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 6em;        
        }
    }
    
    & #booking-heading{
        letter-spacing: 0 !important;
        font-size: 6em;
        margin-bottom: 10%;
    }
    
    & p{
        color: white;
        width: 20%;
        align-self: center;
        margin-left: 32%;
        margin-top: 0;
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fonts.secondaryLight};
        font-weight: lighter;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 30%;
        }
    }
    
    & span {
        width: 50%;
        color: white;
        font-size: 2em;
        letter-spacing: 0.1rem;
        text-align: center;
        align-self: center;
        font-family: ${({ theme }) => theme.fonts.secondaryRegular};
        font-weight: lighter;
        margin: 0 auto;

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            width: 65%;
        }
    }

    & h2{
        width: 100% ;
        color: white;
        font-size: 8em;
        margin: 0 0 0 5%;
        align-self: flex-start;
        font-family: ${({ theme }) => theme.fonts.primaryBold};
    }

    & h3{
        color: white;
        font-size: 2em;
        margin: 0 0 0 6%;
        align-self: flex-start;
        font-family: ${({ theme }) => theme.fonts.secondaryLight};
        font-weight: lighter;
    }
    
    & input{
        width: 80%;
        padding: 2.5rem;
        border: none;
        border-radius: 1rem;
        align-self: center;
        margin-bottom: -10%;
    }
`;

export default TextOverlay;