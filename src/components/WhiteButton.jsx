import React from 'react';
import styled from "@emotion/styled";

const Boton = styled.button`
    background-color: white;
    border-radius: 28px;
    width: 298px;
    height: 48px;
    color: #00609C;
    font-family: Montserrat;
    font-size: 24px;

`;

const WhiteButton = ({texto}) => {
    return (
        <Boton>{texto}</Boton>
    );
}
 
export default WhiteButton;
