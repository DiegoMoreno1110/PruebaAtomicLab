import React, {useState} from 'react';
import styled from "@emotion/styled";
import { Redirect } from 'react-router-dom';


const Message = ({mensaje, imagen, link}) => {

    const ContaineMessage = styled.div`
        width: 400px;
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
        margin-left: 10vw;
        width: 70px;
        height: 70px;
    `;

    const Parrafo = styled.p`
        color: #FFF;
        text-align: center;
        font-size: 20px;
        position: absolute;
        top: 60%;
        margin-left: 0px;
        
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
