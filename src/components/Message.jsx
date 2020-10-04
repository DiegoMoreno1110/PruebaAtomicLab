import React from 'react';
import styled from "@emotion/styled";


const Message = () => {

    const ContaineMessage = styled.div`
        width: 30vw;
        height: 30vh;
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        margin-left: 35vw;
    `;

    const Imagen  = styled.img`
        margin: 0;
        position: absolute;
        top: 20%;
        margin-left: 13vw;
    `;

    const Parrafo = styled.p`
        color: #FFF;
        text-align: center;
        font-size: 20px;
        margin: 0;
        position: absolute;
        top: 60%;
    `;

    return ( 
        <ContaineMessage>
            <Imagen  src={require("../images/checkmark.png")} alt="1"></Imagen>
            <Parrafo>Te hemos enviado el código al número que nos proporcionaste</Parrafo>

        </ContaineMessage>
    );
}
 
export default Message;
