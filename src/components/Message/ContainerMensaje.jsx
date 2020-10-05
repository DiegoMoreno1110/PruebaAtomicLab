import React from 'react';
import styled from "@emotion/styled";
import Message from './Message';


const ContainerMensaje = ({mensaje, imagen, link}) => {

    const Container = styled.div`
        background-color: #072348;
        width: 100vw;
        height: 100vh;
    `;

    

    return ( 
        <Container>
            <Message
                mensaje={mensaje}
                imagen={imagen}
                link={link}
            />
        </Container>
    );
}
 
export default ContainerMensaje;
