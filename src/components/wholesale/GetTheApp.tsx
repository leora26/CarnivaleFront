import {GetAppText} from "../styled/wholesale/GetAppText";
import React from "react";
import {GetTheAppStyled} from "../styled/wholesale/GetTheApp.styled";
import AppLink from "./AppLink";


const GetTheApp = () => {
    return (
        <>
            <GetTheAppStyled>
                <GetAppText><span>GET</span> OUR APP FOR CHEFS NOW GET OUR APP FOR CHEFS NOW</GetAppText>
                <GetAppText>GET <span>OUR</span> APP FOR CHEFS NOW GET OUR APP FOR CHEFS NOW</GetAppText>
                <GetAppText>GET OUR <span>APP</span> FOR CHEFS NOW GET OUR APP FOR CHEFS NOW</GetAppText>
                <GetAppText>GET OUR APP <span>FOR</span> CHEFS NOW GET OUR APP FOR CHEFS NOW</GetAppText>
                <GetAppText>GET OUR APP FOR <span>CHEFS</span> NOW GET OUR APP FOR CHEFS NOW</GetAppText>
                <GetAppText>GET OUR APP FOR CHEFS <span>NOW</span> GET OUR APP FOR CHEFS NOW</GetAppText>

            <AppLink/>
            </GetTheAppStyled>


        </>
    )
}

export default GetTheApp;