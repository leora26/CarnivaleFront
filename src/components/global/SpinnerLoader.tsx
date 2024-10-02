import SpinnerGIF from "../../assets/videos/Spinner.gif";
import {SpinnerLoaderStyled} from "../styled/global/SpinnerLoader.styled";
import React from "react";

interface SpinnerProps {
    height: number;
}

const SpinnerLoader: React.FC<SpinnerProps> = (props) => {
    return (
        <SpinnerLoaderStyled height={props.height}>
            <img src={SpinnerGIF} alt="Loading Spinner"/>
        </SpinnerLoaderStyled>
    );
}

export default SpinnerLoader;
