import {styled} from "styled-components";

export const LookAtUsTabletSectionStyled = styled.section`
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
    
    img {
        border-radius: 1rem;
    }
`


export const BigImageContainerTablet = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 70%;
    justify-content: space-between;
    
    #firstGif {
        width: 43%;
        height: auto; 
        object-fit: cover;
        overflow: hidden; 
    }
`

export const ImageButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
        width: 13rem;
        height: 13rem;
        object-fit: cover;
        object-position: center;

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: 11rem;
            height: 11rem;
        }
    }

    #seeMoreButton {
        font-weight: bold;
        cursor: pointer;
        width: 90%;
        background-color: ${({theme}) => theme.colors.primary};
        border: none;
        border-radius: 5rem;
        margin-bottom: auto;
        padding: 0.5rem 1rem;

        #buttonContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        span {
            display: inline-block;
            white-space: nowrap;
            font-size: 1.4rem;

        }

        svg {
            transform: rotate(-45deg);
            width: 50px;
            height: 50px;
        }
    }
`


export const FirstImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 55%;
`

export const GifImageButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
`

export const LastImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    justify-content: space-between;
    
    #thirdImage {
        width: 30%;
    }
    
    #firstImage {
        width: 67%;
    }
`