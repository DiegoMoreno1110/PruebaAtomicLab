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
                        key={1}
                        setNextComponent={setNextComponent}
                      />,
                      <Image
                            key={2}
                            image={"Group4034"}
                        />]
            }
        </Container>
     );
}
 
export default ContainerValidaCelular;