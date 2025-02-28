import {styled} from "styled-components";

export const LookAtUsSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 80vh;
    align-items: center;
    margin-bottom: 5%;
    
    h3 {
        font-size: 5rem;
        text-transform: uppercase;
        font-family: ${({ theme }) => theme.fonts.primaryBold};
        font-weight: bold;
        align-self: start;
        margin-bottom: 2rem;
        margin-left: 5%;
    }
`

export const LookAtUsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    
    img {
        border-radius: 1rem;
    }
    
    #firstImages {
        width: 38rem;
        height: 100%;
        
        #firstImage {
            margin-bottom: 1rem;
        }
        
        #imageAndButton{
            justify-content: space-between;
            
            img {
                width: 80%;
            }
        }

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            width: 32rem;
        }
    }
    
    #bigGif {
        width: 24rem;

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            width: 20rem;
        }
    }
    
    #secondImages{
        width: 30rem;
        height: 100%;

        
        #smallestImages{
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            
            img {
                width: 48%;
            }
        }

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            width: 25rem;
        }
    }
    
`


interface ImagesContainerProps {
    direction: 'row' | 'column'
}

export const ImagesContainer = styled.div<ImagesContainerProps>`
    display: flex;
    flex-direction: ${({direction}) => direction};
    
    
    #seeMoreButton {
        margin-left: 1rem;
        font-weight: bold;
        cursor: pointer;
        width: 10%;
        background-color: ${({theme}) => theme.colors.primary};
        border: none;
        border-radius: 5rem;
        
        #buttonContainer {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            transform: translate(-50%, -50%) rotate(-90deg);
            width: 20rem;
            margin-left: 1.5rem;
            margin-top: 2rem;
        }
        
        span {
            display: inline-block;
            white-space: nowrap; 
            font-size: 1.8rem;
        }

        svg {
            width: 50px;
            height: 50px;
            transform:rotate(45deg);
        }
    }
    
`

export const BigImageContainer = styled.div<ImagesContainerProps>`
    display: flex;
    flex-direction: ${({direction}) => direction};
    
`