import React from 'react';
import styled from "@emotion/styled";
import Image from './Image'; 
import CentralTerminos from './CentralTerminos';

const ContainerTerminos = () => {

    const Container = styled.div`
        height: 891px;
        background-color: #072348;
        width: auto;
    `;


    return ( 
        <Container>
            <CentralTerminos/>
            <Image
                image={"Group4038"}
            />

        </Container>
     );
}
 
export default ContainerTerminos;