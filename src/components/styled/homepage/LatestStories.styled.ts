import {styled} from "styled-components";
import {motion} from "framer-motion";


export const LatestStoriesStyled = styled(motion.section)`
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5%;
    margin-left: 5%;
    align-self: center;
    
    @media (max-width: ${({theme}) => theme.display.mobile}) {
        flex-direction: column;
    }
`

export const LatestStoryCardContainer = styled.div`
    position: relative;
    
    &:first-child {
        position: relative;
    }
    
    .latestStorySvg{
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            height: 30vh;
        }
    }
    
    
`