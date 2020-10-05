import React from 'react';
import styled from "@emotion/styled";
import WhiteButton from './WhiteButton';

const TerceraParte = () => {

    const Container = styled.div`
        background-color: #072348;
        width: auto;
        height: 761px;
        padding-top: 50px;
    `;

    const Text = styled.p`
        text-align: center;
        font-weight: bold;
        padding-top:0px;
        margin-top: -0px;
        margin-bottom: -0px;
    `;

    const Parrafo = styled.p`
        display: inline-flex;
        color: white;
        font-size: 24px;
        width: 154px;
        text-align: center;

    `;

    return ( 
        <Container>
            <Text style={{fontSize:"50px", color:"white"}}>¡TE ENCANTARÁ</Text>
            <Text style={{fontSize:"50px", color:"#FA4D09"}}>TRABAJAR CON NOSOTROS!</Text>
            <img src={require("../../images/Group4040.png")} alt="4" style={{marginTop: "20px", width: "80%", marginLeft: "10%"}}></img>
            <div>
                <Parrafo style={{marginLeft: "108px"}}>Contratación remota</Parrafo>
                <Parrafo style={{marginLeft: "169px"}}>Entrevista con el área de RH</Parrafo>
                <Parrafo style={{marginLeft: "169px"}}>Prueba práctica</Parrafo>
                <Parrafo style={{marginLeft: "169px"}}>Entrevista técnica</Parrafo>

            </div>

            <div style={{marginTop: "52px", marginLeft:"530px"}}>
                <WhiteButton texto={"¡Quiero ser parte!"}/>
            </div>

        </Container>
    );
}
 
export default TerceraParte;
