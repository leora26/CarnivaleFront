import {styled} from "styled-components";
import {motion} from "framer-motion";

export const CarouselV1Styled = styled(motion.div)`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    @media (max-width: ${({theme}) => theme.display.mobile}) {
       width: 120%;
        height: 50%;
    }
`