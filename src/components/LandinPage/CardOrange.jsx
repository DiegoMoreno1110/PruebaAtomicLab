import React from 'react';
import styled from "@emotion/styled";

const CardOrange = ({marginLeft, width}) => {

    const Cards = styled.div`
        background-color: #FA4D09;
        margin-top: 10px; //61
        width: ${width};
        height: 561px;
        display:inline-flex;
        margin-left: ${marginLeft};

    `;

    const Line = styled.p`
        color: white;
        text-align: center;
        font-size: 20px;
        margin-top: 230px;
        font-weight: bold;
        position: absolute;
        margin-left: 130px;
    `;

    const Titulo = styled.p`
        text-align: center;
        color: white;
        font-size: 30px;
        font-weight: bold;
        margin-top: 260px;
        position: absolute;
        margin-left: 114px;
    `;

    const Li = styled.li`
        text-align: left;
        color: white;
        font-size: 21px;
        margin-top: 10px;
    `;

    const Span = styled.span`
        font-weight: bold;
        position: absolute;
    `;

    const Lista = styled.ul`
        margin-left: 30px;
        margin-right: 50px;
        margin-top: 300px;
        width: 100px;
    `;

    return ( 
        <Cards>
            <img src={require("../../images/Group4036.png")} alt="4" style={{marginTop: "20px", marginLeft: "55.5px", position: "absolute"}}></img>
            <Line>_____ _ _____</Line>
            <Titulo>IMAGINA</Titulo>
            <Lista>
                <Li><Span>Estrategia Digital</Span></Li>
                <Li><Span>Big Data & Analysis</Span></Li>                
                <Li><Span>Consultoría Tecnológica</Span></Li>
                <Li><Span>Reducción de costos TI</Span></Li>
            </Lista>


        </Cards>
    );
}
 
export default CardOrange;
