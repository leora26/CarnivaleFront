import {styled} from "styled-components";

export const RegisterStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            margin-top: 10%;
        }
`