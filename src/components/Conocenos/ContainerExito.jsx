import React from 'react';
import styled from "@emotion/styled";
import Image from './Image'; 
import CentralExito from './CentalExito';

const ContainerExito = () => {

    const Container = styled.div`
        height: 891px;
        background-color: #072348;
        width: auto;
    `;


    return ( 
        <Container>
            <CentralExito/>
            <Image
                image={"Group4039"}
            />

        </Container>
     );
}
 
export default ContainerExito;