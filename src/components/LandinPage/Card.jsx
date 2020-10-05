import React from 'react';
import styled from "@emotion/styled";

const Card = ({color, marginLeft, marginTop, width, height, titulo, texto1, texto2, texto3, imagen}) => {

    const Cards = styled.div`
        background-color: ${color};
        margin-top: ${marginTop}; //61
        width: ${width};
        height: ${height};
        display:inline-flex;
        margin-left: ${marginLeft};

    `;

    const Line = styled.p`
        color: #FA4D09;
        text-align: center;
        font-size: 20px;
        margin-top: 170px;
        font-weight: bold;
        position: absolute;
        margin-left: 130px;
    `;

    const Titulo = styled.p`
        text-align: center;
        color:#FA4D09;
        font-size: 30px;
        font-weight: bold;
        margin-top: 200px;
        position: absolute;
        margin-left: 114px;
    `;

    const Li = styled.li`
        text-align: left;
        color: #072348;
        font-size: 18px;
        margin-top: 10px;
    `;

    const Span = styled.span`
        font-weight: bold;
        position: absolute;
        width: 239px;
    `;

    const Lista = styled.ul`
        margin-left: 30px;
        margin-right: 20px;
        margin-top: 250px;
        width: 100px;
    `;

    return ( 
        <Cards>
            <img src={require(`../../images/${imagen}.png`)} alt="4" style={{marginTop: "20px", marginLeft: "95.5px", position: "absolute"}}></img>
            <Line>_____ _ _____</Line>
            <Titulo>{titulo}</Titulo>
            <Lista>
                <Li style={{marginBottom: "35px"}}><Span >{texto1}</Span></Li>
                <Li><Span>{texto2}</Span></Li>
                <Li><Span>{texto3}</Span></Li>
            </Lista>


        </Cards>
    );
}
 
export default Card;
