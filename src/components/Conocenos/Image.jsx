import React from 'react';
import styled from "@emotion/styled";

const Image = ({image}) => {

    const Imagen = styled.img`
        display: inline-flex;
        margin-left: 950px;
        height: 559px;
        width: 394px;
        margin-top: -0px;
    `;

    return ( 
        <Imagen  src={require(`../../images/${image}.png`)} alt="1"></Imagen>
    );
}
 
export default Image;
