import React from 'react';
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

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
        <Link to="/conocenos"><Boton>{texto}</Boton></Link>
    );
}
 
export default WhiteButton;
