import React, {useState} from 'react';
import styled from "@emotion/styled";
import CentralValidaCelular from './CentralValidaCelular';
import Image from './Image'; 
import ContainerCodigo from './ContainerCodigo';

const ContainerValidaCelular = () => {

    const Container = styled.div`
        height: 891px;
        background-color: #072348;
        width: auto;
    `;

    const [nextComponent, setNextComponent] = useState(false);

    return ( 
        <Container>
            {
                nextComponent 
                    ? <ContainerCodigo/>
                    : [<CentralValidaCelular
                        setNextComponent={setNextComponent}
                      />,
                      <Image
                            image={"Group4034"}
                        />]
            }
        </Container>
     );
}
 
export default ContainerValidaCelular;