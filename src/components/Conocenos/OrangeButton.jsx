import React from 'react';
import styled from "@emotion/styled";

const Boton = styled.button`
    background-color:#FA4D09;
    border: #FA4D09;
    border-radius: 28px;
    width: 180px;
    height: 48px;
    color: white;
    font-family: Montserrat;
    font-size: 24px;

`;

const OrangeButton = ({texto, setNextComponent}) => {

    const clickBoton = () => {
        setNextComponent(true);
    };
    

    return ( 
        <Boton onClick={clickBoton}>{texto}</Boton>
     );
}
 
export default OrangeButton;
