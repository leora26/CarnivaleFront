import {styled} from "styled-components";

const WeWorkWithLinkStyled = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 3px solid black;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.8rem;
    margin-bottom: 2rem;

    & :first-child {
        color: black;
        font-size: 8rem;
        text-transform: uppercase;
        text-align: start;
        text-decoration: none;
        font-family: ${({theme}) => theme.fonts.primarySemiBold};

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 5rem;
        }
    }
    
`

export default WeWorkWithLinkStyled;