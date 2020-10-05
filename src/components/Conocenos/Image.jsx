import React from 'react';
import styled from "@emotion/styled";

const Image = () => {

    const Imagen = styled.img`
        display: inline-flex;
        margin-left: 950px;
        height: 559px;
        width: 394px;
        margin-top: -0px;
    `;

    return ( 
        <Imagen  src={require("../../images/Group4033.png")} alt="1"></Imagen>
    );
}
 
export default Image;
