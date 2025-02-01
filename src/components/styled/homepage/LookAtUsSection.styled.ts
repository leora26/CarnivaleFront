import {styled} from "styled-components";

export const LookAtUsSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    align-items: start;
    margin-bottom: 5%;
    
    h3 {
        font-size: 5rem;
        text-transform: uppercase;
        font-family: ${({ theme }) => theme.fonts.primaryBold};
        font-weight: bold;
    }
`

export const LookAtUsContainer = styled.div`
    display: flex;
    flex-direction: row;
`


interface ImagesContainerProps {
    direction: 'row' | 'column'
}

export const ImagesContainer = styled.div<ImagesContainerProps>`
    display: flex;
    flex-direction: ${({direction}) => direction};
    
    
`