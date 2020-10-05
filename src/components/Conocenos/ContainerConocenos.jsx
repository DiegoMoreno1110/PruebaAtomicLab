import React, {useState} from 'react';
import styled from "@emotion/styled";
import Logo from '../MainComponents/Logo';
import CentralConocenos from './CentralConocenos';
import Image from './Image'; 
import ContainerMensaje from '../Message/ContainerMensaje';

const ContainerConocenos = () => {

    const Container = styled.div`
        height: 891px;
        background-color: #072348;
        width: auto;
    `;

    const [nextComponent, setNextComponent] = useState(false);

    return ( 
        <Container>
            <Logo/>
            {
                nextComponent 
                    ? <ContainerMensaje/>
                    : [<CentralConocenos
                        setNextComponent={setNextComponent}
                      />,
                      <Image/>]
            }
            
            

        </Container>
     );
}
 
export default ContainerConocenos;