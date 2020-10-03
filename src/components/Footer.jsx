import React from 'react';
import styled from "@emotion/styled";

const Container = styled.footer`
    background-color: #000000;
    height: 124px;
    width: auto;
`;

const ParrafoDerechosReservados = styled.p`
    text-align: left;
    font-family: normal normal 800 18px/63px Montserrat;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-left: 108px;
    margin-top: 51px;
    position: absolute;
`;

const ParrafoAvisoPrivacidad  = styled.p`
    text-align: left;
    font-family: normal normal 800 18px/63px Montserrat;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-left: 896px;
    margin-top: 51px;
    position: absolute;
`;

const ImageTwitter = styled.img`
    margin-left: 1219px;
    margin-top: 51px;
    position: absolute;
    height: 32px;

`;

const ImageLinkedIn = styled.img`
    margin-left: 1148px;
    margin-top: 51px;
    position: absolute;
    height: 32px;

`;

const Footer = () => {
    return ( 
        <Container>
            <ParrafoDerechosReservados>&copy; 2020 AtomicLabs. Todos los derechos reservados</ParrafoDerechosReservados>
            <ParrafoAvisoPrivacidad>Aviso de Privacidad</ParrafoAvisoPrivacidad>
            <ImageTwitter  src={require("../images/twitter.png")} alt="twitter_logo"></ImageTwitter>
            <ImageLinkedIn  src={require("../images/linkedin.png")} alt="linkedIn_logo"></ImageLinkedIn>
        </Container>  

    );
}
 
export default Footer;