import React, {useState} from 'react';
import styled from "@emotion/styled";
import { Redirect } from 'react-router-dom';


const Message = ({mensaje, imagen, link}) => {

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

    const [show, setShow] = useState(false)

    setTimeout(() =>{
        setShow(true);

    }, 3000);

    clearTimeout();



    return ( 
        <ContaineMessage>
            <Imagen  src={require(`../../images/${imagen}.png`)} alt="1"></Imagen>
            <Parrafo>{mensaje}</Parrafo>
            {show ? <Redirect to={`/${link}`} /> : null}

        </ContaineMessage>
    );
}
 
export default Message;
